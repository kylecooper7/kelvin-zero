"""The figures of the paper, regenerated from this package (matplotlib).

    python -m kelvinzero figures out/

Every plot is drawn from the model in this package only; nothing is cached or hard-coded."""

from __future__ import annotations

import os

import numpy as np

from .constants import TROPICAL_YEAR_DAYS
from .orbit import (
    Orbit,
    alpha_deg_for_altitude,
    best_node_offset,
    beta_angle,
    eclipse_fraction_per_orbit,
    no_eclipse_beta_deg,
    orbital_period,
    sso_inclination_deg,
    yearly_eclipse_stats,
)
from .regions import classify_regions, compute_sun_dot_extrema, region_contours
from .sun import analemma_mssi, sun_state

C_SKY, C_EMERALD, C_AMBER, C_VIOLET, C_ROSE, C_INK = "#0369a1", "#047857", "#b45309", "#6d28d9", "#be123c", "#0f172a"
MONTHS = "JFMAMJJASOND"
MONTH_D = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]


def _style():
    import matplotlib

    matplotlib.use("Agg")
    import logging

    logging.getLogger("matplotlib.font_manager").setLevel(logging.ERROR)  # missing-font fallbacks are fine
    import matplotlib.pyplot as plt

    plt.rcParams.update(
        {
            "font.family": ["Helvetica Neue", "Helvetica", "Arial", "DejaVu Sans"],
            "font.size": 9,
            "axes.titlesize": 10,
            "axes.labelsize": 9,
            "axes.edgecolor": "#334155",
            "axes.linewidth": 0.8,
            "axes.spines.top": False,
            "axes.spines.right": False,
            "xtick.color": "#334155",
            "ytick.color": "#334155",
            "grid.color": "#cbd5e1",
            "grid.linewidth": 0.5,
            "legend.frameon": False,
            "legend.fontsize": 8,
            "figure.dpi": 150,
            "savefig.dpi": 300,
            "savefig.bbox": "tight",
            "savefig.pad_inches": 0.05,
        }
    )
    return plt


def fig_analemma(out):
    plt = _style()
    d, lng, lat, _ = analemma_mssi(730)
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(7.0, 3.1), gridspec_kw={"width_ratios": [1, 1.5]})
    ax1.plot(lng, lat, color=C_SKY, lw=1.6)
    for k, md in enumerate(MONTH_D):
        i = int(np.argmin(np.abs(d - md)))
        ax1.plot(lng[i], lat[i], "o", ms=3, color=C_AMBER, zorder=3)
        ax1.annotate(MONTHS[k], (lng[i], lat[i]), textcoords="offset points", xytext=(5, 3), fontsize=7, color="#475569")
    ax1.axhline(0, color="#94a3b8", lw=0.6)
    ax1.axvline(0, color="#94a3b8", lw=0.6)
    ax1.set_xlabel("longitude in MSSI, α − L = −EoT (°)  → east")
    ax1.set_ylabel("declination δ (°)")
    ax1.set_xlim(-5.5, 5.5)
    ax1.set_ylim(-26, 26)
    ax1.set_aspect(0.2)
    ax1.grid(True)
    ax1.set_title("(a) Analemma, mean-Sun frame")
    dd = np.arange(0, 367)
    s = sun_state(dd)
    ax2.plot(dd, np.degrees(s.eot) * 4, color=C_SKY, lw=1.4, label="equation of time (min)")
    ax2b = ax2.twinx()
    ax2b.plot(dd, np.degrees(s.dec), color=C_AMBER, lw=1.4, ls="--", label="declination (°)")
    ax2b.spines["right"].set_visible(True)
    ax2.set_xlim(0, 365)
    ax2.set_xticks(MONTH_D)
    ax2.set_xticklabels(list(MONTHS))
    ax2.set_ylabel("EoT = L − α (min)", color=C_SKY)
    ax2b.set_ylabel("δ (°)", color=C_AMBER)
    ax2.axhline(0, color="#94a3b8", lw=0.6)
    ax2.grid(True)
    ax2.set_title("(b) Equation of time and declination")
    h1, l1 = ax2.get_legend_handles_labels()
    h2, l2 = ax2b.get_legend_handles_labels()
    ax2.legend(h1 + h2, l1 + l2, loc="lower left")
    fig.savefig(os.path.join(out, "fig-analemma.png"))
    plt.close(fig)


