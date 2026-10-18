"""Kelvin Zero — eclipse-minimising sun-synchronous orbits in a mean-Sun rotating frame.

The model behind the paper and the visualizer at https://colure.space/kelvinzero. Everything is pure
NumPy; figures need matplotlib, the local 3-D viewer needs plotly (``pip install kelvinzero[viz]``).

Quick start::

    from kelvinzero import Orbit, yearly_eclipse_stats
    print(yearly_eclipse_stats(Orbit(altitude_km=800, raan_offset_deg=270)))
"""

from .constants import DEG, J2, MU, R_EARTH, TROPICAL_YEAR_DAYS
from .frames import eci_to_display, frame_angle, gmst, lat_lng_to_vec, rotate_z, vec_to_lat_lng
from .orbit import (
    Orbit,
    YearlyStats,
    alpha_deg_for_altitude,
    altitude_for_sso_inclination_deg,
    argument_of_latitude,
    best_node_offset,
    beta_angle,
    eclipse_fraction_per_orbit,
    is_eclipsed,
    ltan_hours,
    no_eclipse_beta_deg,
    orbit_normal_eci,
    orbit_ring_eci,
    orbital_period,
    plane_normal,
    plane_point,
    raan_eci,
    raan_mssi,
    raan_precession_rate,
    satellite_position_eci,
    sso_inclination_deg,
    yearly_eclipse_fraction_sampled,
    yearly_eclipse_stats,
)
from .regions import (
    REGION_ALWAYS_ECLIPSE,
    REGION_NO_ECLIPSE,
    REGION_SOME_ECLIPSE,
    SunDotExtrema,
    classify_regions,
    compute_sun_dot_extrema,
    region_area_fractions,
    region_contours,
    sun_dot_extrema_at,
)
from .sun import (
    SunState,
    analemma_mssi,
    earth_heliocentric_ecliptic,
    ecliptic_eci,
    mean_sun_longitude,
    sun_direction_eci,
    sun_direction_mssi,
    sun_state,
    year_markers,
)

__version__ = "0.2.6"

__all__ = [name for name in dir() if not name.startswith("_")]
