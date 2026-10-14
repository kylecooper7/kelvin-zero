"""Physical constants. These match the values used by the Kelvin Zero visualizer so the two
implementations can be compared number for number."""

import math

DEG = math.pi / 180.0
TWO_PI = 2.0 * math.pi

MU = 398600.4418  # km^3/s^2, Earth gravitational parameter
R_EARTH = 6378.137  # km, WGS84 equatorial radius
J2 = 1.08262668e-3
SECONDS_PER_DAY = 86400.0
TROPICAL_YEAR_DAYS = 365.2422

#: Mean-sun rate: the uniform eastward motion of the fictitious mean Sun along the equator
#: (USNO low-precision ephemeris), degrees per day. An exactly sun-synchronous orbit's node
#: precesses at this rate.
MEAN_SUN_RATE_DEG_DAY = 0.9856474
MEAN_SUN_RATE_RAD_S = MEAN_SUN_RATE_DEG_DAY * DEG / SECONDS_PER_DAY

#: Rate used when solving the sun-synchronous inclination (rad/s).
OMEGA_SSO_REQ = TWO_PI / (TROPICAL_YEAR_DAYS * SECONDS_PER_DAY)

ALT_MIN_KM = 100.0
ALT_MAX_KM = 2000.0
