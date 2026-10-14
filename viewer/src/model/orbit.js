// Circular-orbit mechanics: sun-synchronous condition, J2 nodal precession,
// 3-D positions, β angle, cylindrical-shadow eclipse geometry.
//
// Conventions (identical to the notebooks):
//   plane normal   h = [ sin i sin Ω, −sin i cos Ω, cos i ]
//   position       r(u) = R3(Ω) R1(i) [cos u, sin u, 0]  (u = argument of latitude)
//   RAAN offset    Ω_off is measured in the MSSI frame, i.e. from the mean-Sun
//                  direction: Ω_off = 0 → ascending node at mean noon (LTAN 12:00),
//                  Ω_off = 90° → LTAN 18:00 (dawn–dusk), Ω_off = 270° → LTAN 06:00.
//   ECI RAAN       Ω(d) = L(d) + Ω_off + (Ω̇_J2 − L̇)·t   (drift term is 0 for an exact SSO)

import {
  ALT_MAX_KM,
  ALT_MIN_KM,
  DEG,
  J2,
  MEAN_SUN_RATE_RAD_S,
  MU,
  OMEGA_SSO_REQ,
  R_EARTH,
  SECONDS_PER_DAY,
  TROPICAL_YEAR_DAYS,
  TWO_PI,
} from './constants.js'
import { meanSunLongitude, sunDirectionECI, wrapTwoPi } from './sun.js'

/** @typedef {{ altitudeKm:number, inclinationDeg:number, raanOffsetDeg:number, initialMeanAnomalyDeg:number }} OrbitParams */

/** Orbital period (s) of a circular orbit at altitude h (km). */
export function orbitalPeriod(altitudeKm) {
  const a = R_EARTH + altitudeKm
  return TWO_PI * Math.sqrt((a * a * a) / MU)
}

/** Mean motion n (rad/s). */
export function meanMotion(altitudeKm) {
  const a = R_EARTH + altitudeKm
  return Math.sqrt(MU / (a * a * a))
}

/**
 * J2 nodal precession rate Ω̇ (rad/s) for a circular orbit.
 * Ω̇ = −(3/2) n J2 (R/a)² cos i
 */
export function raanPrecessionRate(altitudeKm, inclinationDeg) {
  const a = R_EARTH + altitudeKm
  const n = meanMotion(altitudeKm)
  return -1.5 * n * J2 * (R_EARTH / a) * (R_EARTH / a) * Math.cos(inclinationDeg * DEG)
}

/**
 * Exact sun-synchronous inclination (deg) for a circular orbit at altitude h:
 * solve Ω̇(i) = ω_req, giving cos i = −ω_req / ((3/2) n J2 (R/a)²).
 * Returns NaN if no retrograde solution exists.
 */
export function ssoInclinationDeg(altitudeKm) {
  const a = R_EARTH + altitudeKm
  const n = meanMotion(altitudeKm)
  const K = 1.5 * J2 * n * (R_EARTH / a) * (R_EARTH / a)
  const cosi = -OMEGA_SSO_REQ / K
  if (Math.abs(cosi) > 1) return NaN
  let i = Math.acos(cosi)
  if (i < Math.PI / 2) i = Math.PI - i
  return i / DEG
}

/**
 * Inverse of ssoInclinationDeg on the UI altitude range (monotonic), by
 * bisection. Clamps to [ALT_MIN_KM, ALT_MAX_KM].
 */
export function altitudeForSsoInclinationDeg(inclinationDeg) {
  let lo = ALT_MIN_KM
  let hi = ALT_MAX_KM
  if (inclinationDeg <= ssoInclinationDeg(lo)) return lo
  if (inclinationDeg >= ssoInclinationDeg(hi)) return hi
  for (let k = 0; k < 60; k++) {
    const mid = 0.5 * (lo + hi)
    if (ssoInclinationDeg(mid) < inclinationDeg) lo = mid
    else hi = mid
  }
  return 0.5 * (lo + hi)
}

export const I_MIN = ssoInclinationDeg(ALT_MIN_KM)
export const I_MAX = ssoInclinationDeg(ALT_MAX_KM)

