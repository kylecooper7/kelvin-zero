"""Command-line interface.

    python -m kelvinzero stats --alt 800 --raan 270
    python -m kelvinzero sweep --alt 800
    python -m kelvinzero figures out/
    python -m kelvinzero viz --alt 800 --raan 270 --view eclipse
    python -m kelvinzero hifi --alt 800 --raan 270
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

    make_all(a.out, a.only, hifi_json=a.hifi)


def cmd_viz(a):
    from .viz import serve

    serve(port=a.port, open_browser=not a.no_browser, alt=a.alt, raan=a.raan, view=a.view, day=a.day, cam=a.cam, frame=a.frame)


def cmd_hifi(a):
    from .hifi import compare

    r = compare(Orbit(a.alt, a.raan), retune=not a.no_retune, days=a.days)
    cf, hp = r["closed_form"], r["hifi_paper_inclination"]
    print(f"{a.alt:g} km, Ω = {a.raan:g}° (LTAN {ltan_hours(a.raan):05.2f})")
    print(f"  closed form        : {cf['eclipse_hours']:8.1f} h/yr  {cf['days_with_eclipse']:4d} days  longest pass {cf['max_pass_min']:5.1f} min")
    print(f"  hi-fi, paper's i   : {hp['umbra_hours']:8.1f} h/yr  {hp['days_with_umbra']:4d} days  longest pass {hp['max_pass_min']:5.1f} min  "
          f"(+{hp['penumbra_hours']:.1f} h penumbra; node drift {hp['node_drift_deg_per_year']:+.2f}°/yr)")
    if "hifi_retuned" in r:
        hr = r["hifi_retuned"]
        print(f"  hi-fi, retuned i   : {hr['umbra_hours']:8.1f} h/yr  {hr['days_with_umbra']:4d} days  longest pass {hr['max_pass_min']:5.1f} min  "
              f"(i = {r['retuned_inclination_deg']:.4f}°, Δi = {r['retuned_inclination_deg'] - r['orbit']['inclination_deg']:+.4f}°; residual drift {hr['node_drift_deg_per_year']:+.2f}°/yr)")
    if a.json:
        import json

        json.dump(r, open(a.json, "w"))
        print("wrote", a.json)


def cmd_hifi_table(a):
    """All the paper's comparison cases, sequentially (an hour or so), to one JSON file."""
    import json
    import time

    from .hifi import compare, conical_correction, default_cases

    out = {"cases": [], "conical": [conical_correction(h) for h in (400, 550, 800, 1000, 1200, 1500, 2000)]}
    t0 = time.time()
    for h, O in default_cases():
        out["cases"].append(compare(Orbit(h, O)))
        json.dump(out, open(a.out, "w"))
        print(f"  {h:g} km, Ω = {O:g}° done ({time.time() - t0:.0f} s)", file=sys.stderr)
    print("wrote", a.out)


def cmd_reference(a):
    from .reference import write_reference

    print("wrote", write_reference(a.out))


def main(argv=None):
    # Windows consoles often default to a legacy code page; make Greek letters and ≥ printable everywhere.
    for stream in (sys.stdout, sys.stderr):
        if hasattr(stream, "reconfigure"):
            try:
                stream.reconfigure(encoding="utf-8", errors="replace")
            except (ValueError, OSError):
                pass
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
    s.add_argument("--hifi", help="JSON from `kelvinzero hifi-table`, to also draw the closed-form-vs-propagation figure")
    s.add_argument("out", nargs="?", default="figures")
    s.add_argument("--only", nargs="*")
    s.set_defaults(fn=cmd_figures)
    s = sub.add_parser("viz", help="run the Kelvin Zero visualizer locally (the same one as k0webapp.web.app)")
    s.add_argument("--alt", type=float, help="altitude (km)")
    s.add_argument("--raan", type=float, help="node offset from the mean Sun (deg)")
    s.add_argument("--view", choices=["overview", "eclipse", "frames", "helio", "sun"], help="preset view to open")
    s.add_argument("--day", type=float, help="timeline day (0-365.24)")
    s.add_argument("--cam", help="camera preset: sun, antisun, pole, side, follow, above")
    s.add_argument("--frame", choices=["ECI", "MSSI"])
    s.add_argument("--port", type=int, default=0, help="local port (default: a free one)")
    s.add_argument("--no-browser", action="store_true", help="just serve; do not open a browser")
    s.set_defaults(fn=cmd_viz)
    s = sub.add_parser("hifi", help="high-fidelity cross-check: J2–J6 + Sun/Moon (DE440) propagation with a conical shadow")
    s.add_argument("--alt", type=float, default=800.0)
    s.add_argument("--raan", type=float, default=270.0)
    s.add_argument("--days", type=float, default=365.2422)
    s.add_argument("--no-retune", action="store_true", help="keep the J2-only inclination (report the node drift instead of correcting it)")
    s.add_argument("--json", help="also write the full comparison (daily series included) to this file")
    s.set_defaults(fn=cmd_hifi)
    s = sub.add_parser("hifi-table", help="run every comparison case of the paper's Table 4 and save the results as JSON")
    s.add_argument("out")
    s.set_defaults(fn=cmd_hifi_table)
    s = sub.add_parser("reference", help="write reference values (JSON) for cross-checking other implementations")
    s.add_argument("out", nargs="?", default="reference.json")
    s.set_defaults(fn=cmd_reference)
    a = p.parse_args(argv)
    a.fn(a)


if __name__ == "__main__":
    sys.exit(main())
