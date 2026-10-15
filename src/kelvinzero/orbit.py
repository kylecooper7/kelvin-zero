"""Circular-orbit mechanics: the sun-synchronous condition, J2 nodal precession, 3-D positions,
the beta angle and cylindrical-shadow eclipse geometry.

Conventions::

    plane normal   h = [ sin i sin Om, -sin i cos Om, cos i ]
    position       r(u) = R3(Om) R1(i) [cos u, sin u, 0]       (u = argument of latitude)
    node offset    Om_off is measured in the MSSI frame, i.e. from the mean-Sun direction:
                   Om_off = 0   -> ascending node at mean noon (LTAN 12:00)
                   Om_off = 90  -> LTAN 18:00 (dawn-dusk),  Om_off = 270 -> LTAN 06:00
    ECI RAAN       Om(d) = L(d) + Om_off + (Om_dot_J2 - L_dot) * t   (drift is 0 for an exact SSO)
"""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from .constants import (
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
)
from .sun import mean_sun_longitude, sun_direction_eci, wrap_two_pi


@dataclass(frozen=True)
class Orbit:
    """A circular orbit. ``inclination_deg`` defaults to the sun-synchronous value for the
    altitude; ``raan_offset_deg`` is the node offset from the mean Sun (see module docstring)."""

    altitude_km: float
    raan_offset_deg: float = 270.0
    inclination_deg: float | None = None
    initial_mean_anomaly_deg: float = 0.0

    def __post_init__(self):
        if self.inclination_deg is None:
            object.__setattr__(self, "inclination_deg", sso_inclination_deg(self.altitude_km))

    @property
    def radius_km(self) -> float:
        return R_EARTH + self.altitude_km


# ---------------------------------------------------------------------------- basics
def orbital_period(altitude_km):
    """Orbital period (s) of a circular orbit."""
    a = R_EARTH + np.asarray(altitude_km, dtype=float)
    return TWO_PI * np.sqrt(a**3 / MU)


def mean_motion(altitude_km):
    """Mean motion n (rad/s)."""
    a = R_EARTH + np.asarray(altitude_km, dtype=float)
    return np.sqrt(MU / a**3)


def raan_precession_rate(altitude_km, inclination_deg):
    """J2 nodal precession rate (rad/s): -(3/2) n J2 (R/a)^2 cos i."""
    a = R_EARTH + np.asarray(altitude_km, dtype=float)
    n = mean_motion(altitude_km)
    return -1.5 * n * J2 * (R_EARTH / a) ** 2 * np.cos(np.radians(inclination_deg))


def sso_inclination_deg(altitude_km):
    """Exact sun-synchronous inclination (deg): cos i = -w_req / ((3/2) n J2 (R/a)^2).
    Returns NaN where no retrograde solution exists."""
    a = R_EARTH + np.asarray(altitude_km, dtype=float)
    K = 1.5 * J2 * mean_motion(altitude_km) * (R_EARTH / a) ** 2
    cosi = -OMEGA_SSO_REQ / K
    with np.errstate(invalid="ignore"):
        i = np.arccos(np.where(np.abs(cosi) <= 1, cosi, np.nan))
    i = np.where(i < np.pi / 2, np.pi - i, i)
    return np.degrees(i)


def altitude_for_sso_inclination_deg(inclination_deg, lo=ALT_MIN_KM, hi=ALT_MAX_KM):
    """Inverse of :func:`sso_inclination_deg` on [lo, hi] (monotonic), by bisection."""
    target = float(inclination_deg)
    if target <= sso_inclination_deg(lo):
        return lo
    if target >= sso_inclination_deg(hi):
        return hi
    for _ in range(60):
        mid = 0.5 * (lo + hi)
        if sso_inclination_deg(mid) < target:
            lo = mid
        else:
            hi = mid
    return 0.5 * (lo + hi)