def fig_sso(out):
    plt = _style()
    h = np.arange(100, 2001, 10)
    fig, axs = plt.subplots(1, 3, figsize=(7.4, 2.4))
    fig.subplots_adjust(wspace=0.5)
    axs[0].plot(h, sso_inclination_deg(h), color=C_SKY, lw=1.6)
    axs[0].set_ylabel("i_SSO (°)")
    axs[0].set_title("(a) i_SSO(h)")
    axs[1].plot(h, no_eclipse_beta_deg(h), color=C_ROSE, lw=1.6)
    axs[1].set_ylabel("|β| threshold (°)")
    axs[1].set_title("(b) eclipse-free |β| = asin R/(R+h)", fontsize=9)
    axs[2].plot(h, orbital_period(h) / 60, color=C_EMERALD, lw=1.6)
    axs[2].set_ylabel("period (min)")
    axs[2].set_title("(c) period")
    for ax in axs:
        ax.set_xlabel("altitude h (km)")
        ax.grid(True)
        ax.set_xlim(100, 2000)
    fig.savefig(os.path.join(out, "fig-sso.png"))
    plt.close(fig)


def fig_frac_beta(out):
    plt = _style()
    fig, ax = plt.subplots(figsize=(4.6, 2.8))
    b = np.linspace(0, 90, 181)
    for k, h in enumerate([400, 550, 800, 1000, 1500]):
        ax.plot(b, 100 * eclipse_fraction_per_orbit(np.radians(b), h), color=[C_INK, C_SKY, C_EMERALD, C_AMBER, C_VIOLET][k], lw=1.5, label=f"{h} km")
    ax.set_xlabel("β angle (°)")
    ax.set_ylabel("fraction of orbit in shadow (%)")
    ax.set_xlim(0, 90)
    ax.set_ylim(0, 42)
    ax.grid(True)
    ax.legend(title="altitude")
    ax.set_title("Per-orbit eclipse fraction f_E(β), cylindrical shadow")
    fig.savefig(os.path.join(out, "fig-frac-beta.png"))
    plt.close(fig)


def fig_raan(out):
    plt = _style()
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(7.0, 3.0))
    cols = [C_INK, C_SKY, C_EMERALD, C_AMBER, C_VIOLET]
    O = np.arange(0, 361, 2)
    for k, h in enumerate([550, 800, 1000, 1200, 1500]):
        f = np.array([yearly_eclipse_stats(Orbit(h, o), 183).eclipse_fraction for o in O])
        ax1.plot(O, 100 * f, color=cols[k], lw=1.5, label=f"{h} km")
        j = int(np.argmin(f))
        ax1.plot(O[j], 100 * f[j], "o", ms=3.5, color=cols[k])
    ax1.set_xlim(0, 360)
    ax1.set_xticks([0, 90, 180, 270, 360])
    ax1.set_xlabel("RAAN offset from mean Sun, Ω (°)   [LTAN = 12:00 + Ω/15°]")
    ax1.set_ylabel("mean yearly eclipse (% of time)")
    ax1.grid(True)
    ax1.legend(title="altitude", ncol=5, loc="upper center", bbox_to_anchor=(0.5, -0.32), fontsize=7, title_fontsize=7)
    ax1.set_title("(a) Yearly eclipse vs. plane orientation")
    dd = np.arange(0, 366)
    for k, (name, h, o) in enumerate([("Noon–midnight, 550 km (Ω = 0°)", 550, 0), ("Dawn–dusk, 800 km (Ω = 270°)", 800, 270), ("Dawn–dusk, 1500 km (Ω = 270°)", 1500, 270)]):
        col = [C_INK, C_SKY, C_VIOLET][k]
        ax2.plot(dd, np.degrees(beta_angle(Orbit(h, o), dd)), color=col, lw=1.4, label=name)
        for sgn in (1, -1):
            ax2.axhline(sgn * no_eclipse_beta_deg(h), color=col, lw=0.7, ls=":")
    ax2.set_xlim(0, 365)
    ax2.set_xticks(MONTH_D)
    ax2.set_xticklabels(list(MONTHS))
    ax2.set_ylim(-95, 95)
    ax2.set_ylabel("β (°)")
    ax2.grid(True)
    ax2.legend(loc="center", bbox_to_anchor=(0.5, 0.62), fontsize=7)
    ax2.set_title("(b) β over the year; dotted = eclipse-free threshold")
    fig.savefig(os.path.join(out, "fig-raan.png"))
    plt.close(fig)


