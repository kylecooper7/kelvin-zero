"""High-fidelity cross-check of the closed-form model.

Numerically propagates an orbit through a full year with

* Earth's zonal gravity field J2–J6 (EGM96 values; tesserals average out over a year and only
  move the along-track position, which the eclipse geometry does not depend on),
* Sun and Moon as point masses, positions from the JPL DE440s ephemeris,
* a conical umbra/penumbra shadow with the real Sun–Earth distance (Montenbruck & Gill §3.4),

and reports eclipse hours per year, days with eclipse, the longest pass, the drift of the node
relative to the mean Sun, and the inclination that makes the plane truly sun-synchronous under the
full force model. The closed-form model (``orbit.py``) is evaluated for the same case so the two
can be compared line by line.

Requires ``scipy`` and ``jplephem`` (``pip install "kelvinzero[hifi]"``) and the ``de440s.bsp``
kernel (33 MB), which is downloaded once into ``~/.cache/kelvinzero`` unless ``KELVINZERO_SPK``
points at a copy.
"""

from __future__ import annotations

import math
import os
import sys
import urllib.request
from dataclasses import asdict, dataclass

import numpy as np

from .constants import J2, MEAN_SUN_RATE_DEG_DAY, R_EARTH, TROPICAL_YEAR_DAYS
from .constants import MU as MU_EARTH
from .orbit import Orbit, beta_angle, eclipse_fraction_per_orbit, no_eclipse_beta_deg, orbital_period, sso_inclination_deg
from .sun import mean_sun_longitude

# EGM96 zonal coefficients (unnormalised J_n = -C_n0)
ZONALS = {2: J2, 3: -2.53265648e-6, 4: -1.61962159e-6, 5: -2.27296083e-7, 6: 5.40681239e-7}
MU_SUN = 1.32712440018e11  # km^3/s^2
MU_MOON = 4902.800066
R_SUN = 695700.0  # km (IAU 2015 nominal)
SPK_URL = "https://naif.jpl.nasa.gov/pub/naif/generic_kernels/spk/planets/de440s.bsp"
JD_J2000 = 2451545.0
DAY = 86400.0


# ---------------------------------------------------------------------------- ephemeris
def spk_path() -> str:
    """Location of the DE440s kernel; downloads it on first use."""
    p = os.environ.get("KELVINZERO_SPK") or os.path.join(os.path.expanduser("~"), ".cache", "kelvinzero", "de440s.bsp")
    if not os.path.exists(p):
        os.makedirs(os.path.dirname(p), exist_ok=True)
        print(f"downloading DE440s ephemeris (33 MB) to {p} …", file=sys.stderr)
        urllib.request.urlretrieve(SPK_URL, p)
    return p


class Ephemeris:
    """Geocentric ICRF positions of the Sun and Moon (km) from DE440s, tabulated on a fixed grid
    for fast interpolation inside the integrator (linear interpolation at 60 s is accurate to ~1 m
    for the Moon and far better for the Sun)."""

    def __init__(self, t0_s: float, t1_s: float, step_s: float = 60.0, path: str | None = None):
        from jplephem.spk import SPK

        self.kernel = SPK.open(path or spk_path())
        self.t0 = t0_s
        self.step = step_s
        n = int(math.ceil((t1_s - t0_s) / step_s)) + 2
        t = t0_s + step_s * np.arange(n)
        jd = JD_J2000 + t / DAY
        self.sun = self._geocentric(10, jd)  # (n, 3)
        self.moon = self._geocentric(301, jd)

    def _geocentric(self, target: int, jd):
        k = self.kernel
        emb = k[0, 3].compute(jd)  # SSB -> Earth-Moon barycenter
        earth = emb + k[3, 399].compute(jd)  # SSB -> Earth
        if target == 10:
            body = k[0, 10].compute(jd)
        else:
            body = emb + k[3, 301].compute(jd)
        return np.ascontiguousarray((body - earth).T)

    def at(self, t_s):
        """Sun and Moon geocentric positions at time(s) t (s since J2000)."""
        x = (np.asarray(t_s, dtype=float) - self.t0) / self.step
        i = np.clip(np.floor(x).astype(int), 0, len(self.sun) - 2)
        f = (x - i)[..., None]
        return self.sun[i] * (1 - f) + self.sun[i + 1] * f, self.moon[i] * (1 - f) + self.moon[i + 1] * f