# ---------------------------------------------------------------------------- geometry
def raan_eci(orbit: Orbit, d):
    """RAAN in ECI (radians) at day(s) d."""
    d = np.asarray(d, dtype=float)
    drift = raan_precession_rate(orbit.altitude_km, orbit.inclination_deg) - MEAN_SUN_RATE_RAD_S
    return wrap_two_pi(mean_sun_longitude(d) + orbit.raan_offset_deg * DEG + drift * d * SECONDS_PER_DAY)


def raan_mssi(orbit: Orbit, d):
    """RAAN measured in the MSSI frame (radians) - constant for an exact SSO."""
    return wrap_two_pi(raan_eci(orbit, d) - mean_sun_longitude(d))


def argument_of_latitude(orbit: Orbit, d):
    """Argument of latitude u (radians) at day(s) d (circular orbit: u = M)."""
    d = np.asarray(d, dtype=float)
    return wrap_two_pi(orbit.initial_mean_anomaly_deg * DEG + mean_motion(orbit.altitude_km) * d * SECONDS_PER_DAY)


def plane_normal(raan, inc):
    """Unit normal of a plane with RAAN ``raan`` and inclination ``inc`` (radians)."""
    raan, inc = np.asarray(raan, dtype=float), np.asarray(inc, dtype=float)
    return np.stack(np.broadcast_arrays(np.sin(inc) * np.sin(raan), -np.sin(inc) * np.cos(raan), np.cos(inc) * np.ones_like(raan)), axis=-1)


def orbit_normal_eci(orbit: Orbit, d):
    """Orbit-plane unit normal in ECI at day(s) d."""
    return plane_normal(raan_eci(orbit, d), orbit.inclination_deg * DEG)


def plane_point(raan, inc, u):
    """Unit position for argument of latitude ``u`` in a plane (RAAN, inc): R3(raan) R1(inc) [cos u, sin u, 0]."""
    raan, inc, u = np.asarray(raan, dtype=float), np.asarray(inc, dtype=float), np.asarray(u, dtype=float)
    cu, su = np.cos(u), np.sin(u)
    cO, sO = np.cos(raan), np.sin(raan)
    ci, si = np.cos(inc), np.sin(inc)
    return np.stack(np.broadcast_arrays(cO * cu - sO * ci * su, sO * cu + cO * ci * su, si * su), axis=-1)


def satellite_position_eci(orbit: Orbit, d):
    """Satellite position in ECI (km) at day(s) d."""
    p = plane_point(raan_eci(orbit, d), orbit.inclination_deg * DEG, argument_of_latitude(orbit, d))
    return orbit.radius_km * p


def orbit_ring_eci(orbit: Orbit, d, num_points: int = 240):
    """Unit vectors (ECI) around the full orbit at day d, shape (num_points+1, 3)."""
    u = np.linspace(0, TWO_PI, num_points + 1)
    return plane_point(raan_eci(orbit, d), orbit.inclination_deg * DEG, u)


def ltan_hours(raan_offset_deg):
    """Local time of the ascending node (hours, 0-24) from the node offset."""
    return (12.0 + np.asarray(raan_offset_deg, dtype=float) / 15.0) % 24.0


# ---------------------------------------------------------------------------- eclipse
def beta_angle(orbit: Orbit, d):
    """Beta angle (radians): elevation of the Sun above the orbit plane, sin(beta) = h . s."""
    h = orbit_normal_eci(orbit, d)
    s = sun_direction_eci(d)
    return np.arcsin(np.clip(np.sum(h * s, axis=-1), -1.0, 1.0))


def is_eclipsed(pos_km, sun_dir):
    """Cylindrical-shadow test (Sun at infinity): a point is eclipsed iff it is on the night side
    (p . s < 0) and within one Earth radius of the Sun-Earth axis."""
    pos_km, sun_dir = np.asarray(pos_km, dtype=float), np.asarray(sun_dir, dtype=float)
    dot = np.sum(pos_km * sun_dir, axis=-1)
    rho = np.linalg.norm(np.cross(pos_km, sun_dir), axis=-1)
    return (dot < 0) & (rho < R_EARTH)


