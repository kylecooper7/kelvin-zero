export const helpContent = {
  calculate: {
    title: 'Derived quantities',
    body:
      'Live values for the active orbit: orbital period; local time of the ascending node (LTAN = 12:00 + Ω/15°); the β angle (elevation of the Sun above the orbit plane) at the current timeline day; the fraction of the current orbit spent in Earth’s cylindrical shadow; the |β| threshold above which no eclipse occurs (asin R/(R+h)); the β range and mean sun exposure over one year; and α, the sunlit-cone half-angle used by the eclipse-region map.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-eclipse',
  },
  altitudeKm: {
    title: 'Altitude',
    body:
      'Height of the circular orbit above the WGS84 equatorial radius (6378.137 km). Altitude and inclination are linked by the sun-synchronous condition, so changing one updates the other. Altitude also sets the period, the eclipse-free β threshold and the eclipse-region cone α = 90° + acos(R/(R+h)).',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-sso',
  },
  inclinationDeg: {
    title: 'Inclination',
    body:
      'Angle between the orbit plane and the equator. Sun-synchronous orbits are retrograde (i > 90°): the J2 nodal precession −(3/2) n J2 (R/a)² cos i must equal the mean Sun’s eastward rate of 0.9856°/day. The value shown is the exact closed-form solution for the current altitude.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-sso',
  },
  raanOffsetDeg: {
    title: 'RAAN offset from the mean Sun (Ω)',
    body:
      'Right ascension of the ascending node measured in the MSSI frame, i.e. from the mean-Sun direction. Ω = 0° puts the ascending node at local noon (noon–midnight orbit, maximum eclipse); Ω = 90° or 270° gives a dawn–dusk orbit (LTAN 18:00 / 06:00, minimum eclipse). For an exact SSO this angle is constant all year.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-sso',
  },
  initialMeanAnomalyDeg: {
    title: 'Initial mean anomaly',
    body: 'Argument of latitude of the satellite at day 0 (circular orbit, so mean anomaly = true anomaly = angle from the ascending node). Only moves the satellite marker along the ring.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-sso',
  },
  coordinateFrame: {
    title: 'Coordinate frame',
    body:
      'ECI (Earth-Centred Inertial, J2000): x toward the vernal equinox, nothing rotates with time; SSO planes visibly precess (0.9856°/day) and the Sun circles the sky once a year along the ecliptic. MSSI (Mean-Sun Synchronous Inertial): ECI rotated about the spin axis by the mean solar longitude, so x always points at the mean Sun. SSO planes are frozen, and the true Sun traces the analemma around +x.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-frames',
  },
  viewMode: {
    title: 'Viewpoint',
    body:
      'Earth-centred: the usual view, drawn in the selected frame (ECI or MSSI). Sun-centred: the Sun sits at the origin and the Earth travels its real orbit (shape, orientation and timing from the same ephemeris; perihelion in early January) with month and season markers. The Earth, its frames and orbits are enlarged about 1000× and the Sun shrunk so everything is visible — the orbit itself is to scale. Watch the amber MSSI x axis keep pointing at the Sun while the indigo ECI axes stay parallel to the fixed vernal-equinox line, and a sun-synchronous ring keep its angle to the Sun all year.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-frames',
  },
  earthTextureMode: {
    title: 'Earth',
    body:
      'Realistic: the globe spins with Greenwich sidereal time (GMST) — one turn per solar day in MSSI (365.24 per year), one per sidereal day in ECI (366.24); at day 0 (J2000 epoch, 12:00 UT) Greenwich sits under the mean Sun. At year-scale playback speeds that is many turns per second, so the spin strobes; use the “1 d / 6 s” playback speed to watch a rotation. Still: daily rotation is ignored and the texture stays fixed in the display frame. Hidden: the globe is replaced by a faint ghost sphere so the coordinate frames, planes and orbits can be seen through it.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-frames',
  },
  groundTrack: {
    title: 'Ground track',
    body: 'Projection of the orbit onto the sphere in the display frame (the sub-satellite great circle). In Still mode this is the path traced on the surface; with eclipse segments on, it is coloured by sunlight/shadow.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-sso',
  },
  satelliteMarker: {
    title: 'Satellite marker',
    body: 'Current satellite position at the orbit altitude, with a tether to the sub-satellite point. Moves with the timeline (one revolution per orbital period).',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-sso',
  },
  orbitalPlaneRing: {
    title: 'Orbital plane ring',
    body: 'The full circular orbit drawn in 3-D at radius R + h — the “SSO plane ring” of the notebooks. Frozen in MSSI, precessing in ECI.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-sso',
  },
  eclipseSegments: {
    title: 'Eclipse segments',
    body: 'Colours the ring and ground track by the cylindrical-shadow test at the current time: orbit colour = sunlit, red = in Earth’s shadow (night side and within one Earth radius of the Sun–Earth axis).',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-eclipse',
  },
  raanVector: {
    title: 'RAAN vector',
    body: 'Dashed line from Earth’s centre to the ascending node on the equatorial plane. In MSSI its angle from +x is the RAAN offset Ω; the LTAN is 12:00 + Ω/15°.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-sso',
  },
  eclipseRegions: {
    title: 'Eclipse-time regions',
    body:
      'Classifies every direction on the sphere (in MSSI) by whether a point of this orbit’s shell in that direction is sunlit at some/all/no time of year: purple = always eclipsed, orange = sometimes, green = never. The cone half-angle α = 90° + acos(R/(R+h)) depends on altitude. ∂U (purple line) bounds the ever-sunlit set, ∂I (orange line) bounds the always-sunlit set. An orbit is eclipse-free all year iff its ring stays inside the green region.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-regions',
  },
  analemma: {
    title: 'Analemma',
    body:
      'Locus of the sub-solar point over one year in the MSSI frame: a figure-8 of ±23.44° in latitude and ±4° in longitude (longitude = −Equation of Time), caused by Earth’s orbital eccentricity and axial tilt. In ECI the same locus is simply the ecliptic (dashed), while the figure-8 drawn is the MSSI curve carried along with the mean Sun.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-sun',
  },
  subSolarPoint: {
    title: 'Sub-solar point',
    body: 'Where the true Sun is directly overhead at the current timeline day. It always lies on the analemma.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-sun',
  },
  sunDirectionLine: {
    title: 'Sun direction line',
    body: 'Ray from Earth’s centre toward the true Sun (USNO low-precision ephemeris). The scene’s lighting comes from this direction.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-sun',
  },
  terminator: {
    title: 'Terminator',
    body: 'Day/night boundary: the great circle perpendicular to the Sun direction.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-eclipse',
  },
  latLonGrid: {
    title: 'Lat/Lon grid',
    body: 'Reference graticule fixed in the display frame (20° parallels, 30° meridians). The brighter meridian is the frame’s x axis: vernal equinox in ECI, mean Sun in MSSI.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-frames',
  },
  framePlanes: {
    title: 'Frame planes',
    body: 'Draws the coordinate planes through Earth’s centre, colour-coded by frame: the shared equatorial plane (xy) in grey, the ECI xz/yz planes in indigo and the MSSI xz/yz planes in amber (the MSSI xz-plane is the noon–midnight meridian plane, the yz-plane the dawn–dusk plane). Edges are solid for the displayed frame and dashed for the other. Hide the Earth to see them clearly.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-frames',
  },
  labels: {
    title: 'Labels',
    body: 'Shows or hides all text labels in the 3-D scene. Labels keep a constant size on screen, so when you zoom out the secondary ones (axis y/z, planes, nodes, calendar markers) hide automatically and only the essential ones (orbit names, Sun) remain; zoom in to see the rest.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-frames',
  },
  otherFrameAxes: {
    title: 'Frame axes',
    body: 'Shows the x and y axes of both frames and the shared z (spin) axis: solid for the displayed frame, dashed for the other one. In MSSI the vernal-equinox axis turns once a year; in ECI the mean-Sun axis does.',
    learnMoreLabel: 'Whitepaper',
    learnMoreUrl: '#wp-frames',
  },
}
