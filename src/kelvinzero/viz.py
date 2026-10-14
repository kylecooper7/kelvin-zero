"""A self-contained 3-D viewer (plotly) so anyone can see the geometry locally.

    python -m kelvinzero viz --alt 800 --raan 270 --frame MSSI -o viewer.html

Draws the Earth, the orbit ring (coloured by the cylindrical shadow test), the ascending-node
vector, the analemma (locus of the sub-solar point over a year in MSSI), the current sub-solar
point and Sun vector, the terminator, and the axes of both frames (EMI indigo, MSSI amber), with a
slider over the year. Everything on screen is computed by the functions in this package.
"""

from __future__ import annotations

import numpy as np

from .constants import DEG, R_EARTH, TROPICAL_YEAR_DAYS, TWO_PI
from .frames import eci_to_display, frame_angle
from .orbit import Orbit, argument_of_latitude, is_eclipsed, orbit_ring_eci, plane_point, raan_eci
from .sun import analemma_mssi, mean_sun_longitude, sun_direction_eci


def _sphere(n=48):
    u = np.linspace(0, TWO_PI, 2 * n)
    v = np.linspace(-np.pi / 2, np.pi / 2, n)
    U, V = np.meshgrid(u, v)
    return np.cos(V) * np.cos(U), np.cos(V) * np.sin(U), np.sin(V)


def _circle_perp(normal, r=1.006, n=181):
    normal = np.asarray(normal, dtype=float)
    a = np.array([0, 0, 1.0]) if abs(normal[2]) < 0.9 else np.array([1.0, 0, 0])
    u = np.cross(normal, a)
    u /= np.linalg.norm(u)
    w = np.cross(normal, u)
    t = np.linspace(0, TWO_PI, n)
    return r * (np.outer(np.cos(t), u) + np.outer(np.sin(t), w))


