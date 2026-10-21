import { useEffect, useMemo, useRef, useState } from 'react'
import { clampNumber, roundTo } from '../utils/number'
import { DEG } from '../model/constants.js'
import {
  altitudeFromInclination,
  alphaDegForAltitude,
  betaAngle,
  eclipseFractionPerOrbit,
  formatHours,
  inclinationFromAltitude,
  I_MAX,
  I_MIN,
  ltanHours,
  noEclipseBetaDeg,
  orbitalPeriod,
  yearlyEclipseStats,
} from '../model/orbit.js'
import { Chevron, Plus, QuestionCircle } from '../icons'
import {
  addOrbit as addOrbitAction,
  setActiveOrbitId as setActiveOrbitIdAction,
  setActiveViewConfig as setActiveViewConfigAction,
  setOrbitParams as setOrbitParamsAction,
  toggleDisplayFlag as toggleDisplayFlagAction,
  togglePerOrbitFlag as togglePerOrbitFlagAction,
} from '../model/actions'
import { SliderRow } from './SliderRow'
import { orbitColor, SWATCH } from '../theme/palette.js'
import { ORBIT_PRESETS } from '../model/presets.js'
import { BetaSparkline } from './BetaSparkline'

const formatLtan = (raanOffsetDeg) => {
  const h = (((12 + raanOffsetDeg / 15) % 24) + 24) % 24
  return `${String(Math.floor(h)).padStart(2, '0')}:${String(Math.round((h % 1) * 60) % 60).padStart(2, '0')}`
}

function ColorSquareToggle({ checked, colorClass }) {
  return (
    <span
      className={`h-3.5 w-3.5 flex-none rounded-sm border-2 ${colorClass} ${checked ? 'bg-current' : 'bg-transparent'}`}
      aria-hidden="true"
    />
  )
}

const SECTION_LABEL = 'text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55'
const GROUP_LABEL = 'text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45'

