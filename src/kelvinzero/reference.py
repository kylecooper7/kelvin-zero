"""Reference values for cross-checking other implementations (for example the JavaScript model
that drives the visualizer). Writes a JSON file; the schema is documented inline.

    python -m kelvinzero reference reference.json
"""

from __future__ import annotations

import json

import numpy as np

from .constants import R_EARTH, TROPICAL_YEAR_DAYS
from .frames import gmst
from .orbit import (
    Orbit,
    alpha_deg_for_altitude,
    eclipse_fraction_per_orbit,
    orbital_period,
    raan_precession_rate,
    sso_inclination_deg,
    yearly_eclipse_fraction_sampled,
)
from .regions import sun_dot_extrema_at
from .sun import analemma_mssi, sun_state


def _usno(d):
    s = sun_state(d)
    return dict(d=d, L=float(np.degrees(s.L)), g=float(np.degrees(s.g)), C=float(np.degrees(s.C)), lam=float(np.degrees(s.lam)), eps_deg=float(np.degrees(s.eps)),
                ra_deg=float(np.degrees(s.ra)), dec_deg=float(np.degrees(s.dec)), eot_min=float(np.degrees(s.eot) * 4), vec=[float(v) for v in s.vec_eci])


def build_reference() -> dict:
    out = {}
    days = [0.0, 10.0, 45.5, 90.0, 120.0, 172.0, 200.0, 265.3, 300.0, 355.0, 9132.0, 9304.0]
    out["usno_sun"] = [_usno(d) for d in days]
    out["gmst"] = [dict(d=d, gmst_deg=float(np.degrees(gmst(d)))) for d in days]

    d, lng, lat, _ = analemma_mssi(2000)
    sel = list(range(0, 2001, 125))
    out["analemma_mssi"] = dict(samples=[dict(d=float(d[i]), lng_deg=float(lng[i]), lat_deg=float(lat[i])) for i in sel],
                                lng_min=float(lng.min()), lng_max=float(lng.max()), lat_min=float(lat.min()), lat_max=float(lat.max()))

    out["sso"] = [dict(alt_km=h, inc_deg=float(sso_inclination_deg(h)), period_s=float(orbital_period(h)),
                       raan_rate_deg_day=float(np.degrees(raan_precession_rate(h, sso_inclination_deg(h))) * 86400))
                  for h in [100, 200, 300, 400, 500, 550, 600, 700, 800, 1000, 1200, 1500, 2000]]

    out["eclipse_fraction"] = [dict(alt_km=h, beta_deg=b, frac=float(eclipse_fraction_per_orbit(np.radians(b), h)))
                               for h in (550.0, 1000.0) for b in (0, 10, 20, 23, 30, 45, 60, 66, 67, 70, 80)]

    out["yearly_sampled"] = [dict(alt_km=h, raan_mssi_deg=o, eclipse_frac=yearly_eclipse_fraction_sampled(Orbit(h, o), 366, 360))
                             for h, o in [(550.0, 0.0), (550.0, 90.0), (550.0, 270.0), (800.0, 90.0), (1000.0, 3.0), (1000.0, 45.0)]]

    pts = [(0, 0), (0, 10), (0, -10), (0, 30), (10, 0), (-10, 0), (0, 60), (90, 0), (180, 0), (0, 89), (45, 45), (-60, -30)]
    out["region_minmax"] = []
    for lng_deg, lat_deg in pts:
        mx, mn = sun_dot_extrema_at(lat_deg, lng_deg, 2000)
        out["region_minmax"].append(dict(lng_deg=lng_deg, lat_deg=lat_deg, max_dot=mx, min_dot=mn))

    out["alpha"] = [dict(alt_km=h, alpha_deg=float(alpha_deg_for_altitude(h))) for h in [100, 550, 800, 1000, 2000]]
    out["constants"] = dict(R_EARTH=R_EARTH, TROPICAL_YEAR_DAYS=TROPICAL_YEAR_DAYS)
    return out


def write_reference(path: str) -> str:
    with open(path, "w") as f:
        json.dump(build_reference(), f, indent=1)
    return path
