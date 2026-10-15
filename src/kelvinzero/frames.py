"""Reference frames.

ECI (Earth-Centred Inertial, J2000 mean equator and equinox): x toward the vernal equinox, z along Earth's spin axis.
Nothing rotates with time.

MSSI (Mean-Sun Synchronous Inertial): ECI rotated about z by the mean longitude of the Sun L(d).
Its x axis always points at the mean Sun, so the frame turns once per tropical year and an
exactly sun-synchronous orbit plane is frozen in it.

All physics is computed in ECI; a display frame is a rotation about z by -frame_angle(frame, d).
"""

from __future__ import annotations

import numpy as np

from .constants import DEG
from .sun import mean_sun_longitude, wrap_two_pi


def frame_angle(frame: str, d):
    """Rotation angle (radians, about +z) of the display frame relative to ECI."""
    if frame == "MSSI":
        return mean_sun_longitude(d)
    if frame == "ECI":
        return np.zeros_like(np.asarray(d, dtype=float))
    raise ValueError(f"unknown frame {frame!r}; use 'ECI' or 'MSSI'")


def gmst(d):
    """Greenwich Mean Sidereal Time (radians): angle from the vernal equinox to the Greenwich
    meridian. At d = 0 (J2000, 12:00 UT) it equals 280.46 deg, i.e. the mean Sun is on the
    Greenwich meridian."""
    return wrap_two_pi((280.46061837 + 360.98564736629 * np.asarray(d, dtype=float)) * DEG)


def rotate_z(v, ang):
    """Rotate vector(s) ``v`` (shape (..., 3)) about +z by ``ang`` radians."""
    v = np.asarray(v, dtype=float)
    ang = np.asarray(ang, dtype=float)
    c, s = np.cos(ang), np.sin(ang)
    x, y, z = v[..., 0], v[..., 1], v[..., 2]
    return np.stack([c * x - s * y, s * x + c * y, z], axis=-1)


def eci_to_display(v, frame: str, d):
    """ECI -> display-frame coordinates."""
    return rotate_z(v, -frame_angle(frame, d))


def vec_to_lat_lng(v):
    """Unit vector(s) -> (lat_deg, lng_deg)."""
    v = np.asarray(v, dtype=float)
    r = np.linalg.norm(v, axis=-1)
    return np.degrees(np.arcsin(v[..., 2] / r)), np.degrees(np.arctan2(v[..., 1], v[..., 0]))


def lat_lng_to_vec(lat_deg, lng_deg):
    """(lat_deg, lng_deg) -> unit vector(s)."""
    la, lo = np.radians(lat_deg), np.radians(lng_deg)
    c = np.cos(la)
    return np.stack([c * np.cos(lo), c * np.sin(lo), np.sin(la)], axis=-1)
