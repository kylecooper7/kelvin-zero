/** @typedef {import('./types.js').Model} Model */

import { deepClone } from '../utils/json.js'
import { clampNumber, roundTo } from '../utils/number.js'
import { inclinationFromAltitude, I_MAX, I_MIN } from './orbit.js'
import { VIEW_PRESETS } from './presets.js'
import { configFromPreset } from './actions.js'

/** @returns {Model} */
export function createInitialModel() {
  const o1 = {
    id: 'o1',
    name: 'Orbit 1',
    locked: true,
    altitudeKm: 1000,
    inclinationDeg: roundTo(clampNumber(inclinationFromAltitude(1000), I_MIN, I_MAX), 2),
    raanOffsetDeg: 3,
    initialMeanAnomalyDeg: 3,
  }

  const defaultView = {
    id: 'v_default',
    name: 'Default View',
    locked: true,
    config: {
      toggles: {
        coordinateFrame: 'MSSI',
        earthTextureMode: 'realistic',
        viewMode: 'geo',
      },
      display: {
        orbits: {
          [o1.id]: {
            groundTrack: true,
            satelliteMarker: true,
            orbitalPlaneRing: false,
            eclipseSegments: false,
            raanVector: false,
            eclipseRegions: false,
          },
        },
        vectors: { analemma: false, subSolarPoint: true, sunDirectionLine: false, terminator: false },
        referenceOverlays: { latLonGrid: false, otherFrameAxes: false, framePlanes: false, labels: true },
      },
    },
    savedConfig: null,
  }
  defaultView.savedConfig = deepClone(defaultView.config)

  const base = { orbits: [o1] }
  const presetViews = ['overview', 'eclipse', 'frames', 'helio'].map((key) => {
    const preset = VIEW_PRESETS[key]
    const config = configFromPreset(base, preset)
    return { id: `v_${key}`, name: preset.name, locked: true, config, savedConfig: deepClone(config) }
  })

  return {
    orbits: [o1],
    activeOrbitId: o1.id,
    views: [...presetViews, defaultView],
    activeViewId: presetViews[0].id,
  }
}
