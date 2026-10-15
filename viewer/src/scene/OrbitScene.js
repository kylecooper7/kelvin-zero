// Three.js scene for the orbit visualizer (framework-free; GlobeView.jsx wraps it).
//
// Scene units: 1 = Earth radius. Physics coordinates are used directly
// (z = spin axis, x = display-frame reference direction); the camera's up
// vector is +z.
//
// Scene graph (rotations are about +z):
//   root           display frame (static) — lat/lon grid lives here
//   ├─ eciGroup    rotation −frameAngle(frame, d)      — orbits, Sun, ecliptic, ECI axis
//   │   └─ orbit groups   rotation Ω_ECI(d)            — ring, ground track, satellite, RAAN vector
//   ├─ mssiGroup   rotation L(d) − frameAngle          — analemma, eclipse regions, MSSI axis
//   └─ earthGroup  rotation GMST(d) − frameAngle (realistic) or 0 (still) — textured Earth
//
// Everything time-dependent is a rotation or a small per-frame update; all
// geometry is built in its own natural frame once.

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'

import { DEG, R_EARTH, TWO_PI } from '../model/constants.js'
import { frameAngle, gmst, rotateZ } from '../model/frames.js'
import { computeAnalemmaMSSI, computeEclipticECI, earthHeliocentricEcliptic, earthOrbitEcliptic, meanSunLongitude, sunDirectionECI, yearMarkers } from '../model/sun.js'
import { alphaDegForAltitude, argumentOfLatitude, planePoint, raanECI } from '../model/orbit.js'
import { REGION_ALWAYS_ECLIPSE, REGION_NO_ECLIPSE, classifyRegions, computeSunDotExtrema, regionContours } from '../model/regions.js'
import { ORBITS, SCENE } from '../theme/palette.js'

export const ORBIT_COLORS = ORBITS.map((o) => o.hex)
export const COLORS = {
  analemma: SCENE.analemma,
  ecliptic: SCENE.ecliptic,
  sun: SCENE.sun,
  terminator: SCENE.terminator,
  grid: SCENE.grid,
  emiAxis: SCENE.emiAxis,
  mssiAxis: SCENE.mssiAxis,
  eclipsed: SCENE.eclipsed,
  dU: SCENE.dU,
  dI: SCENE.dI,
}
const REGION_RGBA = {
  [REGION_ALWAYS_ECLIPSE]: [...SCENE.regionAlways, 150],
  1: [...SCENE.regionSome, 115],
  [REGION_NO_ECLIPSE]: [...SCENE.regionNever, 50],
}

const R_GRID = 1.004
const R_TRACK = 1.008
const R_ANALEMMA = 1.014
const R_REGION = 1.012
const R_CONTOUR = 1.022
const SUN_LINE_LENGTH = 2.4
const TURN_ARC_POINTS = 64
const TURN_ARC_COLOR = '#db2777'
// Sun-centred view: Earth's orbit semi-major axis in scene units and the Earth assembly scale.
// Real scale would be 1 AU = 23 455 R_E; here 1 AU = AU_SCENE / EARTH_SCALE ≈ 22 R_E (Earth ≈ 1 000× enlarged).
const AU_SCENE = 10
const EARTH_SCALE = 0.45
const SUN_RADIUS_SCENE = 0.5

const BASE = import.meta.env?.BASE_URL ?? '/'
// textures are served with a long immutable cache; the build id in the URL is what invalidates them
const TEX_V = typeof __BUILD_ID__ !== 'undefined' ? `?v=${__BUILD_ID__}` : ''
// Print/paper mode: white ground, dark reference lines and labels, no stars. Enabled with ?paper in the URL.
export const PAPER = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('paper')
// Cover-image capture (?cover): the normal dark look with brighter stars and a brighter Earth.
export const COVER = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('cover')

let sharedExtrema = null
function getExtrema() {
  if (!sharedExtrema) sharedExtrema = computeSunDotExtrema({ width: 721, height: 361, sunSamples: 366 })
  return sharedExtrema
}

// Every label sprite registers here so the scene can apply the Labels toggle and distance culling.
const ALL_LABELS = new Set()
// tier 0: always shown; tier 1/2: hidden beyond `far[tier]` scene units from the camera.
function makeLabelSprite(text, color, { size = 0.05, tier = 1, far = [Infinity, 9, 6] } = {}) {
  if (PAPER) size *= 1.2
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 128
  const ctx = canvas.getContext('2d')
  ctx.font = '500 34px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
  if ('letterSpacing' in ctx) ctx.letterSpacing = '0.5px'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const w = Math.min(500, ctx.measureText(text).width + 36)
  const x0 = 256 - w / 2
  ctx.fillStyle = PAPER ? 'rgba(255, 255, 255, 0.92)' : 'rgba(6, 10, 24, 0.62)'
  ctx.beginPath()
  ctx.roundRect(x0, 36, w, 56, 12)
  ctx.fill()
  ctx.strokeStyle = PAPER ? 'rgba(15,23,42,0.25)' : 'rgba(255,255,255,0.10)'
  ctx.lineWidth = 2
  ctx.stroke()
  ctx.fillStyle = PAPER ? '#0f172a' : color
  ctx.fillText(text, 256, 65)
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false, sizeAttenuation: false })
  const sprite = new THREE.Sprite(mat)
  // sizeAttenuation=false: scale is in clip-space units, so labels keep a constant on-screen size
  sprite.scale.set(size * 4, size, 1)
  sprite.renderOrder = 50
  sprite.userData.label = { tier, far, text }
  ALL_LABELS.add(sprite)
  return sprite
}