# ---------------------------------------------------------------------------- force model
def _legendre(n: int, s: float):
    """P_n(s) and P_n'(s) for n = 0..6 (recurrence)."""
    p0, p1 = 1.0, s
    d0, d1 = 0.0, 1.0
    if n == 0:
        return p0, d0
    for k in range(2, n + 1):
        p2 = ((2 * k - 1) * s * p1 - (k - 1) * p0) / k
        d2 = d0 + (2 * k - 1) * p1
        p0, p1, d0, d1 = p1, p2, d1, d2
    return p1, d1


def zonal_accel(r, zonals: dict[int, float] = ZONALS):
    """Acceleration (km/s^2) from the point mass plus zonal harmonics, from the gradient of
    U = (μ/r)[1 - Σ J_n (R/r)^n P_n(z/r)]."""
    x, y, z = float(r[0]), float(r[1]), float(r[2])
    rr = math.sqrt(x * x + y * y + z * z)
    s = z / rr
    k = -MU_EARTH / rr**3
    ax, ay, az = k * x, k * y, k * z
    for n, Jn in zonals.items():
        pn, dpn = _legendre(n, s)
        c = MU_EARTH * Jn * R_EARTH**n / rr ** (n + 2)
        # ∇[r^-(n+1) P_n(s)] = -(n+1) r^-(n+2) P_n r̂ + r^-(n+2) P_n' (ẑ - s r̂); a_n = -μ J_n R^n ∇[...]
        radial = c * ((n + 1) * pn + dpn * s) / rr
        ax += radial * x
        ay += radial * y
        az += radial * z - c * dpn
    return ax, ay, az


def third_body_accel(r, rb, mu):
    """Point-mass perturbation of a body at geocentric position rb on a satellite at r."""
    dx, dy, dz = rb[0] - r[0], rb[1] - r[1], rb[2] - r[2]
    d3 = (dx * dx + dy * dy + dz * dz) ** 1.5
    b3 = (rb[0] ** 2 + rb[1] ** 2 + rb[2] ** 2) ** 1.5
    return mu * (dx / d3 - rb[0] / b3), mu * (dy / d3 - rb[1] / b3), mu * (dz / d3 - rb[2] / b3)


# ---------------------------------------------------------------------------- shadow
def shadow_function(r, r_sun):
    """Fraction of the solar disc visible from the satellite(s) at r (…,3) with the Sun at r_sun
    (…,3), both geocentric km: 1 in sunlight, 0 in the umbra, in between in the penumbra."""
    r = np.asarray(r, dtype=float)
    r_sun = np.asarray(r_sun, dtype=float)
    d = r_sun - r
    dn = np.linalg.norm(d, axis=-1)
    rn = np.linalg.norm(r, axis=-1)
    a = np.arcsin(np.clip(R_SUN / dn, -1, 1))  # apparent radius of the Sun
    b = np.arcsin(np.clip(R_EARTH / rn, -1, 1))  # apparent radius of the Earth
    cosc = np.clip(-np.einsum("...i,...i->...", r, d) / (rn * dn), -1, 1)
    c = np.arccos(cosc)  # angular separation of the two centres
    nu = np.ones_like(c)
    partial = (c < a + b) & (c > np.abs(a - b))
    umbra = (c <= b - a)
    x = (c[partial] ** 2 + a[partial] ** 2 - b[partial] ** 2) / (2 * c[partial])
    y = np.sqrt(np.maximum(a[partial] ** 2 - x**2, 0))
    area = a[partial] ** 2 * np.arccos(np.clip(x / a[partial], -1, 1)) + b[partial] ** 2 * np.arccos(np.clip((c[partial] - x) / b[partial], -1, 1)) - c[partial] * y
    nu[partial] = 1 - area / (math.pi * a[partial] ** 2)
    nu[umbra] = 0.0
    return nu