/** Orbit-preset picker: a button that opens a rounded dark list, in the sidebar's own style. */
function PresetMenu({ onPick }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    if (!open) return undefined
    const close = (e) => { if (!ref.current?.contains(e.target)) setOpen(false) }
    const key = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', key)
    return () => { document.removeEventListener('mousedown', close); document.removeEventListener('keydown', key) }
  }, [open])
  return (
    <div ref={ref} className="relative min-w-0 flex-1">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-md bg-white/10 py-1.5 pl-3 pr-2.5 text-xs font-medium text-white/90 ring-1 ring-inset ring-white/10 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
      >
        <span>Load an orbit preset…</span>
        <Chevron className={`h-3 w-3 text-white/70 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open ? (
        <ul role="listbox" className="absolute left-0 right-0 top-full z-40 mt-1.5 overflow-hidden rounded-xl bg-slate-950/95 p-1 shadow-xl ring-1 ring-white/10 backdrop-blur-md">
          {ORBIT_PRESETS.map((pr) => (
            <li key={pr.id} role="option" aria-selected={false}>
              <button
                type="button"
                onClick={() => { onPick(pr); setOpen(false) }}
                className="w-full rounded-lg px-3 py-1.5 text-left text-xs font-medium text-white/85 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:bg-white/10"
              >
                {pr.name}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

function Legend({ items }) {
  return (
    <div className="ml-[26px] flex flex-wrap gap-x-3 gap-y-1 pb-1 text-[10px] text-white/55">
      {items.map(([cls, label]) => (
        <span key={label} className="inline-flex items-center gap-1.5">
          <span className={`inline-block h-2 w-2 rounded-[2px] ${cls}`} aria-hidden="true" />
          {label}
        </span>
      ))}
    </div>
  )
}

function HelpButtonBase({ helpId, onRequestHelp }) {
  if (!helpId) return null
  return (
    <button
      type="button"
      className="inline-flex h-5 w-5 flex-none items-center justify-center text-white/80 hover:text-white"
      aria-label={`Help: ${helpId}`}
      onClick={(e) => {
        e.stopPropagation()
        onRequestHelp?.(helpId)
      }}
    >
      <QuestionCircle className="h-3.5 w-3.5" />
    </button>
  )
}

export function Sidebar({ onOrbitPreview, open, drawer = false, onClose, model, setModel, timeDays = 0, onRequestDeleteOrbit, onRequestHelp }) {
  // Safari draws its classic scrollbar whenever a mouse is attached; show ours only while the sidebar is scrolling
  const [scrolling, setScrolling] = useState(false)
  const scrollTimer = useRef(0)
  const onSidebarScroll = () => {
    setScrolling(true)
    window.clearTimeout(scrollTimer.current)
    scrollTimer.current = window.setTimeout(() => setScrolling(false), 700)
  }
  const [orbitsOpen, setOrbitsOpen] = useState(true)
  const [calculateOpen, setCalculateOpen] = useState(true)
  const [togglesOpen, setTogglesOpen] = useState(true)
  const [displayOpen, setDisplayOpen] = useState(true)
  const [displayOrbitsOpen, setDisplayOrbitsOpen] = useState(true)
  const [displayVectorsOpen, setDisplayVectorsOpen] = useState(true)
  const [displayOverlaysOpen, setDisplayOverlaysOpen] = useState(true)

  const activeOrbit = useMemo(() => model.orbits.find((o) => o.id === model.activeOrbitId) ?? model.orbits[0], [model])
  const activeView = useMemo(() => model.views.find((v) => v.id === model.activeViewId) ?? model.views[0], [model])

  const orbitKey = `${activeOrbit.id}|${activeOrbit.altitudeKm}|${activeOrbit.inclinationDeg}|${activeOrbit.raanOffsetDeg}|${activeOrbit.initialMeanAnomalyDeg}`
  const [orbitDraft, setOrbitDraft] = useState(() => ({
    key: orbitKey,
    altitudeKm: activeOrbit.altitudeKm,
    inclinationDeg: activeOrbit.inclinationDeg,
    raanOffsetDeg: activeOrbit.raanOffsetDeg,
    initialMeanAnomalyDeg: activeOrbit.initialMeanAnomalyDeg,
  }))
  // Re-seed the slider drafts whenever the committed orbit changes (adjusting state during render).
  if (orbitDraft.key !== orbitKey) {
    setOrbitDraft({
      key: orbitKey,
      altitudeKm: activeOrbit.altitudeKm,
      inclinationDeg: activeOrbit.inclinationDeg,
      raanOffsetDeg: activeOrbit.raanOffsetDeg,
      initialMeanAnomalyDeg: activeOrbit.initialMeanAnomalyDeg,
    })
  }

  // While the drafts differ from the committed orbit (a slider is being dragged) the scene previews them.
  const previewRaf = useRef(0)
  useEffect(() => {
    if (!onOrbitPreview) return undefined
    const o = activeOrbit
    const differs =
      orbitDraft.altitudeKm !== o.altitudeKm || orbitDraft.inclinationDeg !== o.inclinationDeg ||
      orbitDraft.raanOffsetDeg !== o.raanOffsetDeg || orbitDraft.initialMeanAnomalyDeg !== o.initialMeanAnomalyDeg
    cancelAnimationFrame(previewRaf.current)
    previewRaf.current = requestAnimationFrame(() => {
      onOrbitPreview(differs ? { id: o.id, params: { altitudeKm: orbitDraft.altitudeKm, inclinationDeg: orbitDraft.inclinationDeg, raanOffsetDeg: orbitDraft.raanOffsetDeg, initialMeanAnomalyDeg: orbitDraft.initialMeanAnomalyDeg } } : null)
    })
    return () => cancelAnimationFrame(previewRaf.current)
  }, [orbitDraft, activeOrbit, onOrbitPreview])

  // Derived quantities for the active orbit (cheap; recomputed on change).
  const derived = useMemo(() => {
    const o = activeOrbit
    const beta = betaAngle(o, timeDays) / DEG
    return {
      periodMin: orbitalPeriod(o.altitudeKm) / 60,
      ltan: formatHours(ltanHours(o.raanOffsetDeg)),
      alphaDeg: alphaDegForAltitude(o.altitudeKm),
      betaDeg: beta,
      eclipseNow: eclipseFractionPerOrbit(beta * DEG, o.altitudeKm),
      betaFree: noEclipseBetaDeg(o.altitudeKm),
      yearly: yearlyEclipseStats(o, 366),
    }
  }, [activeOrbit, timeDays])

  const setActiveOrbitId = (orbitId) => setModel((prev) => setActiveOrbitIdAction(prev, orbitId))

  const addOrbit = () => {
    setModel((prev) => addOrbitAction(prev))
  }

  const setOrbitParams = (orbitId, patch) => {
    setModel((prev) => setOrbitParamsAction(prev, orbitId, patch))
  }

  const setViewConfig = (patch) => {
    setModel((prev) => setActiveViewConfigAction(prev, patch))
  }

  const togglePerOrbitFlag = (orbitId, flagKey) => {
    setModel((prev) => togglePerOrbitFlagAction(prev, orbitId, flagKey))
  }

  const toggleDisplayFlag = (group, key) => {
    setModel((prev) => toggleDisplayFlagAction(prev, group, key))
  }

  const coordinateFrameValue = activeView.config.toggles.coordinateFrame === 'SCI' ? 'MSSI' : activeView.config.toggles.coordinateFrame

  const handleAltitudeChange = (next) => {
    const clamped = roundTo(clampNumber(next, 100, 2000), 1)
    const nextInc = roundTo(clampNumber(inclinationFromAltitude(clamped), I_MIN, I_MAX), 2)
    setOrbitParams(activeOrbit.id, { altitudeKm: clamped, inclinationDeg: nextInc })
  }

  const handleAltitudeLive = (next) => {
    const clamped = roundTo(clampNumber(next, 100, 2000), 1)
    const nextInc = roundTo(clampNumber(inclinationFromAltitude(clamped), I_MIN, I_MAX), 2)
    setOrbitDraft((d) => ({ ...d, altitudeKm: clamped, inclinationDeg: nextInc }))
  }

  const handleInclinationChange = (next) => {
    const clamped = roundTo(clampNumber(next, I_MIN, I_MAX), 2)
    const nextAlt = roundTo(clampNumber(altitudeFromInclination(clamped), 100, 2000), 1)
    setOrbitParams(activeOrbit.id, { inclinationDeg: clamped, altitudeKm: nextAlt })
  }

  const handleInclinationLive = (next) => {
    const clamped = roundTo(clampNumber(next, I_MIN, I_MAX), 2)
    const nextAlt = roundTo(clampNumber(altitudeFromInclination(clamped), 100, 2000), 1)
    setOrbitDraft((d) => ({ ...d, inclinationDeg: clamped, altitudeKm: nextAlt }))
  }

  return (
    <aside
      className={`${drawer ? 'fixed left-0 top-0 z-40' : 'relative z-20 flex-none'} h-dvh overflow-hidden text-white transition-[width] duration-200 ease-out ${
        open
          ? `${drawer ? 'w-[min(340px,88vw)]' : 'w-[340px]'} bg-gradient-to-b from-indigo-950/90 via-black to-black shadow-2xl ring-1 ring-white/10`
          : 'w-0 bg-transparent shadow-none ring-0'
      }`}
      aria-hidden={!open}
    >
      <div
        onScroll={onSidebarScroll}
        data-scrolling={scrolling ? 'true' : 'false'}
        className={`h-full w-[340px] transform overflow-y-auto px-4 py-6 transition-[transform,opacity] duration-200 ease-out [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:transparent_transparent] [transition:scrollbar-color_.4s] data-[scrolling=true]:[scrollbar-color:rgba(255,255,255,0.25)_transparent] ${
          open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        {drawer ? (
          <button type="button" onClick={onClose} aria-label="Close menu" className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 ring-1 ring-inset ring-white/10">
            ×
          </button>
        ) : null}
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="inline-flex items-center gap-2"
            onClick={() => setOrbitsOpen((v) => !v)}
          >
            <span className={SECTION_LABEL}>Orbits</span>
            <Chevron open={orbitsOpen} />
          </button>
        </div>

        {orbitsOpen ? (
          <>
            <div className="mt-4 flex items-start gap-2">
              <div className="flex flex-1 items-center gap-2 overflow-x-auto pb-3 [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb:hover]:bg-white/30">
                {model.orbits.map((o, idx) => {
                  const isActive = o.id === activeOrbit.id
                  const oc = orbitColor(idx)
                  if (isActive) {
                    return (
                      <span
                        key={o.id}
                        className={`inline-flex flex-none items-center gap-2 rounded-full ${oc.chip} px-3 py-1 text-xs font-semibold text-slate-950 ring-1 ring-inset ring-white/20`}
                      >
                        {o.name}
                        {!o.locked ? (
                          <button
                            type="button"
                            className="text-slate-900/60 hover:text-slate-900"
                            aria-label={`Delete ${o.name}`}
                            onClick={(e) => {
                              e.stopPropagation()
                              onRequestDeleteOrbit(o.id)
                            }}
                          >
                            ×
                          </button>
                        ) : null}
                      </span>
                    )
                  }
                  return (
                    <span
                      key={o.id}
                      className="inline-flex flex-none items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-inset ring-white/10"
                    >
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 hover:text-white"
                        onClick={() => setActiveOrbitId(o.id)}
                        aria-label={`Select ${o.name}`}
                      >
                        <span className={`inline-block h-2 w-2 rounded-full border-2 ${oc.cls} bg-current`} aria-hidden="true" />
                        {o.name}
                      </button>
                      {!o.locked ? (
                        <button
                          type="button"
                          className="text-white/60 hover:text-white/80"
                          aria-label={`Delete ${o.name}`}
                          onClick={(e) => {
                            e.stopPropagation()
                            onRequestDeleteOrbit(o.id)
                          }}
                        >
                          ×
                        </button>
                      ) : null}
                    </span>
                  )
                })}
              </div>
              <button
                type="button"
                className="inline-flex h-6 w-6 flex-none items-center justify-center self-start rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/10 hover:bg-white/15"
                onClick={addOrbit}
                aria-label="Add orbit"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className={`${GROUP_LABEL} flex-none`}>Preset</span>
              <PresetMenu
                onPick={(preset) => {
                  const alt = roundTo(clampNumber(preset.altitudeKm, 100, 2000), 1)
                  setOrbitParams(activeOrbit.id, {
                    altitudeKm: alt,
                    inclinationDeg: roundTo(clampNumber(inclinationFromAltitude(alt), I_MIN, I_MAX), 2),
                    raanOffsetDeg: preset.raanOffsetDeg,
                  })
                }}
              />
            </div>

            <div className="mt-6 space-y-6">
              <SliderRow
                label="Altitude"
                min={100}
                max={2000}
                step={0.1}
                value={orbitDraft.altitudeKm}
                unit="km"
                rightIcon={<HelpButtonBase onRequestHelp={onRequestHelp} helpId="altitudeKm" />}
                onChange={handleAltitudeChange}
                onChangeLive={handleAltitudeLive}
                onCommit={handleAltitudeChange}
                decimals={1}
              />

              <SliderRow
                label="Inclination"
                min={I_MIN}
                max={I_MAX}
                step={0.01}
                value={orbitDraft.inclinationDeg}
                unit="deg"
                rightIcon={<HelpButtonBase onRequestHelp={onRequestHelp} helpId="inclinationDeg" />}
                onChange={handleInclinationChange}
                onChangeLive={handleInclinationLive}
                onCommit={handleInclinationChange}
                decimals={2}
              />

              <SliderRow
                label={`RAAN offset from mean Sun (Ω) · LTAN ${formatLtan(orbitDraft.raanOffsetDeg)}`}
                rightIcon={<HelpButtonBase onRequestHelp={onRequestHelp} helpId="raanOffsetDeg" />}
                min={0}
                max={360}
                step={0.01}
                value={orbitDraft.raanOffsetDeg}
                unit="deg"
                onChange={(v) => setOrbitParams(activeOrbit.id, { raanOffsetDeg: clampNumber(v, 0, 360) })}
                onChangeLive={(v) => setOrbitDraft((d) => ({ ...d, raanOffsetDeg: clampNumber(v, 0, 360) }))}
                onCommit={(v) => setOrbitParams(activeOrbit.id, { raanOffsetDeg: clampNumber(v, 0, 360) })}
                decimals={2}
              />

              <SliderRow
                label="Initial Mean Anomaly"
                rightIcon={<HelpButtonBase onRequestHelp={onRequestHelp} helpId="initialMeanAnomalyDeg" />}
                min={0}
                max={360}
                step={0.01}
                value={orbitDraft.initialMeanAnomalyDeg}
                unit="deg"
                onChange={(v) => setOrbitParams(activeOrbit.id, { initialMeanAnomalyDeg: clampNumber(v, 0, 360) })}
                onChangeLive={(v) => setOrbitDraft((d) => ({ ...d, initialMeanAnomalyDeg: clampNumber(v, 0, 360) }))}
                onCommit={(v) => setOrbitParams(activeOrbit.id, { initialMeanAnomalyDeg: clampNumber(v, 0, 360) })}
                decimals={2}
              />
            </div>
          </>
        ) : null}

        <div className="mt-9">
          <button
            type="button"
            className="flex w-full items-center justify-between"
            onClick={() => setCalculateOpen((v) => !v)}
          >
            <span className={SECTION_LABEL}>Derived</span>
            <Chevron open={calculateOpen} />
          </button>
          {calculateOpen ? (
            <div className="mt-3 select-text space-y-1.5 rounded-lg bg-white/5 px-3 py-2.5 text-xs text-white/85 ring-1 ring-inset ring-white/5">
              <div className="flex items-center justify-between gap-3 pb-1">
                <span className={`text-xs font-semibold ${orbitColor(model.orbits.findIndex((o) => o.id === activeOrbit.id)).cls.split(' ')[0]}`}>{activeOrbit.name}</span>
                <HelpButtonBase onRequestHelp={onRequestHelp} helpId="calculate" />
              </div>
              {[
                ['Period', `${derived.periodMin.toFixed(2)} min`],
                ['LTAN', `${derived.ltan}`],
                ['β now (day ' + timeDays.toFixed(1) + ')', `${derived.betaDeg.toFixed(2)}°`],
                ['Eclipse now', `${(derived.eclipseNow * 100).toFixed(1)}% of orbit`],
                ['Eclipse-free if', `|β| ≥ ${derived.betaFree.toFixed(2)}°`],
                ['β range (year)', `${derived.yearly.betaMinDeg.toFixed(1)}° … ${derived.yearly.betaMaxDeg.toFixed(1)}°`],
                ['Yearly sun exposure', `${(derived.yearly.sunExposure * 100).toFixed(2)}%`],
                ['Days with eclipse', `${derived.yearly.eclipseDays.toFixed(0)} / 365`],
                ['Region cone α', `${derived.alphaDeg.toFixed(2)}°`],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-3">
                  <span className="text-white/55">{k}</span>
                  <span className="font-medium tabular-nums text-white/90">{v}</span>
                </div>
              ))}
              <div className="pt-2">
                <div className="text-[10px] font-semibold tracking-[0.08em] text-white/45">β over the year · shaded band = eclipse</div>
                <BetaSparkline orbit={activeOrbit} timeDays={timeDays} colorHex={orbitColor(model.orbits.findIndex((o) => o.id === activeOrbit.id)).hex} />
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-9">
          <button
            type="button"
            className="flex w-full items-center justify-between"
            onClick={() => setTogglesOpen((v) => !v)}
          >
            <span className={SECTION_LABEL}>Toggles</span>
            <Chevron open={togglesOpen} />
          </button>
          {togglesOpen ? (
            <>
              <div className="mt-4 flex items-center justify-between text-xs text-white/80">
                <span>Viewpoint</span>
                <HelpButtonBase onRequestHelp={onRequestHelp} helpId="viewMode" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs" role="radiogroup" aria-label="Viewpoint">
                {[
                  { label: 'Earth-centred', value: 'geo' },
                  { label: 'Sun-centred', value: 'helio' },
                ].map((opt) => {
                  const selected = (activeView.config.toggles.viewMode ?? 'geo') === opt.value
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold text-white/90 outline-none focus:outline-none active:outline-none ${
                        selected ? 'bg-sky-500' : 'bg-white/10 hover:bg-white/15'
                      }`}
                      onClick={() => setViewConfig({ toggles: { ...activeView.config.toggles, viewMode: opt.value } })}
                    >
                      {opt.label}
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-white/80">
                <span>Coordinate Frame</span>
                <HelpButtonBase onRequestHelp={onRequestHelp} helpId="coordinateFrame" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs" role="radiogroup" aria-label="Coordinate Frame">
                {['ECI', 'MSSI'].map((t) => {
                  const selected = coordinateFrameValue === t
                  return (
                    <button
                      key={t}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold text-white/90 outline-none focus:outline-none active:outline-none ${
                        selected ? 'bg-sky-500' : 'bg-white/10 hover:bg-white/15'
                      }`}
                      onClick={() => setViewConfig({ toggles: { ...activeView.config.toggles, coordinateFrame: t } })}
                    >
                      {t}
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-white/80">
                <span>Earth</span>
                <HelpButtonBase onRequestHelp={onRequestHelp} helpId="earthTextureMode" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs" role="radiogroup" aria-label="Earth Texture Mode">
                {[
                  { label: 'Realistic', value: 'realistic' },
                  { label: 'Still', value: 'still' },
                  { label: 'Hidden', value: 'hidden' },
                ].map((opt) => {
                  const selected = (activeView.config.toggles.earthTextureMode ?? 'realistic') === opt.value
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold text-white/90 outline-none focus:outline-none active:outline-none ${
                        selected ? 'bg-sky-500' : 'bg-white/10 hover:bg-white/15'
                      }`}
                      onClick={() => setViewConfig({ toggles: { ...activeView.config.toggles, earthTextureMode: opt.value } })}
                    >
                      {opt.label}
                    </button>
                  )
                })}
              </div>
            </>
          ) : null}
        </div>

        <div className="mt-9">
          <button
            type="button"
            className="flex w-full items-center justify-between"
            onClick={() => setDisplayOpen((v) => !v)}
          >
            <span className={SECTION_LABEL}>Display</span>
            <Chevron open={displayOpen} />
          </button>
          {displayOpen ? (
            <>
              <div className="mt-4 space-y-4 text-xs text-white/85">
                {/* Per-orbit toggles */}
                <div>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between"
                    onClick={() => setDisplayOrbitsOpen((v) => !v)}
                  >
                    <div className={GROUP_LABEL}>Per-orbit</div>
                    <Chevron open={displayOrbitsOpen} className="h-3 w-3 text-white/60" />
                  </button>
                  {displayOrbitsOpen ? (
                    <div className="mt-2 space-y-3">
                      {model.orbits.map((o, idx) => {
                        const colorClass = orbitColor(idx).cls
                        const orbitDisplay = activeView.config.display.orbits[o.id] ?? {}
                        const perOrbitFlags = [
                          { key: 'groundTrack', label: 'Ground Track', helpId: 'groundTrack' },
                          { key: 'satelliteMarker', label: 'Satellite Marker', helpId: 'satelliteMarker' },
                          { key: 'orbitalPlaneRing', label: 'Orbital Plane Ring', helpId: 'orbitalPlaneRing' },
                          { key: 'eclipseSegments', label: 'Eclipse Segments', helpId: 'eclipseSegments', legend: [[`${colorClass.split(' ')[0]} bg-current`, 'sunlit'], [SWATCH.eclipsed, 'in shadow']] },
                          { key: 'raanVector', label: 'RAAN Vector', helpId: 'raanVector' },
                          { key: 'eclipseRegions', label: 'Eclipse Regions', helpId: 'eclipseRegions', legend: [[SWATCH.regionAlways, 'always eclipsed'], [SWATCH.regionSome, 'sometimes'], [SWATCH.regionNever, 'never']] },
                        ]
                        return (
                          <div key={o.id} className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-inset ring-white/5">
                            <div className={`text-xs font-semibold ${colorClass.split(' ')[0]}`}>{o.name}</div>
                            <div className="mt-2 space-y-1.5">
                              {perOrbitFlags.map((flag) => (
                                <div key={flag.key}>
                                  <div className="flex w-full items-center justify-between gap-3">
                                    <button
                                      type="button"
                                      className="flex flex-1 items-center gap-3 text-left"
                                      onClick={() => togglePerOrbitFlag(o.id, flag.key)}
                                    >
                                      <ColorSquareToggle checked={!!orbitDisplay[flag.key]} colorClass={colorClass} />
                                      <span>{flag.label}</span>
                                    </button>
                                    <HelpButtonBase onRequestHelp={onRequestHelp} helpId={flag.helpId} />
                                  </div>
                                  {flag.legend && orbitDisplay[flag.key] ? <Legend items={flag.legend} /> : null}
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ) : null}
                </div>

                {/* Vectors & Curves */}
                <div>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between"
                    onClick={() => setDisplayVectorsOpen((v) => !v)}
                  >
                    <div className={GROUP_LABEL}>Sun &amp; curves</div>
                    <Chevron open={displayVectorsOpen} className="h-3 w-3 text-white/60" />
                  </button>
                  {displayVectorsOpen ? (
                    <div className="mt-2 space-y-2">
                      {[
                        { key: 'analemma', label: 'Analemma', colorClass: SWATCH.analemma, helpId: 'analemma' },
                        { key: 'subSolarPoint', label: 'Sub-Solar Point', colorClass: SWATCH.subSolarPoint, helpId: 'subSolarPoint' },
                        { key: 'sunDirectionLine', label: 'Sun Direction Line', colorClass: SWATCH.sunDirectionLine, helpId: 'sunDirectionLine' },
                        { key: 'terminator', label: 'Terminator', colorClass: SWATCH.terminator, helpId: 'terminator' },
                      ].map((item) => (
                        <div className="flex w-full items-center justify-between gap-3" key={item.key}>
                          <button
                            type="button"
                            className="flex flex-1 items-center gap-3 text-left"
                            onClick={() => toggleDisplayFlag('vectors', item.key)}
                          >
                            <ColorSquareToggle checked={!!activeView.config.display.vectors[item.key]} colorClass={item.colorClass} />
                            <span>{item.label}</span>
                          </button>
                          <HelpButtonBase onRequestHelp={onRequestHelp} helpId={item.helpId} />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>

                {/* Reference Overlays */}
                <div>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between"
                    onClick={() => setDisplayOverlaysOpen((v) => !v)}
                  >
                    <div className={GROUP_LABEL}>Reference</div>
                    <Chevron open={displayOverlaysOpen} className="h-3 w-3 text-white/60" />
                  </button>
                  {displayOverlaysOpen ? (
                    <div className="mt-2 space-y-2">
                      {[
                        { key: 'latLonGrid', label: 'Lat/Lon Grid', colorClass: SWATCH.latLonGrid, helpId: 'latLonGrid' },
                        { key: 'otherFrameAxes', label: 'Frame Axes', colorClass: SWATCH.otherFrameAxes, helpId: 'otherFrameAxes' },
                        { key: 'framePlanes', label: 'Frame Planes', colorClass: SWATCH.framePlanes, helpId: 'framePlanes' },
                        { key: 'labels', label: 'Labels', colorClass: SWATCH.labels, helpId: 'labels' },
                      ].map((item) => (
                        <div className="flex w-full items-center justify-between gap-3" key={item.key}>
                          <button
                            type="button"
                            className="flex flex-1 items-center gap-3 text-left"
                            onClick={() => toggleDisplayFlag('referenceOverlays', item.key)}
                          >
                            <ColorSquareToggle checked={item.key === 'labels' ? activeView.config.display.referenceOverlays.labels !== false : !!activeView.config.display.referenceOverlays[item.key]} colorClass={item.colorClass} />
                            <span>{item.label}</span>
                          </button>
                          <HelpButtonBase onRequestHelp={onRequestHelp} helpId={item.helpId} />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </aside>
  )
}