def fig_optimum(out):
    plt = _style()
    h = np.arange(400, 2001, 50)
    best = [best_node_offset(x, 2.0, 183) for x in h]
    days = np.array([b[1].eclipse_days for b in best])
    f = np.array([b[1].eclipse_fraction for b in best])
    fig, ax = plt.subplots(figsize=(4.6, 2.6))
    ax.plot(h, days, color=C_ROSE, lw=1.6, label="days with any eclipse")
    ax.set_xlabel("altitude h (km)")
    ax.set_ylabel("days per year with eclipse")
    axb = ax.twinx()
    axb.plot(h, 100 * f, color=C_SKY, lw=1.4, ls="--", label="mean yearly eclipse (%)")
    axb.set_ylabel("mean yearly eclipse (%)", color=C_SKY)
    axb.spines["right"].set_visible(True)
    ax.grid(True)
    ax.set_xlim(400, 2000)
    h1, l1 = ax.get_legend_handles_labels()
    h2, l2 = axb.get_legend_handles_labels()
    ax.legend(h1 + h2, l1 + l2, loc="upper right")
    ax.set_title("Best fixed SSO plane vs. altitude")
    fig.savefig(os.path.join(out, "fig-optimum.png"))
    plt.close(fig)


def fig_regions(out, altitudes=(550, 1000)):
    plt = _style()
    from matplotlib.colors import ListedColormap
    from matplotlib.patches import Patch

    ext = compute_sun_dot_extrema(361, 181, 366)
    _, alng, alat, _ = analemma_mssi(400)
    fig, axs = plt.subplots(len(altitudes), 1, figsize=(7.0, 2.6 * len(altitudes)))
    cmap = ListedColormap(["#c4b5fd", "#fdba74", "#a7f3d0"])
    for ax, h in zip(np.atleast_1d(axs), altitudes):
        alpha = float(alpha_deg_for_altitude(h))
        ax.imshow(classify_regions(ext, alpha), origin="lower", extent=[-180, 180, -90, 90], cmap=cmap, vmin=0, vmax=2, aspect="auto", interpolation="nearest")
        cont = region_contours(ext, alpha)
        for pl in cont["dU"]:
            ax.plot(pl[:, 0], pl[:, 1], color=C_VIOLET, lw=1.2)
        for pl in cont["dI"]:
            ax.plot(pl[:, 0], pl[:, 1], color="#c2410c", lw=1.2)
        ax.plot(alng, alat, color=C_SKY, lw=1.0)
        ax.set_xticks(range(-180, 181, 60))
        ax.set_yticks(range(-90, 91, 30))
        ax.set_xlabel("longitude in MSSI (°)  — 0° = mean Sun, ±180° = anti-Sun")
        ax.set_ylabel("latitude (°)")
        ax.set_title(f"h = {h} km,  α = {alpha:.1f}°")
        ax.grid(True, alpha=0.5)
    np.atleast_1d(axs)[0].legend(
        handles=[Patch(color="#c4b5fd", label="always eclipsed"), Patch(color="#fdba74", label="sometimes"), Patch(color="#a7f3d0", label="never"), plt.Line2D([], [], color=C_VIOLET, label="∂U"), plt.Line2D([], [], color="#c2410c", label="∂I"), plt.Line2D([], [], color=C_SKY, label="analemma")],
        loc="upper center", bbox_to_anchor=(0.5, -0.32), ncol=6, fontsize=7,
    )
    fig.subplots_adjust(hspace=0.75)
    fig.savefig(os.path.join(out, "fig-regions.png"))
    plt.close(fig)


