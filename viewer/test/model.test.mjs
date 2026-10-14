// Parity tests: the JavaScript model vs. the independent Python implementation
// (the open-source `kelvinzero` package; `npm run reference` regenerates scripts/reference.json
// with `python3 -m kelvinzero reference scripts/reference.json`). Run with `npm test`.
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

import { DEG } from '../src/model/constants.js'
import { computeAnalemmaMSSI, sunDirectionMSSI, sunState, meanSunLongitude } from '../src/model/sun.js'
import { gmst, frameAngle, eciToDisplay, vecToLatLng, latLngToVec } from '../src/model/frames.js'
import {
  I_MAX,
  I_MIN,
  alphaDegForAltitude,
  altitudeForSsoInclinationDeg,
  betaAngle,
  eclipseFractionPerOrbit,
  isEclipsed,
  orbitNormalECI,
  orbitalPeriod,
  raanECI,
  raanMSSI,
  raanPrecessionRate,
  satellitePositionECI,
  ssoInclinationDeg,
  yearlyEclipseFractionSampled,
  yearlyEclipseStats,
  ltanHours,
} from '../src/model/orbit.js'
import {
  classifyRegions,
  computeSunDotExtrema,
  marchingSquaresLatLng,
  regionAreaFractions,
  regionContours,
  sunDotExtremaAt,
} from '../src/model/regions.js'

const here = path.dirname(fileURLToPath(import.meta.url))
const ref = JSON.parse(readFileSync(path.join(here, '..', 'reference.json'), 'utf8'))

const close = (a, b, tol, msg) => assert.ok(Math.abs(a - b) <= tol, `${msg ?? ''} expected ${b}, got ${a} (tol ${tol})`)
const angClose = (aDeg, bDeg, tol, msg) => {
  const d = ((((aDeg - bDeg) % 360) + 540) % 360) - 180
  assert.ok(Math.abs(d) <= tol, `${msg ?? ''} expected ${bDeg}°, got ${aDeg}° (Δ ${d})`)
}

test('USNO sun model matches the notebook formula exactly', () => {
  for (const r of ref.usno_sun) {
    const s = sunState(r.d)
    angClose(s.L / DEG, r.L, 1e-9, `L(d=${r.d})`)
    angClose(s.g / DEG, r.g, 1e-9, 'g')
    close(s.C / DEG, r.C, 1e-9, 'C')
    angClose(s.lambda / DEG, r.lam, 1e-9, 'λ')
    angClose(s.ra / DEG, r.ra_deg, 1e-9, 'α')
    close(s.dec / DEG, r.dec_deg, 1e-9, 'δ')
    close((s.eot / DEG) * 4, r.eot_min, 1e-9, 'EoT')
    close(s.vecECI.x, r.vec[0], 1e-12)
    close(s.vecECI.y, r.vec[1], 1e-12)
    close(s.vecECI.z, r.vec[2], 1e-12)
  }
})

test('GMST matches', () => {
  for (const r of ref.gmst) angClose(gmst(r.d) / DEG, r.gmst_deg, 1e-9)
})

test('Analemma in MSSI matches the Python implementation, including E–W orientation', () => {
  const { samples, lng_min, lng_max, lat_min, lat_max } = ref.analemma_mssi
  for (const smp of samples) {
    const ll = vecToLatLng(sunDirectionMSSI(smp.d))
    close(ll.lng, smp.lng_deg, 1e-9, `analemma lng at d=${smp.d}`)
    close(ll.lat, smp.lat_deg, 1e-9, `analemma lat at d=${smp.d}`)
  }
  const pts = computeAnalemmaMSSI(2000)
  const lngs = pts.map((p) => p.lng)
  const lats = pts.map((p) => p.lat)
  close(Math.min(...lngs), lng_min, 1e-9, 'lng min')
  close(Math.max(...lngs), lng_max, 1e-9, 'lng max')
  close(Math.min(...lats), lat_min, 1e-9, 'lat min')
  close(Math.max(...lats), lat_max, 1e-9, 'lat max')
  // Early November EoT ≈ +16 min → the Sun sits ≈ 4° WEST of the mean Sun (negative longitude).
  const d0 = 9132 // 2025-01-01 12:00
  const nov3 = sunState(d0 + 306)
  assert.ok((nov3.eot / DEG) * 4 > 14, 'EoT in early November should be ≈ +16 min')
  assert.ok(vecToLatLng(sunDirectionMSSI(d0 + 306)).lng < -3, 'Sun should be west of the mean Sun in November')
})