# ---------------------------------------------------------------------------- propagation
@dataclass
class Trajectory:
    t: np.ndarray  # s since J2000
    r: np.ndarray  # (n,3) km, ICRF/EMI
    v: np.ndarray  # (n,3) km/s
    r_sun: np.ndarray  # (n,3) km
    inclination_deg: float
    orbit: Orbit
    radius_offset_km: float = 0.0


def initial_state(orbit: Orbit, inclination_deg: float | None = None, t0_days: float = 0.0, radius_offset_km: float = 0.0):
    """Circular orbit at the paper's convention: RAAN_EMI = L(t0) + Ω_off, satellite at the node."""
    a = R_EARTH + orbit.altitude_km + radius_offset_km
    inc = math.radians(inclination_deg if inclination_deg is not None else orbit.inclination_deg)
    raan = math.radians(float(np.degrees(mean_sun_longitude(t0_days))) + orbit.raan_offset_deg)
    u = math.radians(orbit.initial_mean_anomaly_deg)
    # perifocal (circular): position along u, velocity perpendicular
    p = np.array([math.cos(u), math.sin(u), 0.0]) * a
    q = np.array([-math.sin(u), math.cos(u), 0.0]) * math.sqrt(MU_EARTH / a)
    cO, sO, ci, si = math.cos(raan), math.sin(raan), math.cos(inc), math.sin(inc)
    rot = np.array([[cO, -sO * ci, sO * si], [sO, cO * ci, -cO * si], [0.0, si, ci]])
    return rot @ p, rot @ q


def _integrate(rhs, y0, t0, t1, t_eval, rtol):
    from scipy.integrate import solve_ivp

    sol = solve_ivp(rhs, (t0, t1), y0, method="DOP853", rtol=rtol, atol=1e-9, t_eval=t_eval)
    if not sol.success:
        raise RuntimeError(sol.message)
    return sol


def mean_radius_offset(orbit: Orbit, inclination_deg: float | None = None, t0_days: float = 0.0) -> float:
    """The paper's altitude is a *mean* altitude. An osculating circular orbit of radius R+h has a
    mean semi-major axis several km smaller under J2 (which alone would mis-set the precession
    rate by ~0.4 %), so the initial radius is raised until the mean a over two days equals R+h."""
    target = R_EARTH + orbit.altitude_km
    offset = 0.0
    for _ in range(3):
        r0, v0 = initial_state(orbit, inclination_deg, t0_days, radius_offset_km=offset)
        t0 = t0_days * DAY
        t_eval = np.arange(t0, t0 + 2 * DAY, 30.0)

        def rhs(t, y):
            ax, ay, az = zonal_accel((y[0], y[1], y[2]), {2: J2})
            return (y[3], y[4], y[5], ax, ay, az)

        sol = _integrate(rhs, np.concatenate([r0, v0]), t0, t0 + 2 * DAY, t_eval, 1e-9)
        r, v = sol.y[:3].T, sol.y[3:].T
        rn = np.linalg.norm(r, axis=1)
        a_mean = float(np.mean(1 / (2 / rn - np.einsum("ij,ij->i", v, v) / MU_EARTH)))
        offset += target - a_mean
    return offset


