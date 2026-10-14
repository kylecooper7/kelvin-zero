// Eclipse-time regions (notebook "Untitled9": Eclipse-Time Regions).
//
// For every direction p on the unit sphere, expressed in the MSSI frame, we
// precompute the yearly extrema of p·ŝ(t), where ŝ(t) is the Sun direction in
// MSSI (the analemma). A direction is "sunlit" at time t iff
//     p·ŝ(t) ≥ cos α,
// where α is the angular radius of the sunlit cone. For a point of an orbit
// shell at altitude h (cylindrical shadow) α = 90° + acos(R/(R+h)); α = 90°
// reduces to plain day/night on the surface.
//
//   U = { p : max_t p·ŝ ≥ cos α }   ever sunlit        (∂U = "some-sun" boundary)
//   I = { p : min_t p·ŝ ≥ cos α }   always sunlit      (∂I = "always-sun" boundary)
//   classes: outside U → always eclipsed (purple); U∖I → sometimes (orange); I → never (green)
//
// Because the extrema do not depend on α, they are computed once; only the
// threshold changes per orbit.

import { DEG, TROPICAL_YEAR_DAYS } from './constants.js'
import { sunDirectionMSSI } from './sun.js'

export const REGION_ALWAYS_ECLIPSE = 0
export const REGION_SOME_ECLIPSE = 1
export const REGION_NO_ECLIPSE = 2

/**
 * Equirectangular grid of yearly extrema of p·ŝ. Column c ↔ longitude
 * −180 + 360·c/(W−1); row r ↔ latitude −90 + 180·r/(H−1).
 * @returns {{ width:number, height:number, max:Float32Array, min:Float32Array }}
 */
export function computeSunDotExtrema({ width = 721, height = 361, sunSamples = 366 } = {}) {
  const sx = new Float32Array(sunSamples)
  const sy = new Float32Array(sunSamples)
  const sz = new Float32Array(sunSamples)
  for (let k = 0; k < sunSamples; k++) {
    const v = sunDirectionMSSI((k / sunSamples) * TROPICAL_YEAR_DAYS)
    sx[k] = v.x
    sy[k] = v.y
    sz[k] = v.z
  }
  const max = new Float32Array(width * height)
  const min = new Float32Array(width * height)
  const cosLng = new Float32Array(width)
  const sinLng = new Float32Array(width)
  for (let c = 0; c < width; c++) {
    const lng = (-180 + (360 * c) / (width - 1)) * DEG
    cosLng[c] = Math.cos(lng)
    sinLng[c] = Math.sin(lng)
  }
  for (let r = 0; r < height; r++) {
    const lat = (-90 + (180 * r) / (height - 1)) * DEG
    const cl = Math.cos(lat)
    const pz = Math.sin(lat)
    for (let c = 0; c < width; c++) {
      const px = cl * cosLng[c]
      const py = cl * sinLng[c]
      let hi = -2
      let lo = 2
      for (let k = 0; k < sunSamples; k++) {
        const dot = px * sx[k] + py * sy[k] + pz * sz[k]
        if (dot > hi) hi = dot
        if (dot < lo) lo = dot
      }
      const idx = r * width + c
      max[idx] = hi
      min[idx] = lo
    }
  }
  return { width, height, max, min }
}

/** Yearly extrema of p·ŝ for a single direction given as lat/lng (deg). */
export function sunDotExtremaAt(latDeg, lngDeg, sunSamples = 2000) {
  const cl = Math.cos(latDeg * DEG)
  const px = cl * Math.cos(lngDeg * DEG)
  const py = cl * Math.sin(lngDeg * DEG)
  const pz = Math.sin(latDeg * DEG)
  let hi = -2
  let lo = 2
  for (let k = 0; k < sunSamples; k++) {
    const s = sunDirectionMSSI((k / sunSamples) * TROPICAL_YEAR_DAYS)
    const dot = px * s.x + py * s.y + pz * s.z
    if (dot > hi) hi = dot
    if (dot < lo) lo = dot
  }
  return { max: hi, min: lo }
}

/**
 * Classify every grid cell for a given cone half-angle α (deg).
 * @returns {Uint8Array} REGION_* codes
 */
export function classifyRegions(extrema, alphaDeg) {
  const c = Math.cos(alphaDeg * DEG)
  const { max, min } = extrema
  const out = new Uint8Array(max.length)
  for (let i = 0; i < max.length; i++) {
    out[i] = min[i] >= c ? REGION_NO_ECLIPSE : max[i] >= c ? REGION_SOME_ECLIPSE : REGION_ALWAYS_ECLIPSE
  }
  return out
}

/**
 * Marching squares at `level` on a scalar field stored row-major (H rows × W
 * cols). Returns polylines of { lat, lng } (deg) joined across cell edges.
 */
