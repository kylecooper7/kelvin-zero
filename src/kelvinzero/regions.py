"""Eclipse-time regions.

For every direction p on the unit sphere (in MSSI) precompute the yearly extrema of p . s(t), where
s(t) is the Sun direction in MSSI (the analemma). A direction is sunlit at time t iff
p . s(t) >= cos(alpha), where alpha is the half-angle of the sunlit cone: for a point of an orbit
shell at altitude h, alpha = 90 deg + acos(R / (R + h)); alpha = 90 deg is plain day/night.

    U = { p : max_t p.s >= cos alpha }   ever sunlit        (boundary dU)
    I = { p : min_t p.s >= cos alpha }   always sunlit      (boundary dI)

Classes: outside U -> always eclipsed (0); U \\ I -> sometimes (1); I -> never (2).
"""

from __future__ import annotations

from dataclasses import dataclass

import numpy as np

from .constants import DEG, TROPICAL_YEAR_DAYS
from .sun import sun_direction_mssi

REGION_ALWAYS_ECLIPSE = 0
REGION_SOME_ECLIPSE = 1
REGION_NO_ECLIPSE = 2


@dataclass
class SunDotExtrema:
    """Equirectangular grids of the yearly max/min of p . s. Column c <-> longitude
    -180 + 360 c/(W-1); row r <-> latitude -90 + 180 r/(H-1)."""

    lng_deg: np.ndarray  # (W,)
    lat_deg: np.ndarray  # (H,)
    max: np.ndarray  # (H, W)
    min: np.ndarray  # (H, W)


def compute_sun_dot_extrema(width: int = 721, height: int = 361, sun_samples: int = 366) -> SunDotExtrema:
    d = np.arange(sun_samples) / sun_samples * TROPICAL_YEAR_DAYS
    S = sun_direction_mssi(d)  # (N, 3)
    lng = np.linspace(-180.0, 180.0, width)
    lat = np.linspace(-90.0, 90.0, height)
    LNG, LAT = np.meshgrid(np.radians(lng), np.radians(lat))
    P = np.stack([np.cos(LAT) * np.cos(LNG), np.cos(LAT) * np.sin(LNG), np.sin(LAT)], axis=-1).reshape(-1, 3)
    mx = np.full(P.shape[0], -2.0)
    mn = np.full(P.shape[0], 2.0)
    for a in range(0, P.shape[0], 20000):
        dots = P[a : a + 20000] @ S.T
        mx[a : a + 20000] = dots.max(axis=1)
        mn[a : a + 20000] = dots.min(axis=1)
    return SunDotExtrema(lng, lat, mx.reshape(height, width), mn.reshape(height, width))


def sun_dot_extrema_at(lat_deg, lng_deg, sun_samples: int = 2000):
    """Yearly extrema of p . s for a single direction."""
    d = np.arange(sun_samples) / sun_samples * TROPICAL_YEAR_DAYS
    S = sun_direction_mssi(d)
    la, lo = np.radians(lat_deg), np.radians(lng_deg)
    p = np.array([np.cos(la) * np.cos(lo), np.cos(la) * np.sin(lo), np.sin(la)])
    dots = S @ p
    return float(dots.max()), float(dots.min())


def classify_regions(ext: SunDotExtrema, alpha_deg: float) -> np.ndarray:
    """Region class (0/1/2) for every grid cell at cone half-angle ``alpha_deg``."""
    c = np.cos(alpha_deg * DEG)
    return np.where(ext.min >= c, REGION_NO_ECLIPSE, np.where(ext.max >= c, REGION_SOME_ECLIPSE, REGION_ALWAYS_ECLIPSE)).astype(np.uint8)


def region_contours(ext: SunDotExtrema, alpha_deg: float):
    """Boundaries dU and dI as lists of (lng_deg, lat_deg) polylines (NumPy arrays of shape (n, 2)),
    extracted with contourpy at level cos(alpha)."""
    import contourpy

    level = float(np.cos(alpha_deg * DEG))
    out = {}
    for key, field in (("dU", ext.max), ("dI", ext.min)):
        gen = contourpy.contour_generator(ext.lng_deg, ext.lat_deg, field)
        out[key] = [np.asarray(line) for line in gen.lines(level)]
    return out


def region_area_fractions(ext: SunDotExtrema, alpha_deg: float):
    """Fraction of the sphere's area in each class (always, sometimes, never), cos-lat weighted."""
    cls = classify_regions(ext, alpha_deg)[:, :-1]
    w = np.cos(np.radians(ext.lat_deg))[:, None] * np.ones_like(cls, dtype=float)
    total = w.sum()
    return [float(w[cls == k].sum() / total) for k in (0, 1, 2)]
