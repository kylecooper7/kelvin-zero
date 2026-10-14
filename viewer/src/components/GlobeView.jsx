import { useEffect, useRef } from 'react'
import { OrbitScene } from '../scene/OrbitScene.js'

const DEFAULT_VECTORS = { analemma: false, subSolarPoint: false, sunDirectionLine: false, terminator: false }
const DEFAULT_OVERLAYS = { latLonGrid: false, otherFrameAxes: false }

/**
 * Thin React wrapper around OrbitScene (src/scene/OrbitScene.js).
 * All rendering state lives in the scene object; React only forwards props.
 */
export function GlobeView({
  coordinateFrame = 'MSSI',
  earthTextureMode = 'realistic',
  orbits = [],
  displayOrbits = {},
  timeDays = 0,
  vectors = DEFAULT_VECTORS,
  referenceOverlays = DEFAULT_OVERLAYS,
  cameraRequest = null,
  viewMode = 'geo',
}) {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return undefined
    const scene = new OrbitScene(el)
    sceneRef.current = scene
    if (import.meta.env.DEV) window.__k0scene = scene
    const ro = new ResizeObserver(() => scene.resize())
    ro.observe(el)
    return () => {
      ro.disconnect()
      if (window.__k0scene === scene) delete window.__k0scene
      scene.dispose()
      sceneRef.current = null
    }
  }, [])

  useEffect(() => {
    sceneRef.current?.setProps({ coordinateFrame, earthTextureMode, viewMode, orbits, displayOrbits, timeDays, vectors, referenceOverlays })
  }, [coordinateFrame, earthTextureMode, viewMode, orbits, displayOrbits, timeDays, vectors, referenceOverlays])

  useEffect(() => {
    if (cameraRequest) sceneRef.current?.setCamera(cameraRequest)
  }, [cameraRequest])

  return <div ref={containerRef} className="h-full w-full" />
}
