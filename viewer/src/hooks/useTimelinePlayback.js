import { useEffect, useRef } from 'react'
import { roundTo } from '../utils/number'

export function useTimelinePlayback({ playing, setPlaying, valueDays, setValueDays, durationMs = 15000, totalDays = 365.24 }) {
  const playStartRef = useRef(null)
  const playStartValueRef = useRef(0)
  const setValueDaysRef = useRef(setValueDays)
  const setPlayingRef = useRef(setPlaying)

  setValueDaysRef.current = setValueDays
  setPlayingRef.current = setPlaying

  useEffect(() => {
    if (!playing) {
      playStartRef.current = null
      return
    }

    playStartRef.current = null
    playStartValueRef.current = valueDays

    let raf = 0

    const tick = (ts) => {
      if (!playStartRef.current) playStartRef.current = ts
      const elapsed = ts - playStartRef.current
      const t = Math.min(1, elapsed / durationMs)
      const next = roundTo(playStartValueRef.current + t * (totalDays - playStartValueRef.current), 2)
      setValueDaysRef.current(next)

      if (t >= 1) {
        setPlayingRef.current(false)
        return
      }

      raf = window.requestAnimationFrame(tick)
    }

    raf = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(raf)
    // Only restart the animation loop when playing toggles on/off
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, durationMs, totalDays])
}
