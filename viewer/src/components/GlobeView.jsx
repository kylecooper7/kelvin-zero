import { useEffect, useRef, useState } from 'react'
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
  // nothing is shown until the Earth is textured and drawn — a quiet loader instead of a white sphere
  const [ready, setReady] = useState(() => !!keptScene?.texturesReady)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return undefined
    let scene = keptScene
    if (scene) scene.attach(el)
    else scene = keptScene = new OrbitScene(el)
    sceneRef.current = scene
    window.__k0scene = scene
    scene.whenReady(() => setReady(true))
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

  return (
    <div className="relative h-full w-full">
      <div ref={containerRef} className={`h-full w-full transition-opacity duration-500 ${ready ? 'opacity-100' : 'opacity-0'}`} />
      {!ready ? (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/60">
          <div className="h-7 w-7 animate-spin rounded-full border-2 border-white/20 border-t-white/70" />
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em]">Loading Earth</div>
        </div>
      ) : null}
    </div>
  )
}
