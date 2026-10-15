// Deep links into the visualizer, used by the PDF whitepaper (and shareable URLs).
//   ?view=eclipse&alt=800&raan=270&day=355&cam=antisun&frame=ECI   (frame=EMI, the frame's old name, is still accepted)
// Any parameter may be omitted. `view` is a key of VIEW_PRESETS, `cam` a key of CAMERA_PRESETS.

import { CAMERA_PRESETS, VIEW_PRESETS } from '../model/presets.js'

/** Build a viewer URL (base defaults to the site root). */
export function buildViewerLink({ view, alt, raan, day, cam, frame, mode } = {}, base = '/') {
  const q = new URLSearchParams()
  if (view) q.set('view', view)
  if (frame) q.set('frame', frame)
  if (mode) q.set('mode', mode)
  if (alt != null) q.set('alt', String(alt))
  if (raan != null) q.set('raan', String(raan))
  if (day != null) q.set('day', String(day))
  if (cam) q.set('cam', cam)
  const s = q.toString()
  return s ? `${base}?${s}` : base
}

/**
 * Parse a URL search string into a showInViewer request, or null if it carries no view state.
 * @returns {null | { preset?: object, orbitParams?: object, timeDays?: number, camera?: string }}
 */
export function parseViewerLink(search) {
  const q = new URLSearchParams(search)
  if (!['view', 'alt', 'raan', 'day', 'cam', 'frame', 'mode'].some((k) => q.has(k))) return null
  const req = {}
  const view = q.get('view')
  const frame = q.get('frame') === 'EMI' ? 'ECI' : q.get('frame') // EMI was the name until v0.2; links in the wild keep working
  if (view && VIEW_PRESETS[view]) {
    req.preset = { ...VIEW_PRESETS[view] }
    if (frame === 'ECI' || frame === 'MSSI') {
      req.preset.coordinateFrame = frame
      if (frame !== VIEW_PRESETS[view].coordinateFrame) req.preset.name = `${VIEW_PRESETS[view].name} (${frame})`
    }
  }
  const alt = Number.parseFloat(q.get('alt'))
  const raan = Number.parseFloat(q.get('raan'))
  if (Number.isFinite(alt) || Number.isFinite(raan)) {
    req.orbitParams = {}
    if (Number.isFinite(alt)) req.orbitParams.altitudeKm = Math.min(2000, Math.max(100, alt))
    if (Number.isFinite(raan)) req.orbitParams.raanOffsetDeg = ((raan % 360) + 360) % 360
  }
  const day = Number.parseFloat(q.get('day'))
  if (Number.isFinite(day)) req.timeDays = Math.min(365.24, Math.max(0, day))
  const mode = q.get('mode')
  if (req.preset && (mode === 'helio' || mode === 'geo')) req.preset.viewMode = mode
  const cam = q.get('cam')
  if (cam && CAMERA_PRESETS[cam]) req.camera = cam
  else if (cam && ['follow', 'above', 'side'].includes(cam)) req.camera = cam
  return req
}
