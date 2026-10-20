import { useState } from 'react'
import { clampNumber } from '../utils/number'

export function SliderRow({
  label,
  min,
  max,
  step,
  value,
  unit,
  onChange,
  onChangeLive,
  onCommit,
  rightIcon,
  decimals,
}) {
  const rangeClass =
    'w-full appearance-none bg-transparent ' +
    '[&::-webkit-slider-runnable-track]:h-0.5 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-white/20 ' +
    '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:mt-[-5px] [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow ' +
    '[&::-moz-range-track]:h-0.5 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-white/20 ' +
    '[&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-white'

  const formatValue = (v) => Number(v).toFixed(decimals)
  const formatted = formatValue(value)
  const [draft, setDraft] = useState(formatted)
  const [seen, setSeen] = useState(formatted)
  const [shake, setShake] = useState(false)
  // Re-seed the text draft whenever the committed value changes (state adjusted during render).
  if (seen !== formatted) {
    setSeen(formatted)
    setDraft(formatted)
  }

  const commitDraft = () => {
    const parsed = Number.parseFloat(draft)
    if (!Number.isFinite(parsed)) {
      setShake(true)
      setDraft(formatValue(value))
      window.setTimeout(() => setShake(false), 260)
      return
    }

    const clamped = clampNumber(parsed, min, max)
    const fixed = Number(Number(clamped).toFixed(decimals))
    onChange(fixed)
    setDraft(Number(fixed).toFixed(decimals))
  }

  const handleRangeChange = (next) => {
    if (onCommit) {
      onChangeLive?.(next)
      return
    }
    onChange(next)
  }

  const commitRangeValue = (next) => {
    if (!onCommit) return
    const clamped = clampNumber(next, min, max)
    const fixed = Number(Number(clamped).toFixed(decimals))
    onCommit(fixed)
  }

  return (
    <div>
      <div className="flex items-center justify-between text-xs text-white/80">
        <span>{label}</span>
        <div className="flex items-center gap-2">{rightIcon}</div>
      </div>
      <div className="mt-3 grid grid-cols-[1fr_auto] items-center gap-3">
        <input
          className={rangeClass}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => handleRangeChange(Number(e.target.value))}
          onPointerUp={(e) => commitRangeValue(Number(e.currentTarget.value))}
          onKeyUp={(e) => {
            if (['Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) commitRangeValue(Number(e.currentTarget.value))
          }}
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
            onBlur={() => setDraft(formatValue(value))}
          />
          <span>{unit}</span>
        </div>
      </div>
    </div>
  )
}
