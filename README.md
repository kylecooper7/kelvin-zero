# Kelvin Zero

[![PyPI](https://img.shields.io/pypi/v/kelvinzero.svg)](https://pypi.org/project/kelvinzero/) [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.23382386.svg)](https://doi.org/10.5281/zenodo.23382386) [![tests](https://github.com/kylecooper7/kelvin-zero/actions/workflows/test.yml/badge.svg)](https://github.com/kylecooper7/kelvin-zero/actions/workflows/test.yml)

**Eclipse-minimising sun-synchronous orbits in a mean-Sun rotating frame — the open model.**

This package is the complete, inspectable source of every number, figure and 3-D view in the
Kelvin Zero whitepaper and the interactive visualizer at <https://k0webapp.web.app>. It is pure
NumPy, a few hundred lines, and organised the way the paper is:

| module | what it holds |
|---|---|
| `kelvinzero.sun` | the apparent Sun (USNO low-precision ephemeris), the mean Sun, the **analemma**, Earth's heliocentric position |
| `kelvinzero.frames` | the **EMI** (inertial) and **MSSI** (mean-Sun synchronous) frames, sidereal time |
| `kelvinzero.orbit` | the sun-synchronous condition, J2 nodal precession, 3-D positions, the **β angle**, the cylindrical-shadow **eclipse fraction**, yearly statistics |
| `kelvinzero.regions` | the always / sometimes / never-eclipsed **region maps** and their ∂U / ∂I contours |
| `kelvinzero.figures` | the paper's figures (matplotlib) |
| `kelvinzero.viz` | runs the **visualizer** locally — the same one as the website |
| `kelvinzero.reference` | reference values for cross-checking other implementations |
| `kelvinzero.hifi` | the **high-fidelity cross-check**: numerical propagation with J2–J6, Sun and Moon from JPL DE440 and a conical umbra/penumbra (`pip install "kelvinzero[hifi]"`) |

## Install

```bash
pip install kelvinzero            # model + the built visualizer (NumPy only)
pip install "kelvinzero[figures]" # + matplotlib, for the figures
```

or from a checkout: `pip install -e ".[dev]"`.

## Thirty seconds

```python
from kelvinzero import Orbit, yearly_eclipse_stats, no_eclipse_beta_deg

o = Orbit(altitude_km=800, raan_offset_deg=270)   # dawn–dusk, LTAN 06:00; inclination is set by the SSO condition
print(o.inclination_deg)                           # 98.603
print(no_eclipse_beta_deg(800))                    # 62.69  — eclipse-free once |β| exceeds this
print(yearly_eclipse_stats(o))                     # eclipse_fraction≈0.0267, eclipse_days≈74, β from −89.9° to −58.0°
```

```bash
kelvinzero stats --alt 1500 --raan 270      # a fixed plane that is never eclipsed
kelvinzero sweep --alt 800                  # yearly eclipse versus node offset
kelvinzero figures out/                     # regenerate the paper's figures
kelvinzero viz --alt 800 --raan 270 --view eclipse    # the visualizer, in your browser, served from your machine
kelvinzero hifi --alt 800 --raan 270        # closed form vs a full-force-model propagation (needs the [hifi] extra; downloads DE440s once)
kelvinzero reference reference.json         # values to test another implementation against
```

## The visualizer

`kelvinzero viz` serves a built copy of the visualizer from <https://k0webapp.web.app> on a local
port and opens it — the identical React + Three.js application, minus the website chrome. Its
source is in [`viewer/`](viewer): the JavaScript model in `viewer/src/model` mirrors this package
function for function (`sun.js`, `frames.js`, `orbit.js`, `regions.js`), and the 3-D scene is
`viewer/src/scene/OrbitScene.js`. To work on it:

```bash
cd viewer && npm install
npm run dev      # live-reloading dev server
npm test         # the JS model against this package's reference values (reference.json)
npm run build    # refreshes the copy shipped in src/kelvinzero/viewer_dist
```

## The model in one paragraph

A circular orbit of altitude *h* is sun-synchronous when its J2 nodal precession equals the mean
Sun's rate, which fixes the inclination (`sso_inclination_deg`). In the **MSSI** frame — EMI
rotated about the spin axis by the mean solar longitude *L(d)* — such a plane is frozen and the
real Sun traces the **analemma** (`sun_direction_mssi`, `analemma_mssi`). The Sun's elevation
above the plane is the **β angle** (`beta_angle`); the fraction of each revolution spent in
Earth's cylindrical shadow is the closed form `eclipse_fraction_per_orbit`, zero once
|β| ≥ asin(R/(R+h)). Averaging over the year gives `yearly_eclipse_stats`. Mapping
`max_t p·s` and `min_t p·s` over the sphere (`compute_sun_dot_extrema`) classifies every direction
as always / sometimes / never eclipsed for a given altitude (`classify_regions`,
`region_contours`).

Conventions: `d` is days since J2000.0 (2000-01-01 12:00); the node offset Ω is measured from the
mean Sun (Ω = 0 → LTAN 12:00, 90 → 18:00, 270 → 06:00); EMI has x toward the vernal equinox and z
along the spin axis.

## Verification

`kelvinzero hifi` propagates an orbit through a year with the EGM96 zonal field J2–J6, the Sun and
Moon as point masses from the JPL DE440s ephemeris (33 MB, fetched once into `~/.cache/kelvinzero`),
DOP853 integration and a conical umbra/penumbra, and prints the eclipse hours, days with eclipse and
the longest pass next to the closed form — plus the node drift the J2-only inclination leaves and the
inclination that cancels it. The paper's verification table is `kelvinzero hifi` for nine cases.


`pytest` checks the closed-form eclipse fraction against brute-force cylindrical-shadow sweeps,
the USNO ephemeris against the NOAA/Spencer series, frame conventions (an exact SSO is frozen in
MSSI, the Sun is west of the mean Sun in November, Ω = 90° ⇒ LTAN 18:00), the region maps against
the β-angle picture, and the headline numbers of the paper. `kelvinzero reference` writes the
values that the visualizer's JavaScript model is tested against.

## Citing

If you use the model or the paper, please cite the release (a `CITATION.cff` is included, so
GitHub's "Cite this repository" button gives you BibTeX/APA):

> K. Cooper and Y. Nikas, *Kelvin Zero: eclipse-minimising sun-synchronous orbits in a mean-Sun
> rotating frame*, v0.1.0 (2026). https://doi.org/10.5281/zenodo.23382386

## License

MIT.