def eclipse_fraction_per_orbit(beta_rad, altitude_km):
    """Fraction of one circular orbit spent in the cylindrical shadow (closed form)::

        f_E = acos( sqrt(1 - c^2) / cos(beta) ) / pi,   c = R / (R + h),  valid when cos(beta) > sqrt(1 - c^2)

    and 0 otherwise. No eclipse at all once |beta| >= asin(c)."""
    beta = np.asarray(beta_rad, dtype=float)
    c = R_EARTH / (R_EARTH + np.asarray(altitude_km, dtype=float))
    k = np.sqrt(np.maximum(0.0, 1.0 - c * c))
    cb = np.cos(beta)
    with np.errstate(invalid="ignore", divide="ignore"):
        f = np.arccos(np.clip(k / cb, -1.0, 1.0)) / np.pi
    return np.where(cb > k, f, 0.0)


def no_eclipse_beta_deg(altitude_km):
    """|beta| above which the orbit is eclipse-free (deg): asin(R / (R + h))."""
    return np.degrees(np.arcsin(R_EARTH / (R_EARTH + np.asarray(altitude_km, dtype=float))))


def alpha_deg_for_altitude(altitude_km):
    """Half-angle (deg) of the sunlit cone used by the eclipse-region map: a point of the orbit
    shell in direction p is sunlit iff angle(p, s) <= alpha, with alpha = 90 + acos(R / (R + h))."""
    return 90.0 + np.degrees(np.arccos(R_EARTH / (R_EARTH + np.asarray(altitude_km, dtype=float))))


@dataclass(frozen=True)
class YearlyStats:
    eclipse_fraction: float
    sun_exposure: float
    beta_min_deg: float
    beta_max_deg: float
    eclipse_days: float


def yearly_eclipse_stats(orbit: Orbit, day_steps: int = 366) -> YearlyStats:
    """Yearly eclipse statistics: the mean of the closed-form per-orbit fraction over daily
    samples of the true Sun, the beta range and the number of days with any eclipse."""
    d = np.arange(day_steps) / day_steps * TROPICAL_YEAR_DAYS
    b = beta_angle(orbit, d)
    f = eclipse_fraction_per_orbit(b, orbit.altitude_km)
    frac = float(f.mean())
    return YearlyStats(
        eclipse_fraction=frac,
        sun_exposure=1.0 - frac,
        beta_min_deg=float(np.degrees(b.min())),
        beta_max_deg=float(np.degrees(b.max())),
        eclipse_days=float((f > 0).sum() / day_steps * TROPICAL_YEAR_DAYS),
    )


def yearly_eclipse_fraction_sampled(orbit: Orbit, day_steps: int = 366, orbit_steps: int = 360) -> float:
    """Brute-force yearly eclipse fraction: the cylindrical shadow test applied to sampled points
    around the orbit on sampled days. Used to cross-check the closed form."""
    d = np.arange(day_steps) / day_steps * TROPICAL_YEAR_DAYS
    s = sun_direction_eci(d)  # (D, 3)
    u = np.arange(orbit_steps) / orbit_steps * TWO_PI
    O = raan_eci(orbit, d)  # (D,)
    p = plane_point(O[:, None], orbit.inclination_deg * DEG, u[None, :]) * orbit.radius_km  # (D, U, 3)
    ecl = is_eclipsed(p, s[:, None, :])
    return float(ecl.mean())


def best_node_offset(altitude_km, step_deg: float = 1.0, day_steps: int = 183):
    """Node offset (deg) minimising the yearly eclipse fraction at a given altitude, and the
    corresponding stats."""
    best = None
    for O in np.arange(0.0, 360.0, step_deg):
        st = yearly_eclipse_stats(Orbit(altitude_km, O), day_steps)
        if best is None or st.eclipse_fraction < best[1].eclipse_fraction:
            best = (float(O), st)
    return best