/** Backwards-compatible names used by the UI. */
export const inclinationFromAltitude = (h) => ssoInclinationDeg(Math.min(ALT_MAX_KM, Math.max(ALT_MIN_KM, h)))
export const altitudeFromInclination = (i) => altitudeForSsoInclinationDeg(i)

/**
 * RAAN in ECI (radians) at day d.
 * @param {OrbitParams} orbit
 * @param {number} d
 */
export function raanECI(orbit, d) {
  const drift = raanPrecessionRate(orbit.altitudeKm, orbit.inclinationDeg) - MEAN_SUN_RATE_RAD_S
  return wrapTwoPi(meanSunLongitude(d) + orbit.raanOffsetDeg * DEG + drift * d * SECONDS_PER_DAY)
}

/** RAAN measured in the MSSI frame (radians) — constant for an exact SSO. */
export function raanMSSI(orbit, d) {
  return wrapTwoPi(raanECI(orbit, d) - meanSunLongitude(d))
}

/** Argument of latitude u (radians) at day d (circular orbit: u = M). */
export function argumentOfLatitude(orbit, d) {
  const n = meanMotion(orbit.altitudeKm)
  return wrapTwoPi(orbit.initialMeanAnomalyDeg * DEG + n * d * SECONDS_PER_DAY)
}

/** Orbit-plane unit normal in ECI. */
export function orbitNormalECI(orbit, d) {
  const O = raanECI(orbit, d)
  const i = orbit.inclinationDeg * DEG
  return { x: Math.sin(i) * Math.sin(O), y: -Math.sin(i) * Math.cos(O), z: Math.cos(i) }
}

/**
 * Unit position vector for argument of latitude u in a plane with RAAN Ω and
 * inclination i: R3(Ω) R1(i) [cos u, sin u, 0].
 */
export function planePoint(raan, inc, u) {
  const cu = Math.cos(u)
  const su = Math.sin(u)
  const cO = Math.cos(raan)
  const sO = Math.sin(raan)
  const ci = Math.cos(inc)
  const si = Math.sin(inc)
  return { x: cO * cu - sO * ci * su, y: sO * cu + cO * ci * su, z: si * su }
}

/**
 * Satellite position in ECI (km) at day d.
 * @param {OrbitParams} orbit
 * @param {number} d
 */
export function satellitePositionECI(orbit, d) {
  const r = R_EARTH + orbit.altitudeKm
  const p = planePoint(raanECI(orbit, d), orbit.inclinationDeg * DEG, argumentOfLatitude(orbit, d))
  return { x: r * p.x, y: r * p.y, z: r * p.z }
}

/**
 * Points (unit vectors, ECI) around the full orbit at day d.
 * @returns {Array<{x:number,y:number,z:number,u:number}>}
 */
export function orbitRingECI(orbit, d, numPoints = 240) {
  const O = raanECI(orbit, d)
  const inc = orbit.inclinationDeg * DEG
  const pts = []
  for (let k = 0; k <= numPoints; k++) {
    const u = (k / numPoints) * TWO_PI
    pts.push({ ...planePoint(O, inc, u), u })
  }
  return pts
}

/** Local time of the ascending node (hours, 0–24) from the MSSI RAAN offset. */
export function ltanHours(raanOffsetDeg) {
  return (((12 + raanOffsetDeg / 15) % 24) + 24) % 24
}

/** Format hours as HH:MM. */
export function formatHours(h) {
  const hh = Math.floor(h)
  const mm = Math.round((h - hh) * 60)
  const H = (mm === 60 ? hh + 1 : hh) % 24
  const M = mm === 60 ? 0 : mm
  return `${String(H).padStart(2, '0')}:${String(M).padStart(2, '0')}`
}

/**
 * β angle (radians): elevation of the Sun above the orbit plane,
 * sin β = ĥ · ŝ.
 */
export function betaAngle(orbit, d) {
  const h = orbitNormalECI(orbit, d)
  const s = sunDirectionECI(d)
  return Math.asin(Math.max(-1, Math.min(1, h.x * s.x + h.y * s.y + h.z * s.z)))
}

/**
 * Cylindrical-shadow test (Sun at infinity): a point at position p (km) is
 * eclipsed iff it is on the night side (p·ŝ < 0) and its distance from the
 * Sun–Earth axis is less than R_EARTH.
 */
