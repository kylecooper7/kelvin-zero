"""Command-line interface.

    python -m kelvinzero stats --alt 800 --raan 270
    python -m kelvinzero sweep --alt 800
    python -m kelvinzero figures out/
    python -m kelvinzero viz --alt 800 --raan 270 --frame MSSI -o viewer.html
    python -m kelvinzero reference reference.json
"""

from __future__ import annotations

import argparse
import sys

import numpy as np

from .orbit import Orbit, alpha_deg_for_altitude, best_node_offset, ltan_hours, no_eclipse_beta_deg, orbital_period, yearly_eclipse_stats


def cmd_stats(a):
    o = Orbit(a.alt, a.raan)
    st = yearly_eclipse_stats(o, 366)
    print(f"altitude            {o.altitude_km:8.1f} km")
    print(f"SSO inclination     {o.inclination_deg:8.3f} deg")
    print(f"period              {orbital_period(o.altitude_km) / 60:8.2f} min")
    print(f"node offset Ω       {o.raan_offset_deg:8.2f} deg  (LTAN {ltan_hours(o.raan_offset_deg):05.2f} h)")
    print(f"eclipse-free |β| ≥  {float(no_eclipse_beta_deg(o.altitude_km)):8.2f} deg")
    print(f"β over the year     {st.beta_min_deg:8.2f} … {st.beta_max_deg:.2f} deg")
    print(f"yearly eclipse      {100 * st.eclipse_fraction:8.3f} % of time  (sun exposure {100 * st.sun_exposure:.3f} %)")
    print(f"days with eclipse   {st.eclipse_days:8.1f} / 365")
    print(f"region cone α       {float(alpha_deg_for_altitude(o.altitude_km)):8.2f} deg")


def cmd_sweep(a):
    print(f"altitude {a.alt:g} km: yearly eclipse vs node offset")
    for O in np.arange(0, 360, a.step):
        st = yearly_eclipse_stats(Orbit(a.alt, float(O)), 183)
        bar = "#" * int(round(st.eclipse_fraction * 100))
        print(f"  Ω = {O:5.1f}°  {100 * st.eclipse_fraction:6.2f} %  {bar}")
    O, st = best_node_offset(a.alt, a.step, 183)
    print(f"best: Ω = {O:g}°  ({100 * st.eclipse_fraction:.3f} % of the year, {st.eclipse_days:.0f} days with eclipse)")


def cmd_figures(a):
    from .figures import make_all

    make_all(a.out, a.only)


def cmd_viz(a):
    from .viz import write_html

    print("wrote", write_html(a.out, Orbit(a.alt, a.raan), a.frame))


def cmd_reference(a):
    from .reference import write_reference

    print("wrote", write_reference(a.out))


def main(argv=None):
    p = argparse.ArgumentParser(prog="kelvinzero", description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("stats", help="yearly eclipse statistics for one orbit")
    s.add_argument("--alt", type=float, default=800.0, help="altitude (km)")
    s.add_argument("--raan", type=float, default=270.0, help="node offset from the mean Sun (deg)")
    s.set_defaults(fn=cmd_stats)
    s = sub.add_parser("sweep", help="yearly eclipse versus node offset at one altitude")
    s.add_argument("--alt", type=float, default=800.0)
    s.add_argument("--step", type=float, default=10.0)
    s.set_defaults(fn=cmd_sweep)
    s = sub.add_parser("figures", help="regenerate the paper's figures (matplotlib)")
    s.add_argument("out", nargs="?", default="figures")
    s.add_argument("--only", nargs="*")
    s.set_defaults(fn=cmd_figures)
    s = sub.add_parser("viz", help="write a self-contained 3-D viewer (plotly HTML)")
    s.add_argument("--alt", type=float, default=800.0)
    s.add_argument("--raan", type=float, default=270.0)
    s.add_argument("--frame", choices=["EMI", "MSSI"], default="MSSI")
    s.add_argument("-o", "--out", default="kelvinzero-viewer.html")
    s.set_defaults(fn=cmd_viz)
    s = sub.add_parser("reference", help="write reference values (JSON) for cross-checking other implementations")
    s.add_argument("out", nargs="?", default="reference.json")
    s.set_defaults(fn=cmd_reference)
    a = p.parse_args(argv)
    a.fn(a)


if __name__ == "__main__":
    sys.exit(main())
