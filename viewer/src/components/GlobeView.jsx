import { useEffect, useRef } from 'react'
import { OrbitScene } from '../scene/OrbitScene.js'

// The scene is created once and kept across unmounts (tab switches): its WebGL context, textures and
// camera survive, so coming back to the visualizer is instant and nothing reloads.
let keptScene = null

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
    let scene = keptScene
    if (scene) scene.attach(el)
    else scene = keptScene = new OrbitScene(el)
    sceneRef.current = scene
    window.__k0scene = scene
    const ro = new ResizeObserver(() => scene.resize())
    ro.observe(el)
    return () => {
      ro.disconnect()
      scene.detach()
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
