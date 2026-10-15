// Reference frames.
//
//  ECI  (Earth-Centred Inertial, J2000 mean equator and equinox): x toward the vernal equinox,
//       z along Earth's spin axis. Nothing rotates with time.
//  MSSI (Mean-Sun Synchronous Inertial): ECI rotated about z by the mean
//       longitude of the Sun, L(d). Its x axis always points at the mean Sun,
//       so the frame turns once per tropical year and an exactly
//       sun-synchronous orbit plane appears frozen in it.
//
// All physics is computed in ECI; a display frame is a rotation about z by
// −frameAngle(frame, d).

import { DEG } from './constants.js'
import { meanSunLongitude, wrapTwoPi } from './sun.js'

/** @typedef {'ECI'|'MSSI'} Frame */

/**
 * Rotation angle (radians, about +z) of the display frame relative to ECI.
 * @param {Frame} frame
 * @param {number} d days since J2000
 */
export function frameAngle(frame, d) {
  return frame === 'MSSI' ? meanSunLongitude(d) : 0
}

/**
 * Greenwich Mean Sidereal Time (radians): angle from the vernal equinox to the
 * Greenwich meridian. At d = 0 (J2000, 12:00 UT) it equals 280.46°, i.e. the
 * mean Sun is on the Greenwich meridian — which is why, in MSSI, the Earth
 * texture starts with Greenwich at longitude 0.
 * @param {number} d
 */
export function gmst(d) {
  return wrapTwoPi((280.46061837 + 360.98564736629 * d) * DEG)
}

/** Rotate a vector about +z by `ang` radians. */
export function rotateZ(v, ang) {
  const c = Math.cos(ang)
  const s = Math.sin(ang)
  return { x: c * v.x - s * v.y, y: s * v.x + c * v.y, z: v.z }
}

/** ECI → display-frame coordinates. */
export function eciToDisplay(v, frame, d) {
  return rotateZ(v, -frameAngle(frame, d))
}

/** Unit vector (any frame) → { lat, lng } in degrees. */
export function vecToLatLng(v) {
  const r = Math.hypot(v.x, v.y, v.z) || 1
  return { lat: Math.asin(v.z / r) / DEG, lng: Math.atan2(v.y, v.x) / DEG }
}

/** { lat, lng } in degrees → unit vector. */
export function latLngToVec(lat, lng) {
  const la = lat * DEG
  const lo = lng * DEG
  const c = Math.cos(la)
  return { x: c * Math.cos(lo), y: c * Math.sin(lo), z: Math.sin(la) }
}