test('Sub-solar point is on the analemma by construction and MSSI frame angle = L', () => {
  for (const d of [0, 50.5, 123, 200, 301.7]) {
    const s = eciToDisplay(sunState(d).vecECI, 'MSSI', d)
    const m = sunDirectionMSSI(d)
    close(s.x, m.x, 1e-12)
    close(s.y, m.y, 1e-12)
    close(s.z, m.z, 1e-12)
    close(frameAngle('MSSI', d), meanSunLongitude(d), 0)
    assert.equal(frameAngle('EMI', d), 0)
  }
  const ll = latLngToVec(12.5, -77.3)
  const back = vecToLatLng(ll)
  close(back.lat, 12.5, 1e-9)
  close(back.lng, -77.3, 1e-9)
})

test('SSO inclination, period and J2 precession match the Python implementation', () => {
  for (const r of ref.sso) {
    close(ssoInclinationDeg(r.alt_km), r.inc_deg, 1e-9, `i(${r.alt_km})`)
    close(orbitalPeriod(r.alt_km), r.period_s, 1e-6, 'T')
    close((raanPrecessionRate(r.alt_km, r.inc_deg) / DEG) * 86400, r.raan_rate_deg_day, 1e-9, 'Ω̇')
    close(altitudeForSsoInclinationDeg(r.inc_deg), r.alt_km, 1e-6, 'inverse')
  }
  close(I_MIN, 95.99583464890226, 1e-9)
  close(I_MAX, 104.89007799414163, 1e-9)
})

test('An exact SSO is frozen in MSSI; RAAN offset ↔ LTAN', () => {
  const orbit = { altitudeKm: 800, inclinationDeg: ssoInclinationDeg(800), raanOffsetDeg: 90, initialMeanAnomalyDeg: 0 }
  for (const d of [0, 91.3, 182.6, 273.9, 365.2]) {
    angClose(raanMSSI(orbit, d) / DEG, 90, 1e-3, `Ω_MSSI(d=${d})`)
    angClose(raanECI(orbit, d) / DEG, meanSunLongitude(d) / DEG + 90, 1e-3)
  }
  // ascending node of Ω_off = 90° is 90° east of the mean Sun → LTAN 18:00
  close(ltanHours(90), 18, 1e-12)
  close(ltanHours(270), 6, 1e-12)
  close(ltanHours(0), 12, 1e-12)
  // the plane normal of a dawn–dusk orbit (Ω_off = 90°) points toward the mean Sun, tilted by (i − 90°)
  const n = eciToDisplay(orbitNormalECI(orbit, 10), 'MSSI', 10)
  const ll = vecToLatLng(n)
  angClose(ll.lng, 0, 1e-6, 'normal longitude')
  close(ll.lat, 90 - orbit.inclinationDeg, 1e-6, 'normal latitude')
})