def propagate(orbit: Orbit, days: float = TROPICAL_YEAR_DAYS, *, inclination_deg: float | None = None, bodies: bool = True,
              zonals: dict[int, float] = ZONALS, sample_s: float = 10.0, rtol: float = 1e-10, t0_days: float = 0.0,
              ephemeris: Ephemeris | None = None, radius_offset_km: float | None = None) -> Trajectory:
    """Integrate the orbit with DOP853 and sample it every `sample_s` seconds. The initial radius
    is corrected so the *mean* semi-major axis is R+h (see `mean_radius_offset`)."""
    t0 = t0_days * DAY
    t1 = t0 + days * DAY
    eph = ephemeris or Ephemeris(t0, t1)
    sun, moon, step, et0 = eph.sun, eph.moon, eph.step, eph.t0
    nmax = len(sun) - 2
    if radius_offset_km is None:
        radius_offset_km = mean_radius_offset(orbit, inclination_deg, t0_days)

    def rhs(t, y):
        x, yy, z = y[0], y[1], y[2]
        ax, ay, az = zonal_accel((x, yy, z), zonals)
        if bodies:
            f = (t - et0) / step
            i = int(f)
            i = 0 if i < 0 else (nmax if i > nmax else i)
            w = f - i
            s0, s1, m0, m1 = sun[i], sun[i + 1], moon[i], moon[i + 1]
            rs = (s0[0] + (s1[0] - s0[0]) * w, s0[1] + (s1[1] - s0[1]) * w, s0[2] + (s1[2] - s0[2]) * w)
            rm = (m0[0] + (m1[0] - m0[0]) * w, m0[1] + (m1[1] - m0[1]) * w, m0[2] + (m1[2] - m0[2]) * w)
            bx, by, bz = third_body_accel((x, yy, z), rs, MU_SUN)
            cx, cy, cz = third_body_accel((x, yy, z), rm, MU_MOON)
            ax += bx + cx
            ay += by + cy
            az += bz + cz
        return (y[3], y[4], y[5], ax, ay, az)

    r0, v0 = initial_state(orbit, inclination_deg, t0_days, radius_offset_km=radius_offset_km)
    t_eval = np.arange(t0, t1 + 1e-9, sample_s)
    sol = _integrate(rhs, np.concatenate([r0, v0]), t0, t1, t_eval, rtol)
    r = sol.y[:3].T.copy()
    v = sol.y[3:].T.copy()
    r_sun, _ = eph.at(sol.t)
    return Trajectory(sol.t, r, v, r_sun, inclination_deg if inclination_deg is not None else orbit.inclination_deg, orbit, radius_offset_km)


# ---------------------------------------------------------------------------- analysis
def osculating(traj: Trajectory):
    """Osculating RAAN (deg, unwrapped), inclination (deg), semi-major axis (km) and eccentricity."""
    r, v = traj.r, traj.v
    h = np.cross(r, v)
    hn = np.linalg.norm(h, axis=1)
    inc = np.degrees(np.arccos(np.clip(h[:, 2] / hn, -1, 1)))
    raan = np.degrees(np.arctan2(h[:, 0], -h[:, 1]))
    raan = np.degrees(np.unwrap(np.radians(raan)))
    rn = np.linalg.norm(r, axis=1)
    vn2 = np.einsum("ij,ij->i", v, v)
    a = 1 / (2 / rn - vn2 / MU_EARTH)
    e = np.linalg.norm(np.cross(v, h) / MU_EARTH - r / rn[:, None], axis=1)
    return raan, inc, a, e


def beta_series(traj: Trajectory):
    """β angle (deg) from the osculating orbit normal and the DE440 Sun direction at every sample."""
    h = np.cross(traj.r, traj.v)
    h /= np.linalg.norm(h, axis=1)[:, None]
    s = traj.r_sun / np.linalg.norm(traj.r_sun, axis=1)[:, None]
    return np.degrees(np.arcsin(np.clip(np.einsum("ij,ij->i", h, s), -1, 1)))


def node_drift(traj: Trajectory):
    """Linear drift of the node offset from the mean Sun, deg/year, and its intercept, from a
    least-squares fit of Ω_EMI(t) − L(t) − Ω_off over the whole trajectory."""
    raan, inc, a, e = osculating(traj)
    d = traj.t / DAY
    L = 280.46 + MEAN_SUN_RATE_DEG_DAY * d  # unwrapped mean-Sun longitude (mean_sun_longitude wraps at 360°)
    off = raan - L - traj.orbit.raan_offset_deg
    off = off - 360 * np.round(off[0] / 360)
    A = np.vstack([d / TROPICAL_YEAR_DAYS, np.ones_like(d)]).T
    slope, intercept = np.linalg.lstsq(A, off, rcond=None)[0]
    return float(slope), float(intercept), float(inc.mean()), float(a.mean()), float(e.mean())


