/** @typedef {import('./types.js').Model} Model */

import { makeId } from '../utils/id.js'
import { deepClone } from '../utils/json.js'
import { ORBIT_FLAGS_OFF } from './presets.js'

/** @param {Model} model @param {string} viewId @returns {Model} */
export function setActiveViewId(model, viewId) {
  return { ...model, activeViewId: viewId }
}

/** @param {Model} model @returns {Model} */
export function addView(model) {
  const customViews = model.views.filter((v) => !v.locked)
  const nextIndex = customViews.length + 1
  const id = makeId('v')
  const baseView = model.views.find((v) => v.id === model.activeViewId) ?? model.views[0]
  const newView = {
    id,
    name: `Custom View ${nextIndex}`,
    locked: false,
    config: deepClone(baseView.config),
    savedConfig: deepClone(baseView.config),
  }

  return {
    ...model,
    views: [newView, ...model.views],
    activeViewId: id,
  }
}

/** @param {Model} model @param {string} viewId @returns {Model} */
export function deleteView(model, viewId) {
  const view = model.views.find((v) => v.id === viewId)
  if (!view || view.locked) return model
  const nextViews = model.views.filter((v) => v.id !== viewId)
  const nextActiveViewId = model.activeViewId === viewId ? nextViews[0]?.id ?? model.activeViewId : model.activeViewId
  return {
    ...model,
    views: nextViews,
    activeViewId: nextActiveViewId,
  }
}

/** @param {Model} model @param {string} viewId @returns {Model} */
export function resetViewToSaved(model, viewId) {
  return {
    ...model,
    views: model.views.map((v) => (v.id === viewId && v.savedConfig ? { ...v, config: deepClone(v.savedConfig) } : v)),
  }
}

/** @param {Model} model @param {string} orbitId @returns {Model} */
export function deleteOrbit(model, orbitId) {
  const orbit = model.orbits.find((o) => o.id === orbitId)
  if (!orbit || orbit.locked) return model
  const nextOrbits = model.orbits.filter((o) => o.id !== orbitId)
  const nextActiveOrbitId = model.activeOrbitId === orbitId ? nextOrbits[0]?.id ?? model.activeOrbitId : model.activeOrbitId

  const nextViews = model.views.map((v) => {
    const nextOrbitFlags = { ...v.config.display.orbits }
    delete nextOrbitFlags[orbitId]

    const nextSavedOrbitFlags = v.savedConfig ? { ...v.savedConfig.display.orbits } : null
    if (nextSavedOrbitFlags) delete nextSavedOrbitFlags[orbitId]

    return {
      ...v,
      config: {
        ...v.config,
        display: {
          ...v.config.display,
          orbits: nextOrbitFlags,
        },
      },
      savedConfig: v.savedConfig
        ? {
            ...v.savedConfig,
            display: {
              ...v.savedConfig.display,
              orbits: nextSavedOrbitFlags,
            },
          }
        : v.savedConfig,
    }
  })

  return {
    ...model,
    orbits: nextOrbits,
    activeOrbitId: nextActiveOrbitId,
    views: nextViews,
  }
}

/** @param {Model} model @param {string} orbitId @returns {Model} */
export function setActiveOrbitId(model, orbitId) {
  return { ...model, activeOrbitId: orbitId }
}

/** @param {Model} model @returns {Model} */
export function addOrbit(model) {
  const nextIndex = model.orbits.length + 1
  const id = makeId('o')
  const base = model.orbits[0]
  const newOrbit = {
    id,
    name: `Orbit ${nextIndex}`,
    locked: false,
    altitudeKm: base.altitudeKm,
    inclinationDeg: base.inclinationDeg,
    raanOffsetDeg: base.raanOffsetDeg,
    initialMeanAnomalyDeg: base.initialMeanAnomalyDeg,
  }

  const defaultOrbitDisplay = {
    groundTrack: true,
    satelliteMarker: true,
    orbitalPlaneRing: false,
    eclipseSegments: false,
    raanVector: false,
    eclipseRegions: false,
  }

  const views = model.views.map((v) => {
    const nextConfig = {
      ...v.config,
      display: {
        ...v.config.display,
        orbits: { ...v.config.display.orbits, [id]: { ...defaultOrbitDisplay } },
      },
    }

    const nextSaved = v.savedConfig
      ? {
          ...v.savedConfig,
          display: {
            ...v.savedConfig.display,
            orbits: { ...v.savedConfig.display.orbits, [id]: { ...defaultOrbitDisplay } },
          },
        }
      : undefined

    return { ...v, config: nextConfig, savedConfig: nextSaved }
  })

  return {
    ...model,
    orbits: [...model.orbits, newOrbit],
    activeOrbitId: id,
    views,
  }
}

