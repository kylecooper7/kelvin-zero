"""Tests of the Kelvin Zero model: closed forms against brute force, conventions, and the
headline numbers of the paper."""

import numpy as np
import pytest

from kelvinzero import (
    Orbit,
    alpha_deg_for_altitude,
    altitude_for_sso_inclination_deg,
    analemma_mssi,
    beta_angle,
    classify_regions,
    compute_sun_dot_extrema,
    eci_to_display,
    eclipse_fraction_per_orbit,
    frame_angle,
    gmst,
    is_eclipsed,
    mean_sun_longitude,
    no_eclipse_beta_deg,
    orbit_normal_eci,
    orbital_period,
    raan_eci,
    raan_mssi,
    raan_precession_rate,
    region_area_fractions,
    region_contours,
    satellite_position_eci,
    sso_inclination_deg,
    sun_direction_mssi,
    sun_dot_extrema_at,
    sun_state,
    vec_to_lat_lng,
    year_markers,
    yearly_eclipse_fraction_sampled,
    yearly_eclipse_stats,
    ltan_hours,
)
from kelvinzero.constants import J2, MU, R_EARTH


def ang_close(a, b, tol):
    d = ((a - b + 180) % 360) - 180
    assert abs(d) <= tol, f"{a} vs {b}"


# ---------------------------------------------------------------- Sun
def test_usno_sun_known_values():
    s = sun_state(0.0)  # J2000 epoch
    ang_close(np.degrees(s.L), 280.46, 1e-9)
    ang_close(np.degrees(s.g), 357.528, 1e-9)
    assert abs(np.degrees(s.dec) + 23.03) < 0.1  # ten days after the December solstice
    assert np.allclose(np.linalg.norm(s.vec_eci), 1.0)


def test_gmst_epoch():
    ang_close(np.degrees(gmst(0.0)), 280.46061837, 1e-9)


def test_noaa_spencer_agrees_with_usno_over_2025():
    """The NOAA/Spencer compact series, evaluated independently, must agree with the USNO model
    to better than 1.5 min in the equation of time and 0.6 deg in declination."""
    doy = np.arange(1, 366)
    gamma = 2 * np.pi / 365 * (doy - 1)
    eot_noaa = 229.18 * (0.000075 + 0.001868 * np.cos(gamma) - 0.032077 * np.sin(gamma) - 0.014615 * np.cos(2 * gamma) - 0.040849 * np.sin(2 * gamma))
    dec_noaa = np.degrees(0.006918 - 0.399912 * np.cos(gamma) + 0.070257 * np.sin(gamma) - 0.006758 * np.cos(2 * gamma) + 0.000907 * np.sin(2 * gamma) - 0.002697 * np.cos(3 * gamma) + 0.00148 * np.sin(3 * gamma))
    s = sun_state(9132.0 + doy - 1)  # 2025-01-01 12:00 is d = 9132
    assert np.max(np.abs(np.degrees(s.eot) * 4 - eot_noaa)) < 1.5
    assert np.max(np.abs(np.degrees(s.dec) - dec_noaa)) < 0.6
    assert np.corrcoef(np.degrees(s.eot) * 4, eot_noaa)[0, 1] > 0.995


def test_analemma_extent_and_orientation():
    _, lng, lat, _ = analemma_mssi(2000)
    assert 3.5 < lng.max() < 4.5 and -4.5 < lng.min() < -3.5
    assert 23.3 < lat.max() < 23.5 and -23.5 < lat.min() < -23.3
    # early November: EoT ≈ +16 min, Sun west of the mean Sun
    s = sun_state(9132.0 + 306)
    assert np.degrees(s.eot) * 4 > 14
    assert vec_to_lat_lng(sun_direction_mssi(9132.0 + 306))[1] < -3


def test_mssi_frame_is_mean_sun_longitude():
    for d in (0.0, 50.5, 123.0, 200.0, 301.7):
        assert frame_angle("MSSI", d) == mean_sun_longitude(d)
        assert frame_angle("ECI", d) == 0


def test_year_markers():
    m = year_markers()
    assert abs(m["march_equinox"] - 78.8) < 1
    assert abs(m["june_solstice"] - 171.6) < 1
    assert abs(m["december_solstice"] - 355.1) < 1
    assert abs(m["perihelion"] - 2.5) < 1.5


# ---------------------------------------------------------------- SSO
@pytest.mark.parametrize("h,inc", [(100, 95.99583464890226), (550, 97.59295481299084), (800, 98.60311041637605), (1000, 99.47933412916328), (2000, 104.89007799414163)])
def test_sso_inclination(h, inc):
    assert abs(float(sso_inclination_deg(h)) - inc) < 1e-9
    assert abs(altitude_for_sso_inclination_deg(inc) - h) < 1e-6
    rate = np.degrees(raan_precession_rate(h, inc)) * 86400
    assert abs(rate - 0.98565) < 1e-4


