/**
 * @typedef {Object} Orbit
 * @property {string} id
 * @property {string} name
 * @property {boolean} locked
 * @property {number} altitudeKm - Orbital altitude in km (100–2000)
 * @property {number} inclinationDeg - Orbital inclination in degrees (95.99–104.89)
 * @property {number} raanOffsetDeg - RAAN offset in degrees (0–360)
 * @property {number} initialMeanAnomalyDeg - Initial mean anomaly in degrees (0–360)
 */

/**
 * @typedef {Object} PerOrbitDisplay
 * @property {boolean} groundTrack
 * @property {boolean} satelliteMarker
 * @property {boolean} orbitalPlaneRing
 * @property {boolean} eclipseSegments
 * @property {boolean} raanVector
 * @property {boolean} eclipseRegions
 */

/**
 * @typedef {Object} DisplayConfig
 * @property {Record<string, PerOrbitDisplay>} orbits - Per-orbit display toggles
 * @property {{ analemma: boolean, subSolarPoint: boolean, sunDirectionLine: boolean, terminator: boolean }} vectors
 * @property {{ latLonGrid: boolean, otherFrameAxes: boolean, framePlanes: boolean, labels: boolean }} referenceOverlays
 */

/**
 * @typedef {Object} ViewToggles
 * @property {'ECI' | 'MSSI' | 'SCI'} coordinateFrame
 * @property {'realistic' | 'still' | 'hidden'} [earthTextureMode]
 * @property {'geo' | 'helio'} [viewMode] - Earth-centred or Sun-centred scene
 */

/**
 * @typedef {Object} ViewConfig
 * @property {ViewToggles} toggles
 * @property {DisplayConfig} display
 */

/**
 * @typedef {Object} View
 * @property {string} id
 * @property {string} name
 * @property {boolean} locked
 * @property {ViewConfig} config
 * @property {ViewConfig | null} savedConfig
 */

/**
 * @typedef {Object} Model
 * @property {Orbit[]} orbits
 * @property {string} activeOrbitId
 * @property {View[]} views
 * @property {string} activeViewId
 */

export {}
