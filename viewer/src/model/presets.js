// Named presets shared by the sidebar, the view chips and the whitepaper's
// "open in viewer" links. A view preset is a complete display configuration;
// it is applied through the views system (see actions.applyViewPreset).

export const ORBIT_FLAGS_OFF = {
  groundTrack: false,
  satelliteMarker: false,
  orbitalPlaneRing: false,
  eclipseSegments: false,
  raanVector: false,
  eclipseRegions: false,
}

export const VIEW_PRESETS = {
  overview: {
    name: 'Overview',
    coordinateFrame: 'MSSI',
    earthTextureMode: 'still',
    orbit: { satelliteMarker: true, orbitalPlaneRing: true },
    vectors: { analemma: true, subSolarPoint: true, sunDirectionLine: true, terminator: false },
    referenceOverlays: { latLonGrid: true, otherFrameAxes: false, framePlanes: false },
  },
  eclipse: {
    name: 'Eclipse',
    coordinateFrame: 'MSSI',
    earthTextureMode: 'still',
    orbit: { orbitalPlaneRing: true, eclipseSegments: true, eclipseRegions: true, raanVector: true },
    vectors: { analemma: true, subSolarPoint: true, sunDirectionLine: true, terminator: true },
    referenceOverlays: { latLonGrid: false, otherFrameAxes: false },
  },
  frames: {
    name: 'Frames',
    coordinateFrame: 'ECI',
    earthTextureMode: 'still',
    orbit: { orbitalPlaneRing: true, raanVector: true, satelliteMarker: true },
    vectors: { analemma: true, subSolarPoint: true, sunDirectionLine: true, terminator: false },
    referenceOverlays: { latLonGrid: true, otherFrameAxes: true, framePlanes: true },
  },
  helio: {
    name: 'Sun-centred',
    viewMode: 'helio',
    coordinateFrame: 'MSSI',
    earthTextureMode: 'realistic',
    orbit: { orbitalPlaneRing: true, raanVector: true },
    vectors: { analemma: false, subSolarPoint: true, sunDirectionLine: true, terminator: false },
    referenceOverlays: { latLonGrid: true, otherFrameAxes: true, framePlanes: true },
  },
  planes: {
    name: 'Frame planes',
    coordinateFrame: 'MSSI',
    earthTextureMode: 'still',
    orbit: { orbitalPlaneRing: true, satelliteMarker: true },
    vectors: { sunDirectionLine: true },
    referenceOverlays: { latLonGrid: false, otherFrameAxes: true, framePlanes: true },
  },
  sun: {
    name: 'Sun & analemma',
    coordinateFrame: 'MSSI',
    earthTextureMode: 'still',
    orbit: { groundTrack: true },
    vectors: { analemma: true, subSolarPoint: true, sunDirectionLine: true, terminator: true },
    referenceOverlays: { latLonGrid: true, otherFrameAxes: false },
  },
}

/** Orbit parameter presets (inclination is derived from altitude by the caller). */
export const ORBIT_PRESETS = [
  { id: 'noon', group: 'Reference orbits', name: 'Noon–midnight, 550 km', altitudeKm: 550, raanOffsetDeg: 0 },
  { id: 'dawn800', group: 'Reference orbits', name: 'Dawn–dusk, 800 km (LTAN 06:00)', altitudeKm: 800, raanOffsetDeg: 270 },
  { id: 'dusk800', group: 'Reference orbits', name: 'Dawn–dusk, 800 km (LTAN 18:00)', altitudeKm: 800, raanOffsetDeg: 90 },
  { id: 'kz1500', group: 'Reference orbits', name: 'Kelvin Zero, 1500 km (eclipse-free)', altitudeKm: 1500, raanOffsetDeg: 270 },
  { id: 'default', group: 'Reference orbits', name: 'Near dawn–dusk, 800 km (LTAN 05:20)', altitudeKm: 800, raanOffsetDeg: 260 },
  // Announced orbital-computing systems, at the altitudes filed or published by October 2026 (paper, Table 5).
  // Starcloud's filing states a nominal 06:00 crossing (LTAN 06:00); the others give no local time and dawn–dusk (LTAN 18:00) is assumed.
  { id: 'suncatcher', group: 'Announced systems (as filed, 2026)', name: 'Google Project Suncatcher, 650 km', altitudeKm: 650, raanOffsetDeg: 90 },
  { id: 'starcloud600', group: 'Announced systems (as filed, 2026)', name: 'Starcloud, 600 km shell (LTAN 06:00, as filed)', altitudeKm: 600, raanOffsetDeg: 270 },
  { id: 'starcloud850', group: 'Announced systems (as filed, 2026)', name: 'Starcloud, 850 km shell (LTAN 06:00, as filed)', altitudeKm: 850, raanOffsetDeg: 270 },
  { id: 'spacex500', group: 'Announced systems (as filed, 2026)', name: 'SpaceX Orbital Data Center, 500 km shell', altitudeKm: 500, raanOffsetDeg: 90 },
  { id: 'spacex1000', group: 'Announced systems (as filed, 2026)', name: 'SpaceX Orbital Data Center, 1000 km shell', altitudeKm: 1000, raanOffsetDeg: 90 },
  { id: 'spacex1500', group: 'Announced systems (as filed, 2026)', name: 'SpaceX Orbital Data Center, 1500 km shell (eclipse-free)', altitudeKm: 1500, raanOffsetDeg: 90 },
  // Flying dawn–dusk missions (paper, Table 4 and references 8–10; eoPortal for the radar missions).
  { id: 'terrasarx', group: 'Flying missions', name: 'TerraSAR-X, 514 km (LTAN 18:00)', altitudeKm: 514, raanOffsetDeg: 90 },
  { id: 'iris', group: 'Flying missions', name: 'IRIS, 645 km (LTAN 06:00)', altitudeKm: 645, raanOffsetDeg: 270 },
  { id: 'hinode', group: 'Flying missions', name: 'Hinode, 680 km (LTAN 18:00)', altitudeKm: 680, raanOffsetDeg: 90 },
  { id: 'sentinel1', group: 'Flying missions', name: 'Sentinel-1, 693 km (LTAN 18:00)', altitudeKm: 693, raanOffsetDeg: 90 },
  { id: 'proba2', group: 'Flying missions', name: 'PROBA-2, 725 km (LTAN 06:00)', altitudeKm: 725, raanOffsetDeg: 270 },
  { id: 'radarsat2', group: 'Flying missions', name: 'RADARSAT-2, 798 km (LTAN 18:00)', altitudeKm: 798, raanOffsetDeg: 90 },
]

/** Camera positions in scene units (Earth radius = 1); the scene normalises distance. */
/** Camera presets for the Sun-centred view (handled by the scene). */
export const HELIO_CAMERA_PRESETS = {
  follow: { label: 'Follow Earth' },
  above: { label: 'Above ecliptic' },
  side: { label: 'Along ecliptic' },
}

export const CAMERA_PRESETS = {
  sun: { label: 'Sun side', x: 3.0, y: -1.4, z: 1.0 },
  antisun: { label: 'Anti-Sun', x: -3.2, y: -1.2, z: 0.9 },
  pole: { label: 'North pole', x: 0.4, y: -0.4, z: 3.4 },
  side: { label: 'Dawn side', x: 0.2, y: -3.3, z: 0.8 },
}