def _hermite(traj: Trajectory, i: int, tau: float):
    """Position between samples i and i+1 at fraction tau, cubic Hermite on (r, v)."""
    dt = traj.t[i + 1] - traj.t[i]
    r0, r1, v0, v1 = traj.r[i], traj.r[i + 1], traj.v[i] * dt, traj.v[i + 1] * dt
    h00 = 2 * tau**3 - 3 * tau**2 + 1
    h10 = tau**3 - 2 * tau**2 + tau
    h01 = -2 * tau**3 + 3 * tau**2
    h11 = tau**3 - tau**2
    return h00 * r0 + h10 * v0 + h01 * r1 + h11 * v1


def _sun_at(traj: Trajectory, i: int, tau: float):
    return traj.r_sun[i] * (1 - tau) + traj.r_sun[i + 1] * tau


def _refine(traj: Trajectory, i: int, cond, into: bool, iters: int = 24):
    """Time of a transition between samples i and i+1: cond(ν) becomes `into` somewhere inside."""
    lo, hi = 0.0, 1.0
    for _ in range(iters):
        mid = 0.5 * (lo + hi)
        nu = float(shadow_function(_hermite(traj, i, mid)[None, :], _sun_at(traj, i, mid)[None, :])[0])
        if cond(nu) == into:
            hi = mid
        else:
            lo = mid
    return traj.t[i] + 0.5 * (lo + hi) * (traj.t[i + 1] - traj.t[i])


def _intervals(traj: Trajectory, flag: np.ndarray, cond):
    """[(t_in, t_out), …] for runs where `flag` is true, with the edges refined by bisection."""
    out = []
    n = len(flag)
    idx = np.flatnonzero(np.diff(flag.astype(np.int8)))
    starts = [i + 1 for i in idx if not flag[i] and flag[i + 1]]
    ends = [i + 1 for i in idx if flag[i] and not flag[i + 1]]
    if flag[0]:
        starts.insert(0, 0)
    if flag[-1]:
        ends.append(n - 1)
    for s, e in zip(starts, ends):
        t_in = traj.t[0] if s == 0 else _refine(traj, s - 1, cond, True)
        t_out = traj.t[-1] if e == n - 1 else _refine(traj, e - 1, cond, False)
        out.append((t_in, t_out))
    return out


@dataclass
class HifiStats:
    umbra_hours: float
    penumbra_hours: float  # time in partial shadow (both edges of every pass)
    lost_sun_hours: float  # ∫(1 − ν) dt: umbra plus the penumbra weighted by the hidden fraction
    passes: int
    days_with_umbra: int
    max_pass_min: float
    mean_pass_min: float
    node_drift_deg_per_year: float
    inclination_deg: float
    mean_a_km: float
    mean_e: float
    daily_umbra_min: list[float]
    daily_beta_deg: list[float]