export function marchingSquaresLatLng(field, width, height, level) {
  const lngOf = (c) => -180 + (360 * c) / (width - 1)
  const latOf = (r) => -90 + (180 * r) / (height - 1)
  const at = (r, c) => field[r * width + c]

  // Edge ids: horizontal edge between (r,c)-(r,c+1) → 2*(r*W+c); vertical edge (r,c)-(r+1,c) → 2*(r*W+c)+1
  const H = (r, c) => 2 * (r * width + c)
  const V = (r, c) => 2 * (r * width + c) + 1
  const pointOf = new Map() // edgeId → {lat,lng}
  const adj = new Map() // edgeId → [edgeId,...]

  const interp = (f0, f1) => {
    const den = f1 - f0
    const t = den === 0 ? 0.5 : (level - f0) / den
    return Math.min(1, Math.max(0, t))
  }
  const ensurePoint = (id, r, c, horizontal) => {
    if (pointOf.has(id)) return
    if (horizontal) {
      const t = interp(at(r, c), at(r, c + 1))
      pointOf.set(id, { lat: latOf(r), lng: lngOf(c + t) })
    } else {
      const t = interp(at(r, c), at(r + 1, c))
      pointOf.set(id, { lat: latOf(r + t), lng: lngOf(c) })
    }
  }
  const link = (a, b) => {
    if (!adj.has(a)) adj.set(a, [])
    if (!adj.has(b)) adj.set(b, [])
    adj.get(a).push(b)
    adj.get(b).push(a)
  }

  for (let r = 0; r < height - 1; r++) {
    for (let c = 0; c < width - 1; c++) {
      const fa = at(r, c)
      const fb = at(r, c + 1)
      const fc = at(r + 1, c + 1)
      const fd = at(r + 1, c)
      const code = (fa >= level ? 1 : 0) | (fb >= level ? 2 : 0) | (fc >= level ? 4 : 0) | (fd >= level ? 8 : 0)
      if (code === 0 || code === 15) continue
      const top = H(r, c)
      const bottom = H(r + 1, c)
      const left = V(r, c)
      const right = V(r, c + 1)
      const need = (id) => {
        if (id === top) ensurePoint(id, r, c, true)
        else if (id === bottom) ensurePoint(id, r + 1, c, true)
        else if (id === left) ensurePoint(id, r, c, false)
        else ensurePoint(id, r, c + 1, false)
      }
      const seg = (p, q) => {
        need(p)
        need(q)
        link(p, q)
      }
      switch (code) {
        case 1: seg(left, top); break
        case 2: seg(top, right); break
        case 3: seg(left, right); break
        case 4: seg(right, bottom); break
        case 5: {
          const center = 0.25 * (fa + fb + fc + fd)
          if (center >= level) { seg(left, bottom); seg(top, right) } else { seg(left, top); seg(right, bottom) }
          break
        }
        case 6: seg(top, bottom); break
        case 7: seg(left, bottom); break
        case 8: seg(left, bottom); break
        case 9: seg(top, bottom); break
        case 10: {
          const center = 0.25 * (fa + fb + fc + fd)
          if (center >= level) { seg(left, top); seg(right, bottom) } else { seg(top, right); seg(left, bottom) }
          break
        }
        case 11: seg(right, bottom); break
        case 12: seg(left, right); break
        case 13: seg(top, right); break
        case 14: seg(left, top); break
        default: break
      }
    }
  }

  // Walk the adjacency graph into polylines.
  const visited = new Set()
  const polylines = []
  const walk = (start) => {
    const line = [start]
    visited.add(start)
    let prev = null
    let cur = start
    for (;;) {
      const nbrs = adj.get(cur) || []
      let next = null
      for (const n of nbrs) {
        if (n !== prev && !visited.has(n)) { next = n; break }
      }
      if (next == null) {
        // close loops
        if (nbrs.includes(start) && line.length > 2) line.push(start)
        break
      }
      visited.add(next)
      line.push(next)
      prev = cur
      cur = next
    }
    return line
  }
  // Start from open ends first (degree 1), then remaining loops.
  const ids = [...adj.keys()]
  for (const id of ids) {
    if (!visited.has(id) && (adj.get(id) || []).length === 1) polylines.push(walk(id))
  }
  for (const id of ids) {
    if (!visited.has(id)) polylines.push(walk(id))
  }
  return polylines.map((ids) => ids.map((id) => pointOf.get(id))).filter((pl) => pl.length >= 2)
}

/**
 * ∂U and ∂I contours for a given α (deg), as lat/lng polylines in MSSI.
 */
export function regionContours(extrema, alphaDeg) {
  const level = Math.cos(alphaDeg * DEG)
  return {
    dU: marchingSquaresLatLng(extrema.max, extrema.width, extrema.height, level),
    dI: marchingSquaresLatLng(extrema.min, extrema.width, extrema.height, level),
  }
}

/** Fraction of the sphere area in each class (area-weighted by cos lat). */
export function regionAreaFractions(extrema, alphaDeg) {
  const cls = classifyRegions(extrema, alphaDeg)
  const { width, height } = extrema
  const sums = [0, 0, 0]
  let total = 0
  for (let r = 0; r < height; r++) {
    const w = Math.cos((-90 + (180 * r) / (height - 1)) * DEG)
    for (let c = 0; c < width - 1; c++) {
      sums[cls[r * width + c]] += w
      total += w
    }
  }
  return sums.map((s) => s / total)
}