def build_figure(orbit: Orbit, frame: str = "MSSI", days=None, show_regions: bool = False):
    """Return a plotly Figure with one frame per day in ``days`` (default: every 5 days)."""
    import plotly.graph_objects as go

    if days is None:
        days = np.arange(0, TROPICAL_YEAR_DAYS + 1e-9, 5.0)
    rr = orbit.radius_km / R_EARTH
    inc = orbit.inclination_deg * DEG
    x, y, z = _sphere()
    traces_static = [
        go.Surface(x=x, y=y, z=z, colorscale=[[0, "#1e3a8a"], [1, "#60a5fa"]], surfacecolor=z, showscale=False, opacity=1.0, hoverinfo="skip", name="Earth", lighting=dict(ambient=0.8, diffuse=0.4)),
    ]
    # analemma: static in MSSI; in EMI it co-rotates with the mean Sun (drawn per frame below)
    _, _, _, A = analemma_mssi(360)
    emi_axes_col, mssi_axes_col = "#4338ca", "#b45309"

    def per_day(d):
        fa = frame_angle(frame, d)
        L = mean_sun_longitude(d)
        s = eci_to_display(sun_direction_eci(d), frame, d)
        ring = eci_to_display(orbit_ring_eci(orbit, d, 240), frame, d)
        ring_km = orbit_ring_eci(orbit, d, 240) * orbit.radius_km
        ecl = is_eclipsed(ring_km, sun_direction_eci(d))
        sat = eci_to_display(plane_point(raan_eci(orbit, d), inc, argument_of_latitude(orbit, d)), frame, d) * rr
        node = eci_to_display(plane_point(raan_eci(orbit, d), inc, 0.0), frame, d) * rr
        ana = A @ np.array([[np.cos(L - fa), np.sin(L - fa), 0], [-np.sin(L - fa), np.cos(L - fa), 0], [0, 0, 1]]) * 1.012
        term = _circle_perp(s)
        emi_x = eci_to_display(np.array([1.0, 0, 0]), frame, d) * 1.9
        mssi_x = eci_to_display(np.array([np.cos(L), np.sin(L), 0]), frame, d) * 1.9
        colors = np.where(ecl, "#ef4444", "#38bdf8")
        return [
            go.Scatter3d(x=ring[:, 0] * rr, y=ring[:, 1] * rr, z=ring[:, 2] * rr, mode="markers", marker=dict(size=2, color=colors), name="orbit ring (red = in shadow)", hoverinfo="skip"),
            go.Scatter3d(x=[0, node[0]], y=[0, node[1]], z=[0, node[2]], mode="lines", line=dict(color="#38bdf8", width=3, dash="dash"), name="ascending node Ω"),
            go.Scatter3d(x=[sat[0]], y=[sat[1]], z=[sat[2]], mode="markers", marker=dict(size=5, color="#38bdf8"), name="satellite"),
            go.Scatter3d(x=ana[:, 0], y=ana[:, 1], z=ana[:, 2], mode="lines", line=dict(color="#fde68a", width=4), name="analemma (sub-solar point over a year)"),
            go.Scatter3d(x=[0, 2.4 * s[0]], y=[0, 2.4 * s[1]], z=[0, 2.4 * s[2]], mode="lines", line=dict(color="#fbbf24", width=4), name="Sun direction"),
            go.Scatter3d(x=[1.012 * s[0]], y=[1.012 * s[1]], z=[1.012 * s[2]], mode="markers", marker=dict(size=4, color="#fbbf24"), name="sub-solar point"),
            go.Scatter3d(x=term[:, 0], y=term[:, 1], z=term[:, 2], mode="lines", line=dict(color="#cbd5e1", width=2, dash="dot"), name="terminator"),
            go.Scatter3d(x=[0, emi_x[0]], y=[0, emi_x[1]], z=[0, emi_x[2]], mode="lines", line=dict(color=emi_axes_col, width=4), name="EMI x (vernal equinox)"),
            go.Scatter3d(x=[0, mssi_x[0]], y=[0, mssi_x[1]], z=[0, mssi_x[2]], mode="lines", line=dict(color=mssi_axes_col, width=4), name="MSSI x (mean Sun)"),
            go.Scatter3d(x=[0, 0], y=[0, 0], z=[-1.4, 1.4], mode="lines", line=dict(color="#e2e8f0", width=2), name="spin axis"),
        ]

    frames = [go.Frame(data=per_day(d), name=f"{d:.0f}") for d in days]
    fig = go.Figure(data=traces_static + per_day(days[0]), frames=frames)
    n_static = len(traces_static)
    for fr in frames:
        fr.traces = list(range(n_static, n_static + len(fr.data)))
    axis = dict(visible=False, range=[-2.6, 2.6])
    fig.update_layout(
        title=f"Kelvin Zero — {frame} frame · h = {orbit.altitude_km:g} km, i = {orbit.inclination_deg:.2f}°, Ω = {orbit.raan_offset_deg:g}°",
        scene=dict(xaxis=axis, yaxis=axis, zaxis=axis, aspectmode="cube", bgcolor="#0b1020", camera=dict(eye=dict(x=1.1, y=-0.65, z=0.5), up=dict(x=0, y=0, z=1))),
        paper_bgcolor="#0b1020",
        font=dict(color="#e2e8f0"),
        legend=dict(x=0.01, y=0.99),
        margin=dict(l=0, r=0, t=50, b=0),
        updatemenus=[dict(type="buttons", showactive=False, x=0.02, y=0.02, buttons=[dict(label="Play", method="animate", args=[None, dict(frame=dict(duration=60, redraw=True), fromcurrent=True)]), dict(label="Pause", method="animate", args=[[None], dict(frame=dict(duration=0), mode="immediate")])])],
        sliders=[dict(steps=[dict(method="animate", args=[[fr.name], dict(mode="immediate", frame=dict(duration=0, redraw=True))], label=fr.name) for fr in frames], currentvalue=dict(prefix="day "), x=0.1, len=0.85, y=0.05)],
    )
    return fig


def write_html(path: str, orbit: Orbit, frame: str = "MSSI"):
    build_figure(orbit, frame).write_html(path, include_plotlyjs="cdn")
    return path