def test_exact_sso_is_frozen_in_mssi_and_ltan():
    o = Orbit(800, 90)
    for d in (0, 91.3, 182.6, 273.9, 365.2):
        ang_close(np.degrees(raan_mssi(o, d)), 90, 1e-3)
        ang_close(np.degrees(raan_eci(o, d)), np.degrees(mean_sun_longitude(d)) + 90, 1e-3)
    assert ltan_hours(90) == 18 and ltan_hours(270) == 6 and ltan_hours(0) == 12
    n = eci_to_display(orbit_normal_eci(o, 10), "MSSI", 10)
    lat, lng = vec_to_lat_lng(n)
    ang_close(lng, 0, 1e-6)
    assert abs(lat - (90 - o.inclination_deg)) < 1e-6


def test_satellite_geometry():
    o = Orbit(550, 30, initial_mean_anomaly_deg=45)
    T = orbital_period(550) / 86400
    p0 = eci_to_display(satellite_position_eci(o, 1.0), "MSSI", 1.0)
    p1 = eci_to_display(satellite_position_eci(o, 1.0 + T), "MSSI", 1.0 + T)
    assert abs(np.linalg.norm(p0) - (R_EARTH + 550)) < 1e-6
    assert np.linalg.norm(p1 - p0) < 0.01
    assert abs(np.dot(orbit_normal_eci(o, 1.0), satellite_position_eci(o, 1.0))) < 1e-6


# ---------------------------------------------------------------- eclipse
def test_eclipse_fraction_closed_form():
    c = R_EARTH / (R_EARTH + 550)
    assert abs(float(eclipse_fraction_per_orbit(0.0, 550)) - np.arcsin(c) / np.pi) < 1e-12
    assert float(eclipse_fraction_per_orbit(np.radians(66), 550)) > 0.05
    assert float(eclipse_fraction_per_orbit(np.radians(68), 550)) == 0.0
    assert abs(float(no_eclipse_beta_deg(550)) - 67.02) < 0.01


def test_cylinder_test():
    s = np.array([1.0, 0, 0])
    assert is_eclipsed(np.array([-7000.0, 0, 0]), s)
    assert not is_eclipsed(np.array([7000.0, 0, 0]), s)
    assert not is_eclipsed(np.array([-7000.0, 6400, 0]), s)
    assert is_eclipsed(np.array([-7000.0, 6300, 0]), s)


@pytest.mark.parametrize("h,O", [(550, 0), (550, 90), (550, 270), (800, 90), (1000, 3), (1000, 45)])
def test_closed_form_matches_brute_force(h, O):
    # the closed form is exact for the cylindrical shadow: with the same days sampled and 3600
    # points per orbit the brute force agrees to a few 1e-5 of the year (the paper quotes 2e-6
    # with 7200 points and 3660 days)
    o = Orbit(h, O)
    sampled = yearly_eclipse_fraction_sampled(o, 366, 3600)
    analytic = yearly_eclipse_stats(o, 366).eclipse_fraction
    assert abs(sampled - analytic) < 5e-5


def test_headline_numbers():
    """The paper's results: 06:00 beats 18:00 slightly; eclipse-free fixed planes exist above ~1400 km."""
    assert yearly_eclipse_stats(Orbit(550, 270)).eclipse_fraction < yearly_eclipse_stats(Orbit(550, 90)).eclipse_fraction
    assert abs(100 * yearly_eclipse_stats(Orbit(550, 270)).eclipse_fraction - 4.83) < 0.05
    assert abs(100 * yearly_eclipse_stats(Orbit(800, 270)).eclipse_fraction - 2.67) < 0.05
    assert yearly_eclipse_stats(Orbit(1500, 270)).eclipse_fraction == 0.0
    assert yearly_eclipse_stats(Orbit(1300, 270)).eclipse_fraction > 0.0
    st = yearly_eclipse_stats(Orbit(800, 270))  # LTAN 06:00: the normal points away from the Sun, so β is negative
    assert 56 < abs(st.beta_max_deg) < 60 and 85 < abs(st.beta_min_deg) <= 90
    assert abs(st.eclipse_days - 74) < 2