def eclipse_stats(traj: Trajectory) -> HifiStats:
    nu = shadow_function(traj.r, traj.r_sun)
    umbra = _intervals(traj, nu <= 0.0, lambda x: x <= 0.0)
    shade = _intervals(traj, nu < 1.0, lambda x: x < 1.0)
    umbra_s = sum(b - a for a, b in umbra)
    shade_s = sum(b - a for a, b in shade)
    # lost sunlight inside the penumbra edges, integrated at 0.25 s with the Hermite interpolant
    lost = umbra_s
    for a, b in shade:
        ts = np.arange(a, b, 0.25)
        if len(ts) < 2:
            continue
        i = np.clip(np.searchsorted(traj.t, ts, side="right") - 1, 0, len(traj.t) - 2)
        tau = (ts - traj.t[i]) / (traj.t[i + 1] - traj.t[i])
        rr = np.array([_hermite(traj, int(k), float(w)) for k, w in zip(i, tau)])
        ss = traj.r_sun[i] * (1 - tau)[:, None] + traj.r_sun[i + 1] * tau[:, None]
        nn = shadow_function(rr, ss)
        pen = (nn > 0) & (nn < 1)
        lost += float(np.sum((1 - nn[pen]) * 0.25))
    d0 = traj.t[0] / DAY
    days = np.zeros(int(math.ceil((traj.t[-1] - traj.t[0]) / DAY)) + 1)
    for a, b in umbra:
        # credit each day with the seconds of umbra it contains
        da, db = int((a / DAY) - d0), int((b / DAY) - d0)
        if da == db:
            days[da] += b - a
        else:
            days[da] += (da + 1 + d0) * DAY - a
            days[db] += b - (db + d0) * DAY
    beta = beta_series(traj)
    daily_beta = [float(beta[int(k)]) for k in np.linspace(0, len(beta) - 1, len(days))]
    slope, _, inc_mean, a_mean, e_mean = node_drift(traj)
    durations = [(b - a) / 60 for a, b in umbra]
    return HifiStats(
        umbra_hours=umbra_s / 3600,
        penumbra_hours=(shade_s - umbra_s) / 3600,
        lost_sun_hours=lost / 3600,
        passes=len(umbra),
        days_with_umbra=int(np.sum(days > 0)),
        max_pass_min=max(durations) if durations else 0.0,
        mean_pass_min=float(np.mean(durations)) if durations else 0.0,
        node_drift_deg_per_year=slope,
        inclination_deg=traj.inclination_deg,
        mean_a_km=a_mean,
        mean_e=e_mean,
        daily_umbra_min=[float(x / 60) for x in days],
        daily_beta_deg=daily_beta,
    )