test('Satellite position geometry: radius, on-plane, period', () => {
  const orbit = { altitudeKm: 550, inclinationDeg: ssoInclinationDeg(550), raanOffsetDeg: 30, initialMeanAnomalyDeg: 45 }
  const T = orbitalPeriod(550) / 86400
  const e0 = satellitePositionECI(orbit, 1)
  const e1 = satellitePositionECI(orbit, 1 + T)
  close(Math.hypot(e0.x, e0.y, e0.z), 6378.137 + 550, 1e-6)
  // In ECI the plane precesses during one revolution (≈0.065°); in MSSI it is frozen.
  const p0 = eciToDisplay(e0, 'MSSI', 1)
  const p1 = eciToDisplay(e1, 'MSSI', 1 + T)
  close(Math.hypot(p1.x - p0.x, p1.y - p0.y, p1.z - p0.z), 0, 0.01, 'returns after one period (MSSI)')
  assert.ok(Math.hypot(e1.x - e0.x, e1.y - e0.y, e1.z - e0.z) > 1, 'ECI position drifts with J2 precession')
  const n = orbitNormalECI(orbit, 1)
  const p0e = e0
  close(n.x * p0e.x + n.y * p0e.y + n.z * p0e.z, 0, 1e-6, 'position ⟂ normal')
})

test('Eclipse fraction per orbit: closed form matches the Python implementation', () => {
  for (const r of ref.eclipse_fraction) {
    close(eclipseFractionPerOrbit(r.beta_deg * DEG, r.alt_km), r.frac, 1e-12, `β=${r.beta_deg} h=${r.alt_km}`)
  }
  // Geometric sanity: at β = 0 the eclipse half-angle is asin(R/r) → fraction = asin(c)/π
  const c = 6378.137 / (6378.137 + 550)
  close(eclipseFractionPerOrbit(0, 550), Math.asin(c) / Math.PI, 1e-12)
})

test('Yearly eclipse fraction: analytic ≈ sampled cylinder test ≈ Python brute force', () => {
  for (const r of ref.yearly_sampled) {
    const orbit = { altitudeKm: r.alt_km, inclinationDeg: ssoInclinationDeg(r.alt_km), raanOffsetDeg: r.raan_mssi_deg, initialMeanAnomalyDeg: 0 }
    const sampled = yearlyEclipseFractionSampled(orbit, 183, 180)
    const stats = yearlyEclipseStats(orbit, 366)
    close(sampled, r.eclipse_frac, 0.004, `sampled vs python h=${r.alt_km} Ω=${r.raan_mssi_deg}`)
    close(stats.eclipseFraction, r.eclipse_frac, 0.006, `analytic vs python h=${r.alt_km} Ω=${r.raan_mssi_deg}`)
  }
})

test('Cylindrical shadow test', () => {
  const s = { x: 1, y: 0, z: 0 }
  assert.equal(isEclipsed({ x: -7000, y: 0, z: 0 }, s), true)
  assert.equal(isEclipsed({ x: 7000, y: 0, z: 0 }, s), false)
  assert.equal(isEclipsed({ x: -7000, y: 6400, z: 0 }, s), false)
  assert.equal(isEclipsed({ x: -7000, y: 6300, z: 0 }, s), true)
})

test('β angle is bounded by the sun-normal geometry', () => {
  const orbit = { altitudeKm: 800, inclinationDeg: ssoInclinationDeg(800), raanOffsetDeg: 90, initialMeanAnomalyDeg: 0 }
  const stats = yearlyEclipseStats(orbit, 366)
  // dawn-dusk: normal at lat −8.6°, lng 0 (MSSI); sun lat ∈ [−23.44, 23.44], lng ∈ ±4°
  // → β_min ≈ 90 − (23.44 + 8.6) ≈ 58°, β_max ≈ 90 − |EoT lng| ≈ 87° (sun crosses lat −8.6° twice a year)
  assert.ok(stats.betaMinDeg > 56 && stats.betaMinDeg < 60, JSON.stringify(stats))
  assert.ok(stats.betaMaxDeg > 85 && stats.betaMaxDeg <= 90, JSON.stringify(stats))
  assert.ok(Math.abs(betaAngle(orbit, 0)) <= Math.PI / 2)
})

test('Region extrema match the Python implementation', () => {
  for (const r of ref.region_minmax) {
    const e = sunDotExtremaAt(r.lat_deg, r.lng_deg, 2000)
    close(e.max, r.max_dot, 1e-9, `max @ (${r.lat_deg},${r.lng_deg})`)
    close(e.min, r.min_dot, 1e-9, `min @ (${r.lat_deg},${r.lng_deg})`)
  }
})

