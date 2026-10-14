# Kelvin Zero

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
| `kelvinzero.viz` | a self-contained 3-D viewer (plotly) |
| `kelvinzero.reference` | reference values for cross-checking other implementations |

## Install

```bash
pip install kelvinzero            # model only (NumPy)
pip install "kelvinzero[figures]" # + matplotlib, for the figures
pip install "kelvinzero[viz]"     # + plotly, for the local 3-D viewer
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
kelvinzero viz --alt 800 --raan 270 -o viewer.html   # 3-D viewer with a year slider (open in a browser)
kelvinzero reference reference.json         # values to test another implementation against
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

`pytest` checks the closed-form eclipse fraction against brute-force cylindrical-shadow sweeps,
the USNO ephemeris against the NOAA/Spencer series, frame conventions (an exact SSO is frozen in
MSSI, the Sun is west of the mean Sun in November, Ω = 90° ⇒ LTAN 18:00), the region maps against
the β-angle picture, and the headline numbers of the paper. `kelvinzero reference` writes the
values that the visualizer's JavaScript model is tested against.

## License

MIT.