def fig_heatmap(out):
    plt = _style()
    A = np.arange(400, 2001, 50)
    O = np.arange(0, 361, 4)
    F = np.array([[100 * yearly_eclipse_stats(Orbit(h, o), 92).eclipse_fraction for o in O] for h in A])
    fig, ax = plt.subplots(figsize=(7.0, 3.4))
    pc = ax.pcolormesh(O, A, F, cmap="magma_r", vmin=0, vmax=40, shading="nearest")
    cs = ax.contour(O, A, F, levels=[0.5, 1, 2, 5, 10, 20, 30], colors="white", linewidths=0.6, alpha=0.9)
    ax.clabel(cs, fmt="%g%%", fontsize=7, colors="white")
    # exact eclipse-free boundary: min_d |beta(d)| = asin(R/(R+h)), on a fine grid so the line is smooth
    A2 = np.arange(400, 2001, 10)
    O2 = np.arange(0, 361, 1)
    dd = np.arange(0, 366)
    M = np.array([[np.min(np.abs(np.degrees(beta_angle(Orbit(h, o), dd)))) - float(no_eclipse_beta_deg(h)) for o in O2] for h in A2])
    ax.contour(O2, A2, M, levels=[0.0], colors=[C_EMERALD], linewidths=1.8)
    ax.set_xlabel("RAAN offset from mean Sun, Ω (°)   [LTAN = 12:00 + Ω/15°]")
    ax.set_ylabel("altitude h (km)")
    ax.set_xticks([0, 90, 180, 270, 360])
    cb = fig.colorbar(pc, ax=ax, pad=0.02)
    cb.set_label("mean yearly eclipse (% of time)")
    ax.set_title("Yearly eclipse for every fixed sun-synchronous plane; green = eclipse-free")
    fig.savefig(os.path.join(out, "fig-heatmap.png"))
    plt.close(fig)


def _lobe_widths(h, centre, thresholds):
    """Width (degrees of Ω) of the lobe around `centre` in which the yearly eclipse stays below each
    threshold, by golden-section search for the minimum and bisection for the edges (continuous in Ω)."""
    f = lambda O: yearly_eclipse_stats(Orbit(h, O), 92).eclipse_fraction  # noqa: E731
    a, b = centre - 40.0, centre + 40.0
    g = (5 ** 0.5 - 1) / 2
    c, d = b - g * (b - a), a + g * (b - a)
    fc, fd = f(c), f(d)
    for _ in range(30):
        if fc < fd:
            b, d, fd = d, c, fc
            c = b - g * (b - a)
            fc = f(c)
        else:
            a, c, fc = c, d, fd
            d = a + g * (b - a)
            fd = f(d)
    o_min = (a + b) / 2
    f_min = f(o_min)

    def edge(thr, sgn):
        lo, hi = o_min, o_min + sgn * 90.0
        for _ in range(20):
            mid = (lo + hi) / 2
            if f(mid) <= thr:
                lo = mid
            else:
                hi = mid
        return lo

    widths = [0.0 if f_min > thr else edge(thr, 1) - edge(thr, -1) for thr in thresholds]

    # the eclipse-free width comes from the exact margin min|β| − asin(R/(R+h)) (daily minimum, no sampling noise)
    days = np.arange(366.0)
    thr_beta = float(no_eclipse_beta_deg(h))
    margin = lambda O: float(np.min(np.abs(np.degrees(beta_angle(Orbit(h, O), days))))) - thr_beta  # noqa: E731

    # f is flat (zero) across the island, so start the free-edge bisection from the margin's peak, not from o_min
    a, b = centre - 40.0, centre + 40.0
    c, d = b - g * (b - a), a + g * (b - a)
    mc, md = margin(c), margin(d)
    for _ in range(25):
        if mc > md:
            b, d, md = d, c, mc
            c = b - g * (b - a)
            mc = margin(c)
        else:
            a, c, mc = c, d, md
            d = a + g * (b - a)
            md = margin(d)
    o_max = (a + b) / 2

    def free_edge(sgn):
        lo, hi = o_max, o_max + sgn * 90.0
        for _ in range(20):
            mid = (lo + hi) / 2
            if margin(mid) >= 0:
                lo = mid
            else:
                hi = mid
        return lo

    widths[0] = free_edge(1) - free_edge(-1) if margin(o_max) >= 0 else 0.0
    return f_min, widths