# ---------------------------------------------------------------------------- closed form, same case
def closed_form_stats(orbit: Orbit, days: float = TROPICAL_YEAR_DAYS):
    """The paper's model for the same orbit: yearly fraction, hours, days with eclipse, pass lengths."""
    d = np.arange(0.0, days, 0.05)
    beta = beta_angle(orbit, d)
    f = eclipse_fraction_per_orbit(beta, orbit.altitude_km)
    T = orbital_period(orbit.altitude_km)  # s
    frac = float(np.mean(f))
    pass_min = f * T / 60
    daily = f.reshape(-1, 20).mean(axis=1) if len(f) % 20 == 0 else f[: len(f) // 20 * 20].reshape(-1, 20).mean(axis=1)
    return {
        "eclipse_fraction": frac,
        "eclipse_hours": frac * days * 24,
        "days_with_eclipse": int(np.sum(daily > 0)),
        "max_pass_min": float(pass_min.max()),
        "threshold_beta_deg": float(no_eclipse_beta_deg(orbit.altitude_km)),
        "min_abs_beta_deg": float(np.min(np.abs(np.degrees(beta)))),
        "period_min": T / 60,
        "daily_eclipse_min": [float(x * 1440) for x in daily],
        "daily_beta_deg": [float(np.degrees(x)) for x in beta[::20]],
    }


# ---------------------------------------------------------------------------- the comparison
def retuned_inclination(orbit: Orbit, drift_deg_per_year: float, inclination_deg: float) -> float:
    """One Newton step on the J2 sensitivity dΩ̇/di to cancel a measured node drift."""
    a = R_EARTH + orbit.altitude_km
    n = math.sqrt(MU_EARTH / a**3)
    inc = math.radians(inclination_deg)
    dOmega_di = 1.5 * n * J2 * (R_EARTH / a) ** 2 * math.sin(inc)  # rad/s per rad
    drift_rad_s = math.radians(drift_deg_per_year) / (TROPICAL_YEAR_DAYS * DAY)
    return math.degrees(inc - drift_rad_s / dOmega_di)


def compare(orbit: Orbit, *, retune: bool = True, days: float = TROPICAL_YEAR_DAYS, sample_s: float = 10.0, verbose: bool = True):
    """Closed form versus the high-fidelity propagation for one orbit. With `retune`, the
    inclination is corrected once so the node is stationary relative to the mean Sun under the
    full force model (what a mission would fly), and both runs are reported."""
    log = (lambda *a: print(*a, file=sys.stderr)) if verbose else (lambda *a: None)
    eph = Ephemeris(0.0, days * DAY)
    log(f"[hifi] {orbit.altitude_km:.0f} km, Ω={orbit.raan_offset_deg:.0f}°: propagating with the paper's inclination {orbit.inclination_deg:.4f}° …")
    traj = propagate(orbit, days, sample_s=sample_s, ephemeris=eph)
    first = eclipse_stats(traj)
    out = {"orbit": {"altitude_km": orbit.altitude_km, "raan_offset_deg": orbit.raan_offset_deg, "inclination_deg": orbit.inclination_deg},
           "closed_form": closed_form_stats(orbit, days), "hifi_paper_inclination": asdict(first)}
    log(f"[hifi]   node drift {first.node_drift_deg_per_year:+.3f}°/yr, umbra {first.umbra_hours:.1f} h, {first.days_with_umbra} days")
    if retune:
        inc2 = retuned_inclination(orbit, first.node_drift_deg_per_year, orbit.inclination_deg)
        log(f"[hifi]   retuned inclination {inc2:.4f}° (Δi = {inc2 - orbit.inclination_deg:+.4f}°), propagating again …")
        traj2 = propagate(orbit, days, inclination_deg=inc2, sample_s=sample_s, ephemeris=eph)
        second = eclipse_stats(traj2)
        log(f"[hifi]   residual drift {second.node_drift_deg_per_year:+.3f}°/yr, umbra {second.umbra_hours:.1f} h, {second.days_with_umbra} days")
        out["hifi_retuned"] = asdict(second)
        out["retuned_inclination_deg"] = inc2
    return out


def conical_correction(altitude_km: float, beta_deg: float = 0.0, sun_distance_km: float = 1.495978707e8):
    """One pass through the shadow on a circular orbit at a given β: duration in the cylindrical
    model, in the conical umbra and in umbra+penumbra (seconds)."""
    a = R_EARTH + altitude_km
    T = orbital_period(altitude_km)
    # orbit in the x–z plane tilted by β about x: Sun along +x; plane normal = (0, -sinβ, cosβ)
    b = math.radians(beta_deg)
    u = np.linspace(0, 2 * math.pi, 400001)
    r = np.stack([a * np.cos(u), a * np.sin(u) * math.cos(b), a * np.sin(u) * math.sin(b)], axis=1)
    r_sun = np.array([[sun_distance_km, 0.0, 0.0]]).repeat(len(u), axis=0)
    nu = shadow_function(r, r_sun)
    du = u[1] - u[0]
    umbra = float(np.sum(nu <= 0) * du / (2 * math.pi) * T)
    shade = float(np.sum(nu < 1) * du / (2 * math.pi) * T)
    cyl = float(eclipse_fraction_per_orbit(b, altitude_km) * T)
    return {"altitude_km": altitude_km, "beta_deg": beta_deg, "cylinder_s": cyl, "umbra_s": umbra, "umbra_penumbra_s": shade, "period_s": T}


def default_cases():
    """The paper's comparison cases: (altitude km, node offset deg)."""
    return [(550, 0), (550, 270), (800, 270), (800, 90), (1000, 270), (1200, 270), (1400, 270), (1500, 270), (1600, 253)]


def _run_case(args):
    h, O = args
    return compare(Orbit(h, O), verbose=True)


def run_table(cases=None, workers: int | None = None):
    """Run the comparison for several cases in parallel; returns a list of `compare` results."""
    from concurrent.futures import ProcessPoolExecutor

    cases = cases or default_cases()
    spk_path()  # make sure the kernel exists before forking
    with ProcessPoolExecutor(max_workers=workers) as ex:
        return list(ex.map(_run_case, cases))


__all__ = ["Ephemeris", "Trajectory", "HifiStats", "propagate", "shadow_function", "zonal_accel", "third_body_accel",
           "eclipse_stats", "closed_form_stats", "compare", "conical_correction", "run_table", "default_cases", "sso_inclination_deg"]
