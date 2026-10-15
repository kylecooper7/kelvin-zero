"""Apparent Sun model.

One low-precision ephemeris (the U.S. Naval Observatory "Approximate Solar Coordinates")
drives everything that depends on the Sun: the sub-solar point, the Sun vector, eclipse tests,
the analemma and the rotation of the mean-Sun (MSSI) frame. Using a single model everywhere
guarantees, for example, that the sub-solar point always lies on the analemma.

Time argument ``d`` is days since the J2000.0 epoch (2000-01-01 12:00 TT). All functions accept
scalars or NumPy arrays.
"""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from .constants import DEG, MEAN_SUN_RATE_DEG_DAY, TROPICAL_YEAR_DAYS, TWO_PI


def wrap_pi(a):
    """Wrap an angle (radians) into [-pi, pi)."""
    return (np.asarray(a) + np.pi) % TWO_PI - np.pi


def wrap_two_pi(a):
    """Wrap an angle (radians) into [0, 2*pi)."""
    return np.asarray(a) % TWO_PI


def mean_sun_longitude(d):
    """Mean longitude of the Sun L (radians). The mean Sun moves uniformly along the celestial
    equator with right ascension L; this is also the MSSI frame angle relative to ECI."""
    return wrap_two_pi((280.46 + MEAN_SUN_RATE_DEG_DAY * np.asarray(d, dtype=float)) * DEG)


@dataclass
class SunState:
    """Apparent-sun state at a given day. Angles in radians; ``eot = L - alpha`` is the equation
    of time (positive when a sundial runs fast); ``vec_eci`` is the unit vector toward the Sun
    in the Earth-Centred Inertial (J2000) frame (x toward the vernal equinox, z along the spin axis)."""

    L: np.ndarray
    g: np.ndarray
    C: np.ndarray
    lam: np.ndarray
    eps: np.ndarray
    ra: np.ndarray
    dec: np.ndarray
    eot: np.ndarray
    vec_eci: np.ndarray  # shape (..., 3)


def sun_state(d) -> SunState:
    """Full apparent-sun state for day(s) ``d`` since J2000."""
    d = np.asarray(d, dtype=float)
    L = mean_sun_longitude(d)
    g = wrap_two_pi((357.528 + 0.9856003 * d) * DEG)  # mean anomaly
    C = (1.915 * np.sin(g) + 0.020 * np.sin(2 * g)) * DEG  # equation of centre
    lam = wrap_two_pi(L + C)  # true ecliptic longitude
    eps = (23.439 - 0.00000036 * d) * DEG  # obliquity
    x = np.cos(lam)
    y = np.sin(lam) * np.cos(eps)
    z = np.sin(lam) * np.sin(eps)
    ra = wrap_two_pi(np.arctan2(y, x))
    dec = np.arctan2(z, np.hypot(x, y))
    eot = wrap_pi(L - ra)
    return SunState(L=L, g=g, C=C, lam=lam, eps=eps, ra=ra, dec=dec, eot=eot, vec_eci=np.stack([x, y, z], axis=-1))


def sun_direction_eci(d):
    """Unit vector toward the Sun in ECI (ECI), shape (..., 3)."""
    return sun_state(d).vec_eci


def sun_direction_mssi(d):
    """Unit vector toward the Sun in the MSSI frame (ECI rotated by -L about z). Its longitude is
    alpha - L = -EoT and its latitude the solar declination."""
    s = sun_state(d)
    c, sn = np.cos(-s.L), np.sin(-s.L)
    x, y, z = s.vec_eci[..., 0], s.vec_eci[..., 1], s.vec_eci[..., 2]
    return np.stack([c * x - sn * y, sn * x + c * y, z], axis=-1)


def analemma_mssi(num_points: int = 400):
    """The analemma: locus of the sub-solar point in MSSI over one year.

    Returns ``(days, lng_deg, lat_deg, vec)`` with ``vec`` of shape (num_points+1, 3)."""
    d = np.linspace(0.0, TROPICAL_YEAR_DAYS, num_points + 1)
    v = sun_direction_mssi(d)
    return d, np.degrees(np.arctan2(v[:, 1], v[:, 0])), np.degrees(np.arcsin(v[:, 2])), v


def ecliptic_eci(num_points: int = 360):
    """Locus of the sub-solar point in ECI over one year (the ecliptic). Returns
    ``(days, lng_deg, lat_deg, vec)``."""
    d = np.linspace(0.0, TROPICAL_YEAR_DAYS, num_points + 1)
    v = sun_direction_eci(d)
    return d, np.degrees(np.arctan2(v[:, 1], v[:, 0])), np.degrees(np.arcsin(v[:, 2])), v


# ---------------------------------------------------------------------------- heliocentric
E_ORBIT = 0.0167086


def earth_heliocentric_ecliptic(d):
    """Earth's heliocentric position in the ecliptic frame (AU): X toward the vernal equinox,
    Z toward the ecliptic north pole. Uses the same mean anomaly and equation of centre as
    :func:`sun_state`, so the Sun seen from this Earth is exactly ``sun_direction_eci`` rotated
    into the ecliptic. Returns an array of shape (..., 3) plus the radius."""
    s = sun_state(d)
    nu = s.g + s.C
    r = (1 - E_ORBIT**2) / (1 + E_ORBIT * np.cos(nu))
    lam_earth = s.lam + np.pi
    return np.stack([r * np.cos(lam_earth), r * np.sin(lam_earth), np.zeros_like(r)], axis=-1), r


def year_markers():
    """Days (since J2000, within the first year) of the equinoxes, solstices, perihelion and
    aphelion, found by scanning the ephemeris."""
    d = np.arange(0.0, TROPICAL_YEAR_DAYS + 0.1, 0.05)
    s = sun_state(d)

    def cross(values, target):
        f = wrap_pi(values - target)
        idx = np.where((f[:-1] < 0) & (f[1:] >= 0))[0]
        return float(d[idx[0] + 1]) if idx.size else float("nan")

    return {
        "march_equinox": cross(s.lam, 0.0),
        "june_solstice": cross(s.lam, np.pi / 2),
        "september_equinox": cross(s.lam, np.pi),
        "december_solstice": cross(s.lam, 1.5 * np.pi),
        "perihelion": cross(s.g, 0.0),
        "aphelion": cross(s.g, np.pi),
    }