export class OrbitScene {
  constructor(container) {
    this.container = container
    this.lineMaterials = new Set()
    this.props = null
    this.orbitVisuals = new Map()
    this.disposed = false

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)
    renderer.domElement.style.display = 'block'
    this.renderer = renderer

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.05, 200)
    this.camera.up.set(0, 0, 1)
    this.camera.position.set(3.0, -1.4, 1.0).normalize().multiplyScalar(4.2)
    this.camera.lookAt(0, 0, 0)

    this.controls = new OrbitControls(this.camera, renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.08
    this.controls.enablePan = false
    this.controls.minDistance = 1.3
    this.controls.maxDistance = 12
    this.controls.rotateSpeed = 0.6

    this.eciGroup = new THREE.Group()
    this.mssiGroup = new THREE.Group()
    this.earthGroup = new THREE.Group()
    this.displayGroup = new THREE.Group()
    // Everything geocentric lives in one assembly so the Sun-centred view can scale and move it as a unit.
    this.earthAssembly = new THREE.Group()
    this.earthAssembly.add(this.eciGroup, this.mssiGroup, this.earthGroup, this.displayGroup)
    this.helioRoot = new THREE.Group()
    this.helioRoot.visible = false
    this.scene.add(this.earthAssembly, this.helioRoot)
    this.viewMode = 'geo'
    this.helioCamera = 'follow'
    this.lastEarthPos = new THREE.Vector3()

    // Print mode is lit almost flat so the night side still reads as a map on white paper.
    this.scene.add(new THREE.AmbientLight(0xffffff, PAPER ? 3.2 : COVER ? 1.25 : 0.8))
    this.sunLight = new THREE.DirectionalLight(0xffffff, PAPER ? 1.1 : COVER ? 3.0 : 2.4)
    this.sunLight.position.set(1, 0, 0)
    this.eciGroup.add(this.sunLight)
    this.scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x2a2f45, PAPER ? 0.8 : COVER ? 0.6 : 0.35))

    if (!PAPER) this.#buildStars()
    this.#buildEarth()
    if (!PAPER) this.#buildAtmosphere()
    this.#buildGrid()
    this.#buildFrameAxes()
    this.#buildFramePlanes()
    this.#buildSunObjects()
    this.#buildAnalemma()
    this.#buildHelio()

    this.resize()
    this.tick = () => this.#animate()
    this.raf = requestAnimationFrame(this.tick)
  }

  // ---------------------------------------------------------------- helpers
  #lineMaterial(opts) {
    const mat = new LineMaterial({ worldUnits: false, transparent: true, depthWrite: false, ...opts })
    mat.resolution.set(this.width || 1, this.height || 1)
    this.lineMaterials.add(mat)
    return mat
  }

  #polyline(points, opts) {
    const geo = new LineGeometry()
    const arr = new Float32Array(points.length * 3)
    for (let i = 0; i < points.length; i++) {
      arr[i * 3] = points[i].x
      arr[i * 3 + 1] = points[i].y
      arr[i * 3 + 2] = points[i].z
    }
    geo.setPositions(arr)
    const mat = this.#lineMaterial(opts)
    const line = new Line2(geo, mat)
    if (opts.dashed) line.computeLineDistances()
    line.renderOrder = 10
    return line
  }

  #disposeObject(obj) {
    if (!obj) return
    obj.traverse((o) => {
      if (o.geometry) o.geometry.dispose()
      if (o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material]
        for (const m of mats) {
          if (m.map) m.map.dispose()
          this.lineMaterials.delete(m)
          m.dispose()
        }
      }
    })
    obj.parent?.remove(obj)
  }

  static #circlePoints(radius, n, fn) {
    const pts = []
    for (let k = 0; k <= n; k++) {
      const a = (k / n) * TWO_PI
      pts.push(fn(a, radius))
    }
    return pts
  }

  // ---------------------------------------------------------------- static scene parts
  #buildStars() {
    const n = 2200
    const pos = new Float32Array(n * 3)
    let seed = 12345
    const rand = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646
    for (let i = 0; i < n; i++) {
      const z = rand() * 2 - 1
      const a = rand() * TWO_PI
      const r = Math.sqrt(1 - z * z)
      pos[i * 3] = 60 * r * Math.cos(a)
      pos[i * 3 + 1] = 60 * r * Math.sin(a)
      pos[i * 3 + 2] = 60 * z
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const mat = new THREE.PointsMaterial({ color: COVER ? '#e2e8f0' : '#cbd5e1', size: COVER ? 2.4 : 1.6, sizeAttenuation: false, transparent: true, opacity: COVER ? 0.85 : 0.45, depthWrite: false })
    this.stars = new THREE.Points(geo, mat)
    this.eciGroup.add(this.stars)
  }

  #buildEarth() {
    const tilt = new THREE.Group()
    tilt.rotation.x = Math.PI / 2 // geometry pole (+y) → +z
    const geo = new THREE.SphereGeometry(1, 128, 96)
    const mat = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0x222222, shininess: 8, bumpScale: 0.012 })
    const loader = new THREE.TextureLoader()
    loader.load(`${BASE}textures/earth-blue-marble.webp${TEX_V}`, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace
      tex.anisotropy = this.renderer.capabilities.getMaxAnisotropy()
      mat.map = tex
      mat.needsUpdate = true
      this.texturePending = true // flagged ready only after the first frame has drawn with it (GPU upload done)
    })
    loader.load(`${BASE}textures/earth-topology.webp${TEX_V}`, (tex) => {
      mat.bumpMap = tex
      mat.needsUpdate = true
    })
    this.earthMesh = new THREE.Mesh(geo, mat)
    tilt.add(this.earthMesh)
    this.earthGroup.add(tilt)
    // Ghost sphere shown when the Earth is hidden, so the globe's size still reads.
    this.ghostEarth = new THREE.Mesh(
      new THREE.SphereGeometry(0.995, 64, 48),
      new THREE.MeshBasicMaterial({ color: PAPER ? '#94a3b8' : '#64748b', transparent: true, opacity: PAPER ? 0.08 : 0.14, depthWrite: false }),
    )
    this.ghostEarth.visible = false
    this.displayGroup.add(this.ghostEarth)
  }

  #buildAtmosphere() {
    const mat = new THREE.ShaderMaterial({
      uniforms: { glowColor: { value: new THREE.Color('#5aa9ff') } },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vView = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        #define GLOW ${PAPER ? '0.45' : '1.0'}
        uniform vec3 glowColor;
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          float f = 1.0 - abs(dot(vNormal, vView));
          float a = pow(f, 6.0) * 0.32 * GLOW;
          gl_FragColor = vec4(glowColor, a);
        }`,
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(1.05, 64, 48), mat)
    mesh.renderOrder = -1
    this.atmosphere = mesh
    this.earthAssembly.add(mesh)
  }

  #buildGrid() {
    const segs = []
    const push = (a, b) => segs.push(a.x, a.y, a.z, b.x, b.y, b.z)
    const ll = (lat, lng, r) => {
      const c = Math.cos(lat * DEG)
      return { x: r * c * Math.cos(lng * DEG), y: r * c * Math.sin(lng * DEG), z: r * Math.sin(lat * DEG) }
    }
    const minor = []
    const major = []
    for (let lat = -80; lat <= 80; lat += 20) {
      const target = lat === 0 ? major : minor
      for (let lng = -180; lng < 180; lng += 3) {
        const a = ll(lat, lng, R_GRID)
        const b = ll(lat, lng + 3, R_GRID)
        target.push(a.x, a.y, a.z, b.x, b.y, b.z)
      }
    }
    for (let lng = 0; lng < 360; lng += 30) {
      const target = lng === 0 || lng === 180 ? major : minor
      for (let lat = -90; lat < 90; lat += 3) {
        const a = ll(lat, lng, R_GRID)
        const b = ll(lat + 3, lng, R_GRID)
        target.push(a.x, a.y, a.z, b.x, b.y, b.z)
      }
    }
    void push
    void segs
    const make = (arr, opacity, width) => {
      const geo = new LineSegmentsGeometry()
      geo.setPositions(new Float32Array(arr))
      const mat = this.#lineMaterial({ color: PAPER ? '#0f172a' : COLORS.grid, linewidth: width, opacity: PAPER ? opacity * 1.4 : opacity })
      const obj = new LineSegments2(geo, mat)
      obj.renderOrder = 5
      return obj
    }
    this.grid = new THREE.Group()
    this.grid.add(make(minor, 0.22, 1), make(major, 0.5, 1.3))
    this.grid.visible = false
    this.displayGroup.add(this.grid)
  }

  /** One arrow (line + cone + label) from the origin along `dir` (unit vector). */
  #axisArrow(dir, color, label, { dashed = false, length = 1.9, tier = 1 } = {}) {
    const g = new THREE.Group()
    const line = this.#polyline([{ x: 0, y: 0, z: 0 }, { x: dir.x * length, y: dir.y * length, z: dir.z * length }], { color, linewidth: 1.6, opacity: 0.9, dashed, dashSize: 0.06, gapSize: 0.04 })
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.022, 0.08, 16), new THREE.MeshBasicMaterial({ color }))
    cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(dir.x, dir.y, dir.z))
    cone.position.set(dir.x * (length + 0.05), dir.y * (length + 0.05), dir.z * (length + 0.05))
    g.add(line, cone)
    if (label) {
      const sprite = makeLabelSprite(label, color, { tier })
      sprite.position.set(dir.x * (length + 0.22), dir.y * (length + 0.22), dir.z * (length + 0.22))
      g.add(sprite)
    }
    return g
  }

  #buildFrameAxes() {
    const X = { x: 1, y: 0, z: 0 }
    const Y = { x: 0, y: 1, z: 0 }
    const Z = { x: 0, y: 0, z: 1 }
    const emiColor = PAPER ? '#4338ca' : COLORS.emiAxis
    const mssiColor = PAPER ? '#b45309' : COLORS.mssiAxis

    // Each frame: solid and dashed variants of its x and y axes (z is shared).
    this.emiAxis = new THREE.Group()
    this.emiAxisSolid = new THREE.Group()
    this.emiAxisSolid.name = 'emiAxisSolid'
    this.emiAxisSolid.add(this.#axisArrow(X, emiColor, 'ECI x · vernal equinox'), this.#axisArrow(Y, emiColor, 'ECI y', { tier: 2 }))
    this.emiAxisDashed = new THREE.Group()
    this.emiAxisDashed.name = 'emiAxisDashed'
    this.emiAxisDashed.add(this.#axisArrow(X, emiColor, 'ECI x · vernal equinox', { dashed: true }), this.#axisArrow(Y, emiColor, 'ECI y', { dashed: true, tier: 2 }))
    this.emiAxis.add(this.emiAxisSolid, this.emiAxisDashed)
    this.emiAxis.visible = false
    this.eciGroup.add(this.emiAxis)

    this.mssiAxis = new THREE.Group()
    this.mssiAxisSolid = new THREE.Group()
    this.mssiAxisSolid.name = 'mssiAxisSolid'
    this.mssiAxisSolid.add(this.#axisArrow(X, mssiColor, 'MSSI x · mean Sun'), this.#axisArrow(Y, mssiColor, 'MSSI y', { tier: 2 }))
    this.mssiAxisDashed = new THREE.Group()
    this.mssiAxisDashed.name = 'mssiAxisDashed'
    this.mssiAxisDashed.add(this.#axisArrow(X, mssiColor, 'MSSI x · mean Sun', { dashed: true }), this.#axisArrow(Y, mssiColor, 'MSSI y', { dashed: true, tier: 2 }))
    this.mssiAxis.add(this.mssiAxisSolid, this.mssiAxisDashed)
    this.mssiAxis.visible = false
    this.mssiGroup.add(this.mssiAxis)

    this.zAxis = this.#axisArrow(Z, PAPER ? '#0f172a' : '#e2e8f0', 'z · spin axis', { length: 1.6, tier: 2 })
    this.zAxis.visible = false
    // "MSSI turn" arc: a curved arrow around the spin axis from where the MSSI x axis was on day 0 to
    // where it is now — a reading aid for the Sun-centred figures (referenceOverlays.mssiTurnArc)
    this.turnArc = new THREE.Group()
    this.turnArcLine = this.#polyline(Array.from({ length: TURN_ARC_POINTS }, () => ({ x: 0, y: 0, z: 0 })), { color: TURN_ARC_COLOR, linewidth: 2.6, opacity: 1 })
    const coneGeo = new THREE.ConeGeometry(0.028, 0.085, 12)
    this.turnArcCone = new THREE.Mesh(coneGeo, new THREE.MeshBasicMaterial({ color: TURN_ARC_COLOR }))
    this.turnArcCone0 = new THREE.Mesh(coneGeo, new THREE.MeshBasicMaterial({ color: TURN_ARC_COLOR }))
    this.turnArc.add(this.turnArcLine, this.turnArcCone, this.turnArcCone0)
    this.turnArc.visible = false
    this.eciGroup.add(this.turnArc)
    this.displayGroup.add(this.zAxis)

    // spin axis (always on, subtle)
    const spin = this.#polyline([{ x: 0, y: 0, z: -1.25 }, { x: 0, y: 0, z: 1.25 }], { color: PAPER ? '#0f172a' : '#ffffff', linewidth: 1, opacity: PAPER ? 0.5 : 0.25 })
    this.displayGroup.add(spin)
  }

  /**
   * Translucent coordinate planes, colour-coded by frame: the shared equatorial (xy) plane in
   * neutral grey, the ECI xz/yz planes in indigo, the MSSI xz/yz planes in amber. Edges of the
   * non-displayed frame are dashed, like its axes.
   */
  #buildFramePlanes() {
    const S = 1.0
    const plane = (color, label, rot, labelPos) => {
      const g = new THREE.Group()
      const mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2 * S, 2 * S),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: PAPER ? 0.14 : 0.1, side: THREE.DoubleSide, depthWrite: false }),
      )
      mesh.rotation.x = rot.x
      mesh.rotation.y = rot.y
      mesh.renderOrder = 3
      const corners = [[-S, -S], [S, -S], [S, S], [-S, S], [-S, -S]].map(([u, v]) => {
        const q = new THREE.Vector3(u, v, 0).applyEuler(mesh.rotation)
        return { x: q.x, y: q.y, z: q.z }
      })
      const solid = this.#polyline(corners, { color, linewidth: 1.2, opacity: PAPER ? 0.85 : 0.6 })
      const dashed = this.#polyline(corners, { color, linewidth: 1.2, opacity: PAPER ? 0.85 : 0.6, dashed: true, dashSize: 0.08, gapSize: 0.05 })
      const sprite = makeLabelSprite(label, color, { size: 0.045, tier: 2 })
      sprite.position.set(labelPos.x, labelPos.y, labelPos.z)
      g.add(mesh, solid, dashed, sprite)
      g.userData = { solid, dashed }
      return g
    }
    const emi = PAPER ? '#4338ca' : COLORS.emiAxis
    const mssi = PAPER ? '#b45309' : COLORS.mssiAxis
    const neutral = PAPER ? '#475569' : '#cbd5e1'
    this.equatorPlane = plane(neutral, 'equatorial plane (xy)', { x: 0, y: 0 }, { x: S, y: -S * 0.92, z: 0.04 })
    this.equatorPlane.visible = false
    this.displayGroup.add(this.equatorPlane)
    this.emiPlanes = new THREE.Group()
    this.emiPlanes.add(
      plane(emi, 'ECI xz-plane', { x: Math.PI / 2, y: 0 }, { x: S * 0.92, y: 0, z: S }),
      plane(emi, 'ECI yz-plane', { x: 0, y: Math.PI / 2 }, { x: 0, y: S * 0.92, z: -S }),
    )
    this.emiPlanes.visible = false
    this.eciGroup.add(this.emiPlanes)
    this.mssiPlanes = new THREE.Group()
    this.mssiPlanes.add(
      plane(mssi, 'MSSI xz-plane · noon–midnight', { x: Math.PI / 2, y: 0 }, { x: S * 0.92, y: 0, z: -S }),
      plane(mssi, 'MSSI yz-plane · dawn–dusk', { x: 0, y: Math.PI / 2 }, { x: 0, y: -S * 0.92, z: S }),
    )
    this.mssiPlanes.visible = false
    this.mssiGroup.add(this.mssiPlanes)
    // Sun-centred view: one colour-coded label per frame beside its planes; everything else hides unless close.
    const frameLabel = (text, color, pos) => {
      const sp = makeLabelSprite(text, color, { size: 0.055, tier: 0 })
      sp.userData.label.helioOnly = true
      sp.userData.label.helioAlways = true
      sp.position.set(pos.x, pos.y, pos.z)
      return sp
    }
    this.emiPlanes.add(frameLabel('ECI', emi, { x: S, y: 0, z: S + 0.16 }))
    this.mssiPlanes.add(frameLabel('MSSI', mssi, { x: S, y: 0, z: -S - 0.16 }))
    this.framePlanes = new THREE.Group() // kept for debugState compatibility
    this.framePlanes.visible = false
  }

  /** Sun, Earth's orbit and calendar markers for the Sun-centred view (ecliptic frame, Sun at the origin). */
  #buildHelio() {
    const sunColor = PAPER ? '#d97706' : '#fde68a'
    const sun = new THREE.Mesh(new THREE.SphereGeometry(SUN_RADIUS_SCENE, 48, 32), new THREE.MeshBasicMaterial({ color: sunColor }))
    this.helioRoot.add(sun)
    if (!PAPER) {
      const glowCanvas = document.createElement('canvas')
      glowCanvas.width = glowCanvas.height = 256
      const ctx = glowCanvas.getContext('2d')
      const grad = ctx.createRadialGradient(128, 128, 20, 128, 128, 128)
      grad.addColorStop(0, 'rgba(255,244,200,0.95)')
      grad.addColorStop(0.3, 'rgba(251,191,36,0.55)')
      grad.addColorStop(1, 'rgba(251,191,36,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, 256, 256)
      const tex = new THREE.CanvasTexture(glowCanvas)
      tex.colorSpace = THREE.SRGBColorSpace
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }))
      glow.scale.set(4.5, 4.5, 1)
      this.helioRoot.add(glow)
    }
    const sunLabel = makeLabelSprite('Sun', sunColor, { size: 0.045, tier: 0 })
    sunLabel.userData.label.helioAlways = true
    sunLabel.position.set(0, 0, SUN_RADIUS_SCENE + 0.35)
    this.helioRoot.add(sunLabel)

    // Earth's orbit: true shape and orientation (e = 0.0167, perihelion in early January), dotted.
    const orbitPts = earthOrbitEcliptic(720).map((p) => ({ x: p.x * AU_SCENE, y: p.y * AU_SCENE, z: 0 }))
    const orbit = this.#polyline(orbitPts, { color: PAPER ? '#475569' : '#94a3b8', linewidth: 1.4, opacity: 0.8, dashed: true, dashSize: 0.18, gapSize: 0.12 })
    this.helioRoot.add(orbit)

    // Vernal-equinox direction through the Sun (the fixed ECI x direction), for comparison with Earth's ECI axis.
    const vx = this.#polyline([{ x: -AU_SCENE * 1.25, y: 0, z: 0 }, { x: AU_SCENE * 1.25, y: 0, z: 0 }], { color: PAPER ? '#4338ca' : COLORS.emiAxis, linewidth: 1, opacity: 0.45, dashed: true, dashSize: 0.12, gapSize: 0.1 })
    const vxLabel = makeLabelSprite('vernal equinox direction', PAPER ? '#4338ca' : COLORS.emiAxis, { size: 0.04, tier: 1, far: [Infinity, 60, 60] })
    vxLabel.userData.label.helioAlways = true
    vxLabel.position.set(AU_SCENE * 1.25, 0, -0.45)
    this.helioRoot.add(vx, vxLabel)

    // Month ticks and season / apsis markers along the orbit.
    const tick = (d, label, size, color, out = 1.06, zOff = 0.18, tier = 2, always = false) => {
      const e = earthHeliocentricEcliptic(d)
      const m = new THREE.Mesh(new THREE.SphereGeometry(size, 12, 8), new THREE.MeshBasicMaterial({ color }))
      m.position.set(e.x * AU_SCENE, e.y * AU_SCENE, 0)
      this.helioRoot.add(m)
      if (label) {
        const sp = makeLabelSprite(label, color, { size: 0.036, tier, far: [Infinity, 45, 40] })
        sp.userData.label.helioAlways = always
        sp.position.set(e.x * AU_SCENE * out, e.y * AU_SCENE * out, zOff)
        this.helioRoot.add(sp)
      }
    }
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthStart = [-0.5, 30.5, 59.5, 90.5, 120.5, 151.5, 181.5, 212.5, 243.5, 273.5, 304.5, 334.5] // d of the 1st, 12:00 UT (year 2000)
    months.forEach((m, k) => tick(monthStart[k], m, 0.016, PAPER ? '#64748b' : '#94a3b8'))
    for (const mk of yearMarkers()) {
      const apsis = mk.key === 'perihelion' || mk.key === 'aphelion'
      tick(mk.d, mk.label, 0.026, PAPER ? '#0f172a' : '#e2e8f0', apsis ? 0.9 : 1.14, apsis ? -0.3 : 0.4, 1, !apsis)
    }
  }

  #buildSunObjects() {
    this.sunLine = this.#polyline([{ x: 0, y: 0, z: 0 }, { x: SUN_LINE_LENGTH, y: 0, z: 0 }], { color: PAPER ? '#d97706' : COLORS.sun, linewidth: PAPER ? 2.4 : 1.8, opacity: 0.95 })
    this.sunLine.visible = false
    this.eciGroup.add(this.sunLine)

    const sunSpriteCanvas = document.createElement('canvas')
    sunSpriteCanvas.width = sunSpriteCanvas.height = 128
    const ctx = sunSpriteCanvas.getContext('2d')
    const grad = ctx.createRadialGradient(64, 64, 4, 64, 64, 64)
    grad.addColorStop(0, 'rgba(255,245,200,1)')
    grad.addColorStop(0.35, 'rgba(251,191,36,0.9)')
    grad.addColorStop(1, 'rgba(251,191,36,0)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 128, 128)
    const sunTex = new THREE.CanvasTexture(sunSpriteCanvas)
    sunTex.colorSpace = THREE.SRGBColorSpace
    this.sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: sunTex, transparent: true, depthWrite: false }))
    this.sunSprite.scale.set(0.26, 0.26, 1)
    this.sunSprite.visible = false
    this.eciGroup.add(this.sunSprite)
    this.sunSpriteLabel = makeLabelSprite('Sun', COLORS.sun, { size: 0.045, tier: 0 })
    this.sunSpriteLabel.visible = false
    this.eciGroup.add(this.sunSpriteLabel)

    this.subSolar = new THREE.Mesh(
      new THREE.SphereGeometry(0.016, 24, 16),
      new THREE.MeshBasicMaterial({ color: COLORS.sun }),
    )
    this.subSolar.visible = false
    this.eciGroup.add(this.subSolar)
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.024, 0.031, 32),
      new THREE.MeshBasicMaterial({ color: COLORS.sun, side: THREE.DoubleSide, transparent: true, opacity: 0.8 }),
    )
    this.subSolar.add(ring)
    this.subSolarRing = ring

    const termPts = OrbitScene.#circlePoints(R_TRACK, 180, (a, r) => ({ x: r * Math.cos(a), y: r * Math.sin(a), z: 0 }))
    this.terminator = this.#polyline(termPts, { color: PAPER ? '#475569' : COLORS.terminator, linewidth: 1.4, opacity: 0.9, dashed: true, dashSize: 0.045, gapSize: 0.03 })
    this.terminator.visible = false
    this.eciGroup.add(this.terminator)
  }

  #buildAnalemma() {
    const pts = computeAnalemmaMSSI(720).map((p) => ({ x: p.x * R_ANALEMMA, y: p.y * R_ANALEMMA, z: p.z * R_ANALEMMA }))
    this.analemma = this.#polyline(pts, { color: PAPER ? '#b45309' : COLORS.analemma, linewidth: PAPER ? 3 : 2.4, opacity: 1 })
    this.analemma.visible = false
    this.mssiGroup.add(this.analemma)

    const ecl = computeEclipticECI(360).map((p) => ({ x: p.x * R_ANALEMMA, y: p.y * R_ANALEMMA, z: p.z * R_ANALEMMA }))
    this.ecliptic = this.#polyline(ecl, { color: PAPER ? '#b45309' : COLORS.ecliptic, linewidth: 1.4, opacity: 0.8, dashed: true, dashSize: 0.05, gapSize: 0.035 })
    this.ecliptic.visible = false
    this.eciGroup.add(this.ecliptic)
  }

  // ---------------------------------------------------------------- per-orbit visuals
  #buildOrbitVisual(orbit, idx, flags) {
    const color = ORBIT_COLORS[idx % ORBIT_COLORS.length]
    const inc = orbit.inclinationDeg * DEG
    const rr = 1 + orbit.altitudeKm / R_EARTH
    const n = 240
    const unit = []
    for (let k = 0; k <= n; k++) unit.push(planePoint(0, inc, (k / n) * TWO_PI))

    const group = new THREE.Group()
    const vis = { orbit, color, idx, group, rr, unit, flags, mssiObjects: [] }

    if (flags.orbitalPlaneRing) {
      const segs = !!flags.eclipseSegments
      vis.ring = this.#polyline(unit.map((p) => ({ x: p.x * rr, y: p.y * rr, z: p.z * rr })), { color: segs ? '#ffffff' : color, linewidth: 2.4, opacity: 1, vertexColors: segs })
      group.add(vis.ring)
    }
    if (flags.groundTrack) {
      const segs = !!flags.eclipseSegments
      vis.track = this.#polyline(unit.map((p) => ({ x: p.x * R_TRACK, y: p.y * R_TRACK, z: p.z * R_TRACK })), { color: segs ? '#ffffff' : color, linewidth: 1.5, opacity: 0.95, vertexColors: segs })
      group.add(vis.track)
    }
    if (flags.satelliteMarker) {
      vis.sat = new THREE.Mesh(new THREE.SphereGeometry(0.02, 24, 16), new THREE.MeshBasicMaterial({ color }))
      vis.sat.renderOrder = 20
      vis.subSat = new THREE.Mesh(new THREE.SphereGeometry(0.01, 16, 12), new THREE.MeshBasicMaterial({ color }))
      vis.tether = this.#polyline([{ x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: rr }], { color, linewidth: 1, opacity: 0.55 })
      vis.label = makeLabelSprite(orbit.name, color, { size: 0.045, tier: 0 })
      vis.sat.material.transparent = true
      group.add(vis.sat, vis.subSat, vis.tether, vis.label)
    }
    if (flags.raanVector) {
      vis.raan = this.#polyline([{ x: 0, y: 0, z: 0 }, { x: rr, y: 0, z: 0 }], { color, linewidth: 1.6, opacity: 0.9, dashed: true, dashSize: 0.045, gapSize: 0.03 })
      const node = new THREE.Mesh(new THREE.SphereGeometry(0.015, 16, 12), new THREE.MeshBasicMaterial({ color }))
      node.position.set(rr, 0, 0)
      const label = makeLabelSprite('Ω node', color, { size: 0.045, tier: 1 })
      label.position.set(rr + 0.02, 0, -0.085)
      group.add(vis.raan, node, label)
    }
    this.eciGroup.add(group)

    if (flags.eclipseRegions) this.#buildRegions(vis)
    return vis
  }

  #buildRegions(vis) {
    const ext = getExtrema()
    const alpha = alphaDegForAltitude(vis.orbit.altitudeKm)
    const cls = classifyRegions(ext, alpha)
    const W = ext.width - 1 // drop the duplicated +180 column for the texture
    const H = ext.height
    const canvas = document.createElement('canvas')
    canvas.width = W
    canvas.height = H
    const ctx = canvas.getContext('2d')
    const img = ctx.createImageData(W, H)
    for (let r = 0; r < H; r++) {
      const y = H - 1 - r
      for (let c = 0; c < W; c++) {
        const rgba = REGION_RGBA[cls[r * ext.width + c]]
        const o = (y * W + c) * 4
        img.data[o] = rgba[0]
        img.data[o + 1] = rgba[1]
        img.data[o + 2] = rgba[2]
        img.data[o + 3] = rgba[3]
      }
    }
    ctx.putImageData(img, 0, 0)
    const tex = new THREE.CanvasTexture(canvas)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.minFilter = THREE.LinearFilter
    tex.magFilter = THREE.LinearFilter
    const tilt = new THREE.Group()
    tilt.rotation.x = Math.PI / 2
    const radius = R_REGION + vis.idx * 0.004
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 96, 64),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }),
    )
    mesh.renderOrder = 2
    tilt.add(mesh)
    this.mssiGroup.add(tilt)
    vis.mssiObjects.push(tilt)
    vis.regionAlpha = alpha

    const contours = regionContours(ext, alpha)
    const toXYZ = (pl) =>
      pl.map((p) => {
        const c = Math.cos(p.lat * DEG)
        return { x: R_CONTOUR * c * Math.cos(p.lng * DEG), y: R_CONTOUR * c * Math.sin(p.lng * DEG), z: R_CONTOUR * Math.sin(p.lat * DEG) }
      })
    for (const pl of contours.dU) {
      if (pl.length < 2) continue
      const line = this.#polyline(toXYZ(pl), { color: COLORS.dU, linewidth: 2.4, opacity: 1 })
      this.mssiGroup.add(line)
      vis.mssiObjects.push(line)
    }
    for (const pl of contours.dI) {
      if (pl.length < 2) continue
      const line = this.#polyline(toXYZ(pl), { color: COLORS.dI, linewidth: 2.4, opacity: 1 })
      this.mssiGroup.add(line)
      vis.mssiObjects.push(line)
    }
  }

  #disposeOrbitVisual(vis) {
    this.#disposeObject(vis.group)
    for (const o of vis.mssiObjects) this.#disposeObject(o)
  }

  #updateOrbitVisualTime(vis, d, sunECI) {
    const { orbit, group, rr, unit } = vis
    const O = raanECI(orbit, d)
    group.rotation.z = O
    if (vis.sat) {
      const u = argumentOfLatitude(orbit, d)
      const p = planePoint(0, orbit.inclinationDeg * DEG, u)
      vis.sat.position.set(p.x * rr, p.y * rr, p.z * rr)
      vis.subSat.position.set(p.x * R_TRACK, p.y * R_TRACK, p.z * R_TRACK)
      vis.tether.geometry.setPositions(new Float32Array([p.x * R_TRACK, p.y * R_TRACK, p.z * R_TRACK, p.x * rr, p.y * rr, p.z * rr]))
      // The name label stays at the ring's northernmost point; only the marker moves. When the timeline
      // advances more than ~20° of orbit per update the marker can only strobe around the ring, so it is
      // faded and its tether hidden so it reads as motion rather than flicker.
      const apex = planePoint(0, orbit.inclinationDeg * DEG, Math.PI / 2)
      vis.label.position.set(apex.x * rr, apex.y * rr, apex.z * rr + 0.09)
      const step = vis.lastU == null ? 0 : Math.abs(((u - vis.lastU + Math.PI) % TWO_PI + TWO_PI) % TWO_PI - Math.PI)
      vis.lastU = u
      vis.fastCount = step > 0.35 ? Math.min(6, (vis.fastCount || 0) + 1) : Math.max(0, (vis.fastCount || 0) - 1)
      const fast = vis.fastCount >= 2
      vis.sat.material.opacity = fast ? 0.35 : 1
      vis.tether.visible = !fast
      vis.subSat.visible = !fast
    }
    if (vis.flags.eclipseSegments && (vis.ring || vis.track)) {
      // Sun direction in the orbit group's local frame (RAAN = 0)
      const s = rotateZ(sunECI, -O)
      const c = R_EARTH / (R_EARTH + orbit.altitudeKm)
      const lit = new THREE.Color(vis.color)
      const dark = new THREE.Color(COLORS.eclipsed)
      const colors = new Float32Array(unit.length * 3)
      for (let k = 0; k < unit.length; k++) {
        const p = unit[k]
        const dot = p.x * s.x + p.y * s.y + p.z * s.z
        const cx = p.y * s.z - p.z * s.y
        const cy = p.z * s.x - p.x * s.z
        const cz = p.x * s.y - p.y * s.x
        const eclipsed = dot < 0 && Math.hypot(cx, cy, cz) < c
        const col = eclipsed ? dark : lit
        colors[k * 3] = col.r
        colors[k * 3 + 1] = col.g
        colors[k * 3 + 2] = col.b
      }
      if (vis.ring) vis.ring.geometry.setColors(colors)
      if (vis.track) vis.track.geometry.setColors(colors)
    }
  }

  // ---------------------------------------------------------------- props
  setProps(next) {
    const prev = this.props
    this.props = next
    const structural =
      !prev ||
      prev.orbits !== next.orbits ||
      prev.displayOrbits !== next.displayOrbits ||
      prev.coordinateFrame !== next.coordinateFrame
    if (structural) this.#rebuildOrbits(next)
    const mode = next.viewMode === 'helio' ? 'helio' : 'geo'
    if (mode !== this.viewMode) {
      this.viewMode = mode
      this.#applyTime(next) // Earth position is needed before the Sun-centred camera is placed
      this.#applyViewMode(mode)
    }
    this.#applyToggles(next)
    this.#applyTime(next)
  }

  #rebuildOrbits({ orbits, displayOrbits }) {
    for (const vis of this.orbitVisuals.values()) this.#disposeOrbitVisual(vis)
    this.orbitVisuals.clear()
    orbits.forEach((orbit, idx) => {
      const flags = displayOrbits[orbit.id] ?? {}
      if (!Object.values(flags).some(Boolean)) return
      this.orbitVisuals.set(orbit.id, this.#buildOrbitVisual(orbit, idx, flags))
    })
  }

  #applyToggles({ vectors = {}, referenceOverlays = {}, coordinateFrame, earthTextureMode }) {
    this.labelsEnabled = referenceOverlays.labels !== false
    const hidden = earthTextureMode === 'hidden'
    this.earthMesh.visible = !hidden
    if (this.atmosphere) this.atmosphere.visible = !hidden
    this.ghostEarth.visible = hidden
    this.analemma.visible = !!vectors.analemma
    this.ecliptic.visible = !!vectors.analemma && coordinateFrame === 'ECI'
    this.subSolar.visible = !!vectors.subSolarPoint
    this.sunLine.visible = !!vectors.sunDirectionLine
    this.sunSprite.visible = !!vectors.sunDirectionLine
    this.terminator.visible = !!vectors.terminator
    this.grid.visible = !!referenceOverlays.latLonGrid
    const axes = !!referenceOverlays.otherFrameAxes
    this.emiAxis.visible = axes
    this.mssiAxis.visible = axes
    const emiIsDisplay = coordinateFrame === 'ECI'
    this.emiAxisSolid.visible = emiIsDisplay
    this.emiAxisDashed.visible = !emiIsDisplay
    this.mssiAxisSolid.visible = !emiIsDisplay
    this.mssiAxisDashed.visible = emiIsDisplay
    this.zAxis.visible = axes
    this.turnArc.visible = !!referenceOverlays.mssiTurnArc
    const planes = !!referenceOverlays.framePlanes
    this.equatorPlane.visible = planes
    this.emiPlanes.visible = planes
    this.mssiPlanes.visible = planes
    for (const g of this.emiPlanes.children) { if (g.userData.solid) { g.userData.solid.visible = emiIsDisplay; g.userData.dashed.visible = !emiIsDisplay } }
    for (const g of this.mssiPlanes.children) { if (g.userData.solid) { g.userData.solid.visible = !emiIsDisplay; g.userData.dashed.visible = emiIsDisplay } }
    this.framePlanes.visible = planes
  }

  /**
   * Angle marker between the two frames: an arc along the top edges of the xz-planes, from the ECI
   * plane's +x top corner to the MSSI plane's, the short way round, with a small head at each end.
   * The angle is the mean-Sun longitude L(d); it closes toward the March equinox.
   */
  #updateTurnArc(d) {
    let a1 = frameAngle('MSSI', d) % (Math.PI * 2)
    if (a1 > Math.PI) a1 -= Math.PI * 2 // short way
    const r = 1.0, z = 1.03 // the planes' top corners sit at radius S = 1, height S = 1
    const arr = new Float32Array(TURN_ARC_POINTS * 3)
    for (let i = 0; i < TURN_ARC_POINTS; i++) {
      const a = (a1 * i) / (TURN_ARC_POINTS - 1)
      arr[3 * i] = r * Math.cos(a)
      arr[3 * i + 1] = r * Math.sin(a)
      arr[3 * i + 2] = z
    }
    this.turnArcLine.geometry.setPositions(arr)
    const dir = Math.sign(a1) || 1
    const head = (cone, a, sgn) => {
      const t = new THREE.Vector3(-Math.sin(a) * sgn, Math.cos(a) * sgn, 0) // tangent, pointing outward from the arc
      cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), t)
      // the cone's apex sits half its height ahead of its centre: put the apex exactly on the plane's corner
      cone.position.set(r * Math.cos(a) - t.x * 0.0425, r * Math.sin(a) - t.y * 0.0425, z)
    }
    head(this.turnArcCone, a1, dir)
    head(this.turnArcCone0, 0, -dir)
  }

  #applyTime({ timeDays: d, coordinateFrame, earthTextureMode }) {
    const helio = this.viewMode === 'helio'
    // In the Sun-centred view the assembly is drawn in the inertial (ECI) orientation; the ecliptic tilt is on the assembly.
    const fa = helio ? 0 : frameAngle(coordinateFrame, d)
    const L = meanSunLongitude(d)
    this.eciGroup.rotation.z = -fa
    this.mssiGroup.rotation.z = L - fa
    this.earthGroup.rotation.z = earthTextureMode === 'still' ? 0 : gmst(d) - fa

    const s = sunDirectionECI(d)
    this.sunLight.position.set(s.x * 10, s.y * 10, s.z * 10)
    let sunLen = SUN_LINE_LENGTH
    if (helio) {
      const e = earthHeliocentricEcliptic(d)
      this.assemblyTarget = { pos: new THREE.Vector3(e.x * AU_SCENE, e.y * AU_SCENE, 0), rot: -e.eps }
      if (!this.assemblyTween) {
        this.earthAssembly.position.copy(this.assemblyTarget.pos)
        this.earthAssembly.rotation.x = -e.eps
      }
      sunLen = (e.r * AU_SCENE) / EARTH_SCALE // reach the Sun exactly
      this.currentEarthPos = { x: e.x * AU_SCENE, y: e.y * AU_SCENE, z: 0 }
    }
    this.sunLine.geometry.setPositions(new Float32Array([0, 0, 0, s.x * sunLen, s.y * sunLen, s.z * sunLen]))
    if (this.turnArc.visible) this.#updateTurnArc(d)
    this.sunSprite.position.set(s.x * SUN_LINE_LENGTH, s.y * SUN_LINE_LENGTH, s.z * SUN_LINE_LENGTH)
    this.sunSprite.visible = this.sunSprite.visible && !helio
    this.sunSpriteLabel.position.set(s.x * SUN_LINE_LENGTH, s.y * SUN_LINE_LENGTH, s.z * SUN_LINE_LENGTH + 0.22)
    this.sunSpriteLabel.userData.label.off = !this.sunSprite.visible
    this.sunSpriteLabel.visible = this.sunSprite.visible
    this.subSolar.position.set(s.x * 1.006, s.y * 1.006, s.z * 1.006)
    this.subSolar.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(s.x, s.y, s.z))
    this.terminator.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(s.x, s.y, s.z))

    for (const vis of this.orbitVisuals.values()) this.#updateOrbitVisualTime(vis, d, s)
    this.currentSunECI = s
  }

  // ---------------------------------------------------------------- Sun-centred view
  #applyViewMode(mode) {
    this.viewMode = mode
    const helio = mode === 'helio'
    this.helioRoot.visible = helio
    const k = helio ? EARTH_SCALE : 1
    // the assembly scale/position/tilt ease over ~1 s; applyTime keeps writing the helio target while it runs
    this.assemblyTween = { t0: performance.now(), dur: 1000, fromScale: this.earthAssembly.scale.x, toScale: k, fromPos: this.earthAssembly.position.clone(), fromRot: this.earthAssembly.rotation.x }
    if (!helio) {
      this.currentEarthPos = null
      this.assemblyTarget = { pos: new THREE.Vector3(0, 0, 0), rot: 0 }
    }
    // Axes and planes are enlarged in the Sun-centred view so the frames stay legible beside the small Earth.
    const axisScale = helio ? 2.4 : 1
    for (const g of [this.emiAxis, this.mssiAxis, this.zAxis, this.equatorPlane, this.emiPlanes, this.mssiPlanes, this.turnArc]) g.scale.setScalar(axisScale)
    if (this.stars) {
      this.stars.parent?.remove(this.stars)
      ;(helio ? this.scene : this.eciGroup).add(this.stars)
    }
    this.controls.minDistance = helio ? 0.9 : 1.3
    this.controls.maxDistance = helio ? 60 : 12
    if (helio) this.setHelioCamera(this.helioCamera || 'follow')
    else this.#flyTo(new THREE.Vector3(3.0, -1.4, 1.0).normalize().multiplyScalar(4.2), new THREE.Vector3(0, 0, 0))
  }

  /** Ease the camera (position and look-at target) to a new pose over `dur` ms. */
  #flyTo(position, target, dur = 900) {
    this.cameraTween = { t0: performance.now(), dur, fromPos: this.camera.position.clone(), toPos: position.clone(), fromTarget: this.controls.target.clone(), toTarget: target.clone() }
  }

  /** Camera presets for the Sun-centred view: follow the Earth, look down on the ecliptic, or along it. */
  setHelioCamera(key) {
    this.helioCamera = key
    const E = new THREE.Vector3(this.currentEarthPos?.x ?? AU_SCENE, this.currentEarthPos?.y ?? 0, 0)
    if (key === 'above') {
      this.#flyTo(new THREE.Vector3(0, -8, 26), new THREE.Vector3(0, 0, 0))
    } else if (key === 'side') {
      this.#flyTo(new THREE.Vector3(2, -28, 4), new THREE.Vector3(0, 0, 0))
    } else {
      // behind, beside and above the Earth, aimed a little past it so the Sun stays in frame
      const toSun = E.clone().negate().normalize()
      const side = new THREE.Vector3(0, 0, 1).cross(toSun).normalize()
      const pos = E.clone().addScaledVector(toSun, -4.4).addScaledVector(side, 2.6).add(new THREE.Vector3(0, 0, 2.1))
      this.#flyTo(pos, E.clone().addScaledVector(toSun, 1.4))
    }
    this.lastEarthPos.copy(E)
  }

  // ---------------------------------------------------------------- lifecycle
  resize() {
    if (!this.container) return
    const w = Math.max(1, Math.floor(this.container.clientWidth))
    const h = Math.max(1, Math.floor(this.container.clientHeight))
    this.width = w
    this.height = h
    this.renderer.setSize(w, h, false)
    this.renderer.domElement.style.width = '100%'
    this.renderer.domElement.style.height = '100%'
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    for (const m of this.lineMaterials) m.resolution.set(w, h)
  }

  /**
   * Label de-cluttering, run every few frames:
   *  1. the Labels toggle hides everything;
   *  2. secondary labels (tier 1/2) hide beyond their distance limit;
   *  3. remaining labels are placed in priority order (tier, then nearest first) and any label
   *     whose on-screen box would overlap an already placed one is hidden.
   */
  #cullLabels() {
    // make sure projection uses this frame's camera pose (the renderer only refreshes it during render)
    this.camera.updateMatrixWorld()
    this.camera.matrixWorldInverse.copy(this.camera.matrixWorld).invert()
    const farScale = this.viewMode === 'helio' ? 1.7 : 1
    const cam = this.camera.position
    const helio = this.viewMode === 'helio'
    // "close" = camera within a few Earth-assembly radii of the Earth; only then do the detail labels appear
    const helioClose = helio && this.currentEarthPos && cam.distanceTo(new THREE.Vector3(this.currentEarthPos.x, this.currentEarthPos.y, 0)) < 3.6
    const tmp = this.#tmpVec || (this.#tmpVec = new THREE.Vector3())
    const W = this.width || 1
    const H = this.height || 1
    const candidates = []
    for (const sp of ALL_LABELS) {
      if (!sp.parent) continue
      // parent chain must be visible, and must end at this scene (a disposed scene's sprites are ignored)
      let p = sp.parent
      let shown = true
      while (p.parent) { if (!p.visible) shown = false; p = p.parent }
      if (p !== this.scene) continue
      if (!this.labelsEnabled || !shown || !p.visible || sp.userData.label.off) { sp.visible = false; continue }
      const lab = sp.userData.label
      if (this.labelFilter && !this.labelFilter(lab.text)) { sp.visible = false; continue }
      if (!helio && lab.helioOnly) { sp.visible = false; continue }
      if (helio && !helioClose && !lab.helioAlways && !this.labelFilter) { sp.visible = false; continue }
      const { tier, far } = sp.userData.label
      sp.getWorldPosition(tmp)
      const dist = tmp.distanceTo(cam)
      sp.userData.label.dist = dist
      if (!PAPER && tier !== 0 && dist > (far[tier] ?? Infinity) * farScale) { sp.visible = false; sp.userData.label.why = 'far'; continue }
      const ndc = tmp.clone().project(this.camera)
      sp.userData.label.ndcz = ndc.z
      if (ndc.z > 1 || ndc.z < -1) { sp.visible = false; sp.userData.label.why = 'ndc'; continue }
      sp.userData.label.why = null
      const w = (sp.scale.x / 2) * W * 0.78
      const h = (sp.scale.y / 2) * H * 0.9
      const x = ((ndc.x + 1) / 2) * W
      const y = ((1 - ndc.y) / 2) * H
      candidates.push({ sp, tier, dist, rect: [x - w / 2, y - h / 2, x + w / 2, y + h / 2] })
    }
    candidates.sort((a, b) => a.tier - b.tier || a.dist - b.dist)
    // screen areas covered by the HUD chips (top-left) and camera buttons (top-right) count as occupied
    const placed = PAPER ? [] : [[0, 0, 560, 84], [W - 340, 0, W, 48]]
    for (const c of candidates) {
      const [x0, y0, x1, y1] = c.rect
      const hit = placed.some(([a0, b0, a1, b1]) => x0 < a1 && x1 > a0 && y0 < b1 && y1 > b0)
      c.sp.visible = !hit
      if (!hit) placed.push(c.rect)
    }
  }
  #tmpVec = null

  #animate() {
    if (this.disposed) return
    const now = performance.now()
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)
    if (this.assemblyTween) {
      const tw = this.assemblyTween
      const k = ease(Math.min(1, (now - tw.t0) / tw.dur))
      const tgt = this.assemblyTarget || { pos: new THREE.Vector3(), rot: 0 }
      this.earthAssembly.scale.setScalar(tw.fromScale + (tw.toScale - tw.fromScale) * k)
      this.earthAssembly.position.lerpVectors(tw.fromPos, tgt.pos, k)
      this.earthAssembly.rotation.x = tw.fromRot + (tgt.rot - tw.fromRot) * k
      if (k >= 1) this.assemblyTween = null
    }
    if (this.cameraTween) {
      const tw = this.cameraTween
      const k = tw.dur > 0 ? ease(Math.min(1, (now - tw.t0) / tw.dur)) : 1
      if (this.viewMode === 'helio' && this.helioCamera === 'follow' && this.currentEarthPos) {
        // the Earth may jump (time change) while the camera is still gliding: carry the glide's end pose with it
        const E = new THREE.Vector3(this.currentEarthPos.x, this.currentEarthPos.y, 0)
        const delta = E.clone().sub(this.lastEarthPos)
        if (delta.lengthSq() > 0) { tw.toPos.add(delta); tw.toTarget.add(delta); tw.fromPos.add(delta); tw.fromTarget.add(delta); this.lastEarthPos.copy(E) }
      }
      this.camera.position.lerpVectors(tw.fromPos, tw.toPos, k)
      this.controls.target.lerpVectors(tw.fromTarget, tw.toTarget, k)
      if (k >= 1) this.cameraTween = null
    }
    if (!this.cameraTween && this.viewMode === 'helio' && this.helioCamera === 'follow' && this.currentEarthPos) {
      const E = new THREE.Vector3(this.currentEarthPos.x, this.currentEarthPos.y, 0)
      const delta = E.clone().sub(this.lastEarthPos)
      if (delta.lengthSq() > 0) {
        this.camera.position.add(delta)
        this.controls.target.copy(E)
        this.lastEarthPos.copy(E)
      }
    }
    this.controls.update()
    if ((this.frameCount || 0) % 3 === 0) this.#cullLabels()
    this.renderer.render(this.scene, this.camera)
    this.frameCount = (this.frameCount || 0) + 1
    if (this.texturePending && !this.texturesReady) {
      this.texturesReady = true
      this.onReady?.()
    }
    this.raf = requestAnimationFrame(this.tick)
  }

  /** Call `cb` once the Earth is textured and drawn (immediately if it already is). */
  whenReady(cb) {
    if (this.texturesReady) cb()
    else this.onReady = cb
  }

  /** Take the canvas out of the page and stop rendering, keeping the scene (textures included) alive. */
  detach() {
    cancelAnimationFrame(this.raf)
    this.raf = null
    this.renderer.domElement.remove()
    this.container = null
  }

  /** Put the live canvas into a (new) container and resume rendering. */
  attach(container) {
    this.container = container
    container.appendChild(this.renderer.domElement)
    this.resize()
    if (this.raf == null) this.raf = requestAnimationFrame(this.tick)
  }

  dispose() {
    this.disposed = true
    cancelAnimationFrame(this.raf)
    for (const sp of [...ALL_LABELS]) {
      let p = sp
      while (p.parent) p = p.parent
      if (p === this.scene) ALL_LABELS.delete(sp)
    }
    this.controls.dispose()
    for (const vis of this.orbitVisuals.values()) this.#disposeOrbitVisual(vis)
    this.scene.traverse((o) => {
      if (o.geometry) o.geometry.dispose()
      if (o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material]
        for (const m of mats) {
          if (m.map) m.map.dispose()
          m.dispose()
        }
      }
    })
    this.renderer.dispose()
    this.renderer.domElement.remove()
  }

  // ---------------------------------------------------------------- debug/verification API
  /** World-space positions & rotations used by the end-to-end checks. */
  debugState() {
    this.scene.updateMatrixWorld(true)
    const w = (obj, local) => {
      const v = new THREE.Vector3(local.x, local.y, local.z)
      obj.localToWorld(v)
      return { x: v.x, y: v.y, z: v.z }
    }
    const orbits = {}
    for (const [id, vis] of this.orbitVisuals) {
      const sat = vis.sat ? w(vis.group, vis.sat.position) : null
      const ring = vis.ring ? vis.unit.filter((_, k) => k % 20 === 0).map((p) => w(vis.group, { x: p.x * vis.rr, y: p.y * vis.rr, z: p.z * vis.rr })) : null
      orbits[id] = { sat, ring, rotationZ: vis.group.rotation.z, rr: vis.rr, regionAlpha: vis.regionAlpha ?? null, flags: vis.flags, hasRing: !!vis.ring, hasTrack: !!vis.track, mssiObjects: vis.mssiObjects.length }
    }
    const analemma = []
    const pos = this.analemma.geometry.attributes.instanceStart
    if (pos) {
      for (let i = 0; i < pos.count; i += 6) analemma.push(w(this.analemma, { x: pos.getX(i), y: pos.getY(i), z: pos.getZ(i) }))
    }
    return {
      frameCount: this.frameCount || 0,
      texturesReady: !!this.texturesReady,
      rotations: { eci: this.eciGroup.rotation.z, mssi: this.mssiGroup.rotation.z, earth: this.earthGroup.rotation.z },
      subSolar: w(this.eciGroup, this.subSolar.position),
      sunECI: this.currentSunECI,
      analemma,
      orbits,
      visible: {
        analemma: this.analemma.visible,
        ecliptic: this.ecliptic.visible,
        subSolar: this.subSolar.visible,
        sunLine: this.sunLine.visible,
        terminator: this.terminator.visible,
        grid: this.grid.visible,
        emiAxis: this.emiAxis.visible,
        mssiAxis: this.mssiAxis.visible,
        framePlanes: this.framePlanes.visible,
        labels: this.labelsEnabled !== false,
      },
      camera: { x: this.camera.position.x, y: this.camera.position.y, z: this.camera.position.z },
      viewMode: this.viewMode,
      earthPos: this.currentEarthPos ?? null,
      labels: [...ALL_LABELS]
        .filter((sp) => { let p = sp; while (p.parent) p = p.parent; return p === this.scene })
        .map((sp) => {
          let p = sp.parent
          let hiddenBy = null
          while (p) { if (!p.visible && !hiddenBy) hiddenBy = p.name || p.type; p = p.parent }
          return { text: sp.userData.label.text, tier: sp.userData.label.tier, visible: sp.visible, dist: sp.userData.label.dist ?? null, hiddenBy, off: !!sp.userData.label.off, why: sp.userData.label.why ?? null, ndcz: sp.userData.label.ndcz ?? null }
        }),
    }
  }

  /** Restrict visible labels to those whose text passes `fn` (null = no restriction). Used by the paper captures. */
  setLabelFilter(fn) {
    this.labelFilter = fn
  }

  /** Project a world point to CSS pixel coordinates inside the container. */
  project(p) {
    const v = new THREE.Vector3(p.x, p.y, p.z).project(this.camera)
    return { x: ((v.x + 1) / 2) * this.width, y: ((1 - v.y) / 2) * this.height, depth: v.z }
  }

  setCamera(pos) {
    if (pos && pos.absolute) {
      const { position, target } = pos.absolute
      this.helioCamera = 'manual'
      this.#flyTo(new THREE.Vector3(position.x, position.y, position.z), new THREE.Vector3(target.x, target.y, target.z), 0)
      if (this.currentEarthPos) this.lastEarthPos.set(this.currentEarthPos.x, this.currentEarthPos.y, 0)
      return
    }
    if (pos && pos.helio) {
      this.setHelioCamera(pos.helio)
      return
    }
    if (this.viewMode === 'helio') {
      // geocentric presets are directions; in the Sun-centred view apply them around the Earth
      const E = new THREE.Vector3(this.currentEarthPos?.x ?? AU_SCENE, this.currentEarthPos?.y ?? 0, 0)
      const dir = new THREE.Vector3(pos.x, pos.y, pos.z).normalize().multiplyScalar(4.2 * EARTH_SCALE * 1.8)
      this.helioCamera = 'manual'
      this.#flyTo(E.clone().add(dir), E)
      this.lastEarthPos.copy(E)
      return
    }
    this.#flyTo(new THREE.Vector3(pos.x, pos.y, pos.z), new THREE.Vector3(0, 0, 0))
  }
}
