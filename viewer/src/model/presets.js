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
  { id: 'noon', name: 'Noon–midnight, 550 km', altitudeKm: 550, raanOffsetDeg: 0 },
  { id: 'dawn800', name: 'Dawn–dusk, 800 km (LTAN 06:00)', altitudeKm: 800, raanOffsetDeg: 270 },
  { id: 'dusk800', name: 'Dawn–dusk, 800 km (LTAN 18:00)', altitudeKm: 800, raanOffsetDeg: 90 },
  { id: 'kz1500', name: 'Kelvin Zero, 1500 km (eclipse-free)', altitudeKm: 1500, raanOffsetDeg: 270 },
  { id: 'default', name: 'Near dawn–dusk, 800 km (LTAN 05:20)', altitudeKm: 800, raanOffsetDeg: 260 },
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