export function isEclipsed(posKm, sunDir) {
  const dot = posKm.x * sunDir.x + posKm.y * sunDir.y + posKm.z * sunDir.z
  if (dot >= 0) return false
  const cx = posKm.y * sunDir.z - posKm.z * sunDir.y
  const cy = posKm.z * sunDir.x - posKm.x * sunDir.z
  const cz = posKm.x * sunDir.y - posKm.y * sunDir.x
  return Math.hypot(cx, cy, cz) < R_EARTH
}

/**
 * Fraction of one circular orbit spent in the cylindrical shadow, closed form:
 *   f_E = (1/π) · acos( √(1 − c²) / cos β ),  c = R/(R+h),  valid when cos β > √(1 − c²);
 * otherwise 0. No eclipse at all once |β| ≥ asin(c).
 */
export function eclipseFractionPerOrbit(betaRad, altitudeKm) {
  const c = R_EARTH / (R_EARTH + altitudeKm)
  const cb = Math.cos(betaRad)
  const k = Math.sqrt(Math.max(0, 1 - c * c))
  if (cb <= k) return 0
  return Math.acos(k / cb) / Math.PI
}

/** |β| above which the orbit is eclipse-free (deg). */
export function noEclipseBetaDeg(altitudeKm) {
  return Math.asin(R_EARTH / (R_EARTH + altitudeKm)) / DEG
}

/**
 * Angular radius α (deg) of the "sunlit cone" used by the eclipse-region map:
 * a direction p (point of the orbit shell projected onto the unit sphere) is
 * sunlit iff angle(p, ŝ) ≤ α, with α = 90° + acos(R/(R+h)).
 */
export function alphaDegForAltitude(altitudeKm) {
  return 90 + Math.acos(R_EARTH / (R_EARTH + altitudeKm)) / DEG
}

/**
 * Yearly eclipse statistics for an orbit: mean eclipse fraction over the year
 * (analytic per-orbit fraction with the true Sun, sampled daily), plus β range.
 * @returns {{ eclipseFraction:number, sunExposure:number, betaMinDeg:number, betaMaxDeg:number, eclipseDays:number }}
 */
export function yearlyEclipseStats(orbit, daySteps = 366) {
  let sum = 0
  let bmin = Infinity
  let bmax = -Infinity
  let eclipseDays = 0
  for (let k = 0; k < daySteps; k++) {
    const d = (k / daySteps) * TROPICAL_YEAR_DAYS
    const b = betaAngle(orbit, d)
    const f = eclipseFractionPerOrbit(b, orbit.altitudeKm)
    sum += f
    if (f > 0) eclipseDays++
    const bd = b / DEG
    if (bd < bmin) bmin = bd
    if (bd > bmax) bmax = bd
  }
  const eclipseFraction = sum / daySteps
  return {
    eclipseFraction,
    sunExposure: 1 - eclipseFraction,
    betaMinDeg: bmin,
    betaMaxDeg: bmax,
    eclipseDays: (eclipseDays / daySteps) * TROPICAL_YEAR_DAYS,
  }
}

/**
 * Brute-force yearly eclipse fraction using the cylindrical shadow test on
 * sampled orbit points (the notebook's `eclipse_fraction_for_orbit`). Used by
 * the tests to cross-check the analytic formula.
 */
export function yearlyEclipseFractionSampled(orbit, daySteps = 366, orbitSteps = 360) {
  const r = R_EARTH + orbit.altitudeKm
  let eclipsed = 0
  let total = 0
  for (let k = 0; k < daySteps; k++) {
    const d = (k / daySteps) * TROPICAL_YEAR_DAYS
    const s = sunDirectionECI(d)
    const O = raanECI(orbit, d)
    const inc = orbit.inclinationDeg * DEG
    for (let j = 0; j < orbitSteps; j++) {
      const p = planePoint(O, inc, (j / orbitSteps) * TWO_PI)
      if (isEclipsed({ x: r * p.x, y: r * p.y, z: r * p.z }, s)) eclipsed++
      total++
    }
  }
  return eclipsed / total
}