def fig_window(out):
    plt = _style()
    h = np.arange(400, 2001, 20)
    thr = (1e-9, 0.01, 0.02, 0.05)
    rows = []
    for x in h:
        _, dawn = _lobe_widths(x, 270.0, thr)
        _, dusk = _lobe_widths(x, 90.0, thr)
        rows.append([(a + b) / 2 for a, b in zip(dawn, dusk)])  # per lobe, averaged over 06:00 and 18:00
    rows = np.array(rows)
    fig, ax = plt.subplots(figsize=(4.8, 2.9))
    for k, (lab, col) in enumerate([("no eclipse at all", C_EMERALD), ("≤ 1% of the year", C_SKY), ("≤ 2%", C_AMBER), ("≤ 5%", C_ROSE)]):
        ax.plot(h, rows[:, k], color=col, lw=1.6, label=lab)
    ax.set_xlabel("altitude h (km)")
    ax.set_ylabel("Ω window per dawn/dusk lobe (°)")
    ax.set_xlim(400, 2000)
    ax.set_ylim(0, 60)
    ax.grid(True)
    ax.legend(title="yearly eclipse", fontsize=7, title_fontsize=7)
    ax.set_title("How far the node may sit from dawn–dusk")
    fig.savefig(os.path.join(out, "fig-window.png"))
    plt.close(fig)


def fig_surface(out):
    """The eclipse map as a relief over altitude and node offset (the paper's interactive figure)."""
    plt = _style()
    h = np.arange(400, 2001, 25)
    O = np.arange(0, 361, 3)
    F = 100 * np.array([[yearly_eclipse_stats(Orbit(x, o), 92).eclipse_fraction for o in O] for x in h])
    OO, HH = np.meshgrid(O, h)
    fig = plt.figure(figsize=(7.0, 4.8))
    ax = fig.add_subplot(111, projection="3d")
    ax.plot_surface(OO, HH, F, cmap="magma_r", vmin=0, vmax=40, rstride=1, cstride=1, linewidth=0, antialiased=True)
    ax.contour(OO, HH, F, levels=[0.5, 1, 2, 5, 10, 20, 30], colors="white", linewidths=0.5)
    ax.set_xlabel("Ω (°)")
    ax.set_ylabel("altitude h (km)")
    ax.set_zlabel("yearly eclipse (%)")
    ax.set_xticks([0, 90, 180, 270, 360])
    ax.set_zlim(0, 40)
    ax.view_init(elev=32, azim=-125)
    ax.set_title("Yearly eclipse as a relief over altitude and node offset")
    fig.savefig(os.path.join(out, "fig-surface.png"))
    plt.close(fig)


ALL = {
    "analemma": fig_analemma,
    "sso": fig_sso,
    "frac-beta": fig_frac_beta,
    "raan": fig_raan,
    "optimum": fig_optimum,
    "regions": fig_regions,
    "heatmap": fig_heatmap,
    "window": fig_window,
    "surface": fig_surface,
}


def make_all(out: str, only=None):
    os.makedirs(out, exist_ok=True)
    for name, fn in ALL.items():
        if only and name not in only:
            continue
        fn(out)
        print("wrote", os.path.join(out, f"fig-{name}.png"))
