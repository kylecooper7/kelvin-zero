import { useState } from 'react'
import { clampNumber, roundTo } from '../utils/number'

export function Timeline({ valueDays, onChangeDays }) {
  const min = 0
  const max = 365.24

  const rangeClass =
    'w-full appearance-none bg-transparent ' +
    '[&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/25 ' +
    '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:mt-[-5px] [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow ' +
    '[&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-white/25 ' +
    '[&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white'

  const format = (v) => Number(v).toFixed(2)
  const formatted = format(valueDays)
  const [draft, setDraft] = useState(formatted)
  const [seen, setSeen] = useState(formatted)
  const [shake, setShake] = useState(false)
  if (seen !== formatted) {
    setSeen(formatted)
    setDraft(formatted)
  }

  const commitDraft = () => {
    const parsed = Number.parseFloat(draft)
    if (!Number.isFinite(parsed)) {
      setShake(true)
      setDraft(format(valueDays))
      window.setTimeout(() => setShake(false), 260)
      return
    }

    const clamped = roundTo(clampNumber(parsed, min, max), 2)
    onChangeDays(clamped)
    setDraft(format(clamped))
  }

  return (
    <div className="flex w-full items-center gap-4">
      <input
        className={rangeClass}
        type="range"
        min={min}
        max={max}
        step={0.01}
        value={valueDays}
        onChange={(e) => onChangeDays(roundTo(Number(e.target.value), 2))}
      />
      <div className="flex items-center gap-2 text-[11px] text-white/80">
        <input
          className={`w-[84px] rounded-md bg-white/5 px-2 py-1 text-right font-semibold text-white/90 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 ${
            shake ? 'animate-shake' : ''
          }`}
          type="text"
          inputMode="decimal"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') commitDraft()
          }}
          onBlur={() => setDraft(format(valueDays))}
        />
        <span>days</span>
      </div>
    </div>
  )
}