test('α(h) and region classification/contours behave', () => {
  for (const r of ref.alpha) close(alphaDegForAltitude(r.alt_km), r.alpha_deg, 1e-9)
  const ext = computeSunDotExtrema({ width: 181, height: 91, sunSamples: 120 })
  // grid extrema agree with the point evaluator
  const idx = 45 * 181 + 90 // lat 0, lng 0
  const e0 = sunDotExtremaAt(0, 0, 120)
  close(ext.max[idx], e0.max, 1e-6)
  close(ext.min[idx], e0.min, 1e-6)
  const fr = regionAreaFractions(ext, alphaDegForAltitude(1000))
  close(fr[0] + fr[1] + fr[2], 1, 1e-9)
  assert.ok(fr[2] > 0.5, 'most directions are always sunlit at 1000 km')
  assert.ok(fr[0] > 0.05, 'an anti-solar cap is always eclipsed')
  // at α = 90° (surface day/night) the direction toward the mean Sun is always lit and the anti-sun never
  const cls = classifyRegions(ext, 90)
  assert.equal(cls[45 * 181 + 90], 2)
  assert.equal(cls[45 * 181 + 0], 0)
  const cont = regionContours(ext, alphaDegForAltitude(1000))
  assert.ok(cont.dU.length >= 1 && cont.dI.length >= 1)
  // every contour point sits on its level set (within grid interpolation error)
  const lvl = Math.cos(alphaDegForAltitude(1000) * DEG)
  for (const pl of cont.dI.slice(0, 2)) {
    for (const p of pl.slice(0, 20)) close(sunDotExtremaAt(p.lat, p.lng, 120).min, lvl, 0.02)
  }
})

test('Marching squares: a tilted plane field yields a single straight contour', () => {
  const W = 37
  const H = 19
  const f = new Float32Array(W * H)
  for (let r = 0; r < H; r++) for (let c = 0; c < W; c++) f[r * W + c] = -90 + (180 * r) / (H - 1) - 10 // lat − 10
  const pls = marchingSquaresLatLng(f, W, H, 0)
  assert.equal(pls.length, 1)
  for (const p of pls[0]) close(p.lat, 10, 1e-9)
  const lngs = pls[0].map((p) => p.lng)
  close(Math.min(...lngs), -180, 1e-9)
  close(Math.max(...lngs), 180, 1e-9)
})

test('View presets apply through the views system', async () => {
  const { createInitialModel } = await import('../src/model/initialModel.js')
  const { applyViewPreset, addOrbit } = await import('../src/model/actions.js')
  const { VIEW_PRESETS } = await import('../src/model/presets.js')
  let m = createInitialModel()
  assert.deepEqual(m.views.map((v) => v.name), ['Overview', 'Eclipse', 'Frames', 'Sun-centred', 'Default View'])
  assert.equal(m.activeViewId, 'v_overview')
  // re-applying an existing preset reuses the view (no duplicates) and resets its config
  m = applyViewPreset(m, VIEW_PRESETS.eclipse)
  assert.equal(m.views.length, 5)
  assert.equal(m.views.find((v) => v.id === m.activeViewId).name, 'Eclipse')
  assert.equal(m.views.find((v) => v.id === m.activeViewId).config.display.orbits.o1.eclipseRegions, true)
  // a new preset name creates a view; new orbits get flags in every view
  m = applyViewPreset(m, { ...VIEW_PRESETS.eclipse, name: 'Eclipse (EMI)', coordinateFrame: 'EMI' })
  assert.equal(m.views.length, 6)
  assert.equal(m.views.find((v) => v.name === 'Sun-centred').config.toggles.viewMode, 'helio')
  assert.equal(m.views[0].config.toggles.coordinateFrame, 'EMI')
  m = addOrbit(m)
  const newId = m.orbits[1].id
  for (const v of m.views) assert.ok(v.config.display.orbits[newId], `view ${v.name} has flags for the new orbit`)
})
