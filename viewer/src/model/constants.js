// Physical constants shared by the model layer. Values match the Python
// notebooks (`scripts/reference.py`) so the two implementations can be diffed.

export const DEG = Math.PI / 180
export const TWO_PI = 2 * Math.PI

export const MU = 398600.4418 // km^3/s^2, Earth gravitational parameter
export const R_EARTH = 6378.137 // km, WGS84 equatorial radius
export const J2 = 1.08262668e-3
export const SECONDS_PER_DAY = 86400
export const TROPICAL_YEAR_DAYS = 365.2422

// Mean-sun rate: the rate at which the fictitious mean Sun moves along the
// equator (USNO low-precision ephemeris), deg/day. This is also the RAAN
// precession rate an exactly sun-synchronous orbit must have.
export const MEAN_SUN_RATE_DEG_DAY = 0.9856474
export const MEAN_SUN_RATE_RAD_S = (MEAN_SUN_RATE_DEG_DAY * DEG) / SECONDS_PER_DAY

// Rate used by the notebooks when solving the SSO inclination (rad/s).
export const OMEGA_SSO_REQ = TWO_PI / (TROPICAL_YEAR_DAYS * SECONDS_PER_DAY)

// Altitude range exposed by the UI (km).
export const ALT_MIN_KM = 100
export const ALT_MAX_KM = 2000