/** @param {Model} model @param {string} orbitId @param {Partial<import('./types.js').Orbit>} patch @returns {Model} */
export function setOrbitParams(model, orbitId, patch) {
  return {
    ...model,
    orbits: model.orbits.map((o) => (o.id === orbitId ? { ...o, ...patch } : o)),
  }
}

/** @param {Model} model @param {Partial<import('./types.js').ViewConfig>} patch @returns {Model} */
export function setActiveViewConfig(model, patch) {
  return {
    ...model,
    views: model.views.map((v) => (v.id === model.activeViewId ? { ...v, config: { ...v.config, ...patch } } : v)),
  }
}

/** @param {Model} model @param {string} orbitId @param {string} flagKey @returns {Model} */
export function togglePerOrbitFlag(model, orbitId, flagKey) {
  const view = model.views.find((v) => v.id === model.activeViewId)
  if (!view) return model
  const orbitDisplay = view.config.display.orbits[orbitId]
  if (!orbitDisplay) return model
  const curr = !!orbitDisplay[flagKey]

  return {
    ...model,
    views: model.views.map((v) =>
      v.id === model.activeViewId
        ? {
            ...v,
            config: {
              ...v.config,
              display: {
                ...v.config.display,
                orbits: {
                  ...v.config.display.orbits,
                  [orbitId]: { ...v.config.display.orbits[orbitId], [flagKey]: !curr },
                },
              },
            },
          }
        : v,
    ),
  }
}

/** @param {Model} model @param {string} group @param {string} key @returns {Model} */
export function toggleDisplayFlag(model, group, key) {
  const view = model.views.find((v) => v.id === model.activeViewId)
  if (!view) return model
  const raw = view.config.display[group][key]
  const curr = key === 'labels' ? raw !== false : !!raw

  return {
    ...model,
    views: model.views.map((v) =>
      v.id === model.activeViewId
        ? {
            ...v,
            config: {
              ...v.config,
              display: {
                ...v.config.display,
                [group]: { ...v.config.display[group], [key]: !curr },
              },
            },
          }
        : v,
    ),
  }
}

/**
 * Build a full view config from a preset for the model's current orbits.
 * @param {Model} model @param {object} preset
 */
export function configFromPreset(model, preset) {
  const orbits = {}
  for (const o of model.orbits) orbits[o.id] = { ...ORBIT_FLAGS_OFF, ...(preset.orbit ?? {}) }
  return {
    toggles: { coordinateFrame: preset.coordinateFrame ?? 'MSSI', earthTextureMode: preset.earthTextureMode ?? 'realistic', viewMode: preset.viewMode ?? 'geo' },
    display: {
      orbits,
      vectors: { analemma: false, subSolarPoint: false, sunDirectionLine: false, terminator: false, ...(preset.vectors ?? {}) },
      referenceOverlays: { latLonGrid: false, otherFrameAxes: false, framePlanes: false, labels: true, ...(preset.referenceOverlays ?? {}) },
    },
  }
}

/**
 * Activate a preset through the views system: reuse the view with the same
 * name (resetting its config to the preset) or create it.
 * @param {Model} model @param {object} preset @returns {Model}
 */
export function applyViewPreset(model, preset) {
  const config = configFromPreset(model, preset)
  const existing = model.views.find((v) => v.name === preset.name)
  if (existing) {
    return {
      ...model,
      activeViewId: existing.id,
      views: model.views.map((v) => (v.id === existing.id ? { ...v, config, savedConfig: deepClone(config) } : v)),
    }
  }
  const id = makeId('v')
  const view = { id, name: preset.name, locked: false, config, savedConfig: deepClone(config) }
  return { ...model, views: [view, ...model.views], activeViewId: id }
}