# ---------------------------------------------------------------- regions
def test_region_extrema_and_classes():
    mx, mn = sun_dot_extrema_at(0, 0, 2000)
    assert mx > 0.999 and 0.91 < mn < 0.92  # cos(23.44°) ≈ 0.9176
    ext = compute_sun_dot_extrema(181, 91, 120)
    assert abs(ext.max[45, 90] - mx) < 2e-3 and abs(ext.min[45, 90] - mn) < 2e-3
    fr = region_area_fractions(ext, float(alpha_deg_for_altitude(1000)))
    assert abs(sum(fr) - 1) < 1e-9 and fr[2] > 0.5 and fr[0] > 0.05
    cls = classify_regions(ext, 90.0)
    assert cls[45, 90] == 2 and cls[45, 0] == 0
    cont = region_contours(ext, float(alpha_deg_for_altitude(1000)))
    assert len(cont["dU"]) >= 1 and len(cont["dI"]) >= 1
    level = np.cos(np.radians(alpha_deg_for_altitude(1000)))
    for lng, lat in cont["dI"][0][:20]:
        assert abs(sun_dot_extrema_at(lat, lng, 120)[1] - level) < 0.02


def test_beta_matches_region_picture():
    """An orbit is eclipse-free iff its normal stays within acos(c) of the Sun — dual of |β| ≥ asin(c)."""
    o = Orbit(1500, 270)
    d = np.arange(0, 366)
    assert np.all(np.abs(np.degrees(beta_angle(o, d))) >= no_eclipse_beta_deg(1500) - 1e-9)


# ---------------------------------------------------------------- high-fidelity module (no ephemeris needed)
def test_hifi_zonal_gradient_matches_textbook_j2_and_finite_differences():
    hifi = pytest.importorskip("kelvinzero.hifi")
    r = np.array([3000.0, -5000.0, 4000.0])
    rr = np.linalg.norm(r)
    k = -MU / rr**3
    f = 1.5 * J2 * (R_EARTH / rr) ** 2
    ref = np.array([k * r[0] * (1 - f * (5 * r[2] ** 2 / rr**2 - 1)), k * r[1] * (1 - f * (5 * r[2] ** 2 / rr**2 - 1)), k * r[2] * (1 - f * (5 * r[2] ** 2 / rr**2 - 3))])
    assert np.max(np.abs(np.array(hifi.zonal_accel(r, {2: J2})) - ref) / np.abs(ref)) < 1e-12

    def U(p):
        rn = np.linalg.norm(p)
        s = p[2] / rn
        return MU / rn * (1 - sum(Jn * (R_EARTH / rn) ** n * hifi._legendre(n, s)[0] for n, Jn in hifi.ZONALS.items()))

    h = 1e-3
    fd = np.array([(U(r + h * np.eye(3)[i]) - U(r - h * np.eye(3)[i])) / (2 * h) for i in range(3)])
    assert np.max(np.abs(np.array(hifi.zonal_accel(r)) - fd) / np.abs(fd)) < 1e-7


def test_hifi_conical_shadow_reduces_to_the_cylinder_with_the_sun_at_infinity():
    hifi = pytest.importorskip("kelvinzero.hifi")
    for h in (550, 1500):
        far = hifi.conical_correction(h, 0.0, 1e14)
        assert abs(far["umbra_s"] - far["cylinder_s"]) < 0.5
        real = hifi.conical_correction(h, 0.0)
        assert 6 < far["cylinder_s"] - real["umbra_s"] < 12  # the umbra cone narrows the pass by ~10 s
        assert 6 < real["umbra_penumbra_s"] - far["cylinder_s"] < 12


def test_hifi_j2_only_propagation_reproduces_the_secular_node_rate():
    hifi = pytest.importorskip("kelvinzero.hifi")
    pytest.importorskip("scipy")
    o = Orbit(800, 270)
    tr = hifi.propagate(o, 10.0, bodies=False, zonals={2: J2}, sample_s=60.0, ephemeris=_FakeEphemeris())
    raan, inc, a, e = hifi.osculating(tr)
    rate = (raan[-1] - raan[0]) / 10.0
    a0 = R_EARTH + 800
    n = np.sqrt(MU / a0**3)
    analytic = np.degrees(-1.5 * n * J2 * (R_EARTH / a0) ** 2 * np.cos(np.radians(o.inclination_deg))) * 86400
    assert abs(rate / analytic - 1) < 2e-3  # short-period wobble of the osculating node over 10 days
    assert abs(a.mean() - a0) < 0.05  # the initial radius is corrected so the mean a is R + h
    assert e.mean() < 2e-3


class _FakeEphemeris:
    """Stand-in so the J2-only propagation test needs no DE440 kernel."""

    def __init__(self):
        self.sun = np.zeros((4, 3))
        self.moon = np.zeros((4, 3))
        self.step = 1e9
        self.t0 = 0.0

    def at(self, t):
        t = np.asarray(t, dtype=float)
        z = np.zeros(t.shape + (3,))
        return z, z
