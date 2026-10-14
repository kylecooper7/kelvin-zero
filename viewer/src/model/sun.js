// Apparent Sun model.
//
// A single low-precision ephemeris (USNO "Approximate Solar Coordinates",
// also used in notebook cell "Equation of Center vs RA Shift") drives
// everything that depends on the Sun: sub-solar point, sun vector, terminator,
// eclipse tests, the analemma, and the mean-sun (MSSI) frame rotation. Using
// one model everywhere guarantees that, e.g., the sub-solar point marker rides
// exactly on the analemma curve.
//
// Time argument `d` is days since the J2000.0 epoch (2000-01-01 12:00 TT);
// the app's timeline runs d = 0 … 365.24, i.e. one year starting at the epoch.

import { DEG, TWO_PI, MEAN_SUN_RATE_DEG_DAY, TROPICAL_YEAR_DAYS } from './constants.js'

/** Wrap an angle (radians) into [-π, π). */
export function wrapPi(a) {
  return ((((a + Math.PI) % TWO_PI) + TWO_PI) % TWO_PI) - Math.PI
}

/** Wrap an angle (radians) into [0, 2π). */
export function wrapTwoPi(a) {
  return ((a % TWO_PI) + TWO_PI) % TWO_PI
}

/**
 * Mean longitude of the Sun, L (radians). The mean Sun moves uniformly along
 * the celestial equator with RA = L; this angle is also the MSSI frame
 * rotation relative to ECI.
 * @param {number} d days since J2000
 */
export function meanSunLongitude(d) {
  return wrapTwoPi((280.46 + MEAN_SUN_RATE_DEG_DAY * d) * DEG)
}

/**
 * Full apparent-sun state.
 * @param {number} d days since J2000
 * @returns {{
 *   L: number, g: number, C: number, lambda: number, eps: number,
 *   ra: number, dec: number, eot: number,
 *   vecECI: {x:number,y:number,z:number}
 * }} angles in radians; eot = L − α (positive when the sundial runs fast)
 */
export function sunState(d) {
  const L = meanSunLongitude(d)
  const g = wrapTwoPi((357.528 + 0.9856003 * d) * DEG) // mean anomaly
  const C = (1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) * DEG // equation of center
  const lambda = wrapTwoPi(L + C) // true ecliptic longitude
  const eps = (23.439 - 0.00000036 * d) * DEG // obliquity

  const x = Math.cos(lambda)
  const y = Math.sin(lambda) * Math.cos(eps)
  const z = Math.sin(lambda) * Math.sin(eps)
  const ra = wrapTwoPi(Math.atan2(y, x))
  const dec = Math.atan2(z, Math.hypot(x, y))
  const eot = wrapPi(L - ra)

  return { L, g, C, lambda, eps, ra, dec, eot, vecECI: { x, y, z } }
}

/** Unit vector toward the (true) Sun in ECI. */
export function sunDirectionECI(d) {
  return sunState(d).vecECI
}

/**
 * Unit vector toward the Sun in the MSSI frame (ECI rotated by −L about z).
 * Its longitude is α − L = −EoT, its latitude the solar declination.
 */
export function sunDirectionMSSI(d) {
  const s = sunState(d)
  const c = Math.cos(-s.L)
  const sn = Math.sin(-s.L)
  const { x, y, z } = s.vecECI
  return { x: c * x - sn * y, y: sn * x + c * y, z }
}

/**
 * The analemma: locus of the sub-solar point in the MSSI frame over one year.
 * Returned as unit vectors in MSSI coordinates plus lat/lng (degrees).
 * @param {number} [numPoints=400]
 */
export function computeAnalemmaMSSI(numPoints = 400) {
  const pts = []
  for (let i = 0; i <= numPoints; i++) {
    const d = (i / numPoints) * TROPICAL_YEAR_DAYS
    const v = sunDirectionMSSI(d)
    pts.push({ d, x: v.x, y: v.y, z: v.z, lat: Math.asin(v.z) / DEG, lng: Math.atan2(v.y, v.x) / DEG })
  }
  return pts
}

/**
 * Locus of the sub-solar point in ECI over one year (the ecliptic). This is
 * what the "analemma" degenerates into in a non-rotating frame.
 * @param {number} [numPoints=360]
 */
export function computeEclipticECI(numPoints = 360) {
  const pts = []
  for (let i = 0; i <= numPoints; i++) {
    const d = (i / numPoints) * TROPICAL_YEAR_DAYS
    const v = sunDirectionECI(d)
    pts.push({ d, x: v.x, y: v.y, z: v.z, lat: Math.asin(v.z) / DEG, lng: Math.atan2(v.y, v.x) / DEG })
  }
  return pts
}

// ---------------------------------------------------------------- heliocentric geometry
const E_ORBIT = 0.0167086

/**
 * Earth's heliocentric position in the ecliptic frame (AU): X toward the vernal
 * equinox, Z toward the ecliptic north pole. Uses the same mean anomaly g and
 * equation of centre as sunState, so the Sun seen from this Earth is exactly
 * sunDirectionECI(d) rotated into the ecliptic.
 * @param {number} d days since J2000
 */
export function earthHeliocentricEcliptic(d) {
  const s = sunState(d)
  const nu = s.g + s.C // true anomaly ≈ mean anomaly + equation of centre
  const r = (1 - E_ORBIT * E_ORBIT) / (1 + E_ORBIT * Math.cos(nu))
  const lamEarth = s.lambda + Math.PI // heliocentric longitude of Earth = geocentric λ of the Sun + 180°
  return { x: r * Math.cos(lamEarth), y: r * Math.sin(lamEarth), z: 0, r, eps: s.eps, lambdaSun: s.lambda }
}

/** Points along Earth's orbit over one year (ecliptic frame, AU). */
export function earthOrbitEcliptic(numPoints = 360) {
  const pts = []
  for (let i = 0; i <= numPoints; i++) {
    const d = (i / numPoints) * TROPICAL_YEAR_DAYS
    pts.push({ d, ...earthHeliocentricEcliptic(d) })
  }
  return pts
}

/**
 * Days (since J2000, within the first year) of the equinoxes, solstices,
 * perihelion and aphelion, found by scanning the ephemeris.
 */
export function yearMarkers() {
  const find = (fn) => {
    let prev = fn(0)
    for (let d = 0.05; d <= TROPICAL_YEAR_DAYS + 0.05; d += 0.05) {
      const cur = fn(d)
      if (prev < 0 && cur >= 0) return d
      prev = cur
    }
    return NaN
  }
  const lamCross = (target) => find((d) => wrapPi(sunState(d).lambda - target))
  const gCross = (target) => find((d) => wrapPi(sunState(d).g - target))
  return [
    { key: 'marchEquinox', label: 'March equinox', d: lamCross(0) },
    { key: 'juneSolstice', label: 'June solstice', d: lamCross(Math.PI / 2) },
    { key: 'septemberEquinox', label: 'September equinox', d: lamCross(Math.PI) },
    { key: 'decemberSolstice', label: 'December solstice', d: lamCross(1.5 * Math.PI) },
    { key: 'perihelion', label: 'perihelion', d: gCross(0) },
    { key: 'aphelion', label: 'aphelion', d: gCross(Math.PI) },
  ]
}
