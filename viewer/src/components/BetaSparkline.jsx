import { useMemo } from 'react'
import { DEG, TROPICAL_YEAR_DAYS } from '../model/constants.js'
import { betaAngle, noEclipseBetaDeg } from '../model/orbit.js'

/**
 * β angle over one year for an orbit, with the eclipse-free band (|β| ≥ asin R/(R+h))
 * and the current timeline day. Days where the curve leaves the band are the eclipse season.
 */
export function BetaSparkline({ orbit, timeDays = 0, colorHex = '#38bdf8' }) {
  const w = 300
  const h = 72
  const padL = 26
  const padR = 6
  const padT = 6
  const padB = 14
  const data = useMemo(() => {
    const n = 92
    const pts = []
    for (let k = 0; k <= n; k++) {
      const d = (k / n) * TROPICAL_YEAR_DAYS
      pts.push({ d, b: betaAngle(orbit, d) / DEG })
    }
    return { pts, thr: noEclipseBetaDeg(orbit.altitudeKm) }
  }, [orbit])
  const sx = (d) => padL + (d / TROPICAL_YEAR_DAYS) * (w - padL - padR)
  const sy = (b) => padT + ((90 - b) / 180) * (h - padT - padB)
  const path = data.pts.map((p, i) => `${i ? 'L' : 'M'}${sx(p.d).toFixed(1)},${sy(p.b).toFixed(1)}`).join(' ')
  const now = betaAngle(orbit, timeDays) / DEG
  const months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-1 w-full" role="img" aria-label="Beta angle over the year">
      {/* eclipse band: |β| < threshold */}
      <rect x={padL} y={sy(data.thr)} width={w - padL - padR} height={sy(-data.thr) - sy(data.thr)} fill="rgba(244,63,94,0.12)" />
      <line x1={padL} x2={w - padR} y1={sy(data.thr)} y2={sy(data.thr)} stroke="rgba(244,63,94,0.5)" strokeDasharray="3 3" />
      <line x1={padL} x2={w - padR} y1={sy(-data.thr)} y2={sy(-data.thr)} stroke="rgba(244,63,94,0.5)" strokeDasharray="3 3" />
      <line x1={padL} x2={w - padR} y1={sy(0)} y2={sy(0)} stroke="rgba(255,255,255,0.12)" />
      {[90, 0, -90].map((b) => (
        <text key={b} x={padL - 4} y={sy(b) + 3} textAnchor="end" fontSize="8" fill="rgba(255,255,255,0.45)">
          {b}°
        </text>
      ))}
      {months.map((d, i) => (
        <text key={d} x={sx(d + 15)} y={h - 3} textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.35)">
          {'JFMAMJJASOND'[i]}
        </text>
      ))}
      <path d={path} fill="none" stroke={colorHex} strokeWidth="1.6" />
      <line x1={sx(timeDays)} x2={sx(timeDays)} y1={padT} y2={h - padB} stroke="rgba(255,255,255,0.35)" />
      <circle cx={sx(timeDays)} cy={sy(now)} r="2.6" fill={colorHex} stroke="rgba(0,0,0,0.6)" />
    </svg>
  )
}
