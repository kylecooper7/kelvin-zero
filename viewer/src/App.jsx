import { useEffect, useMemo, useRef, useState } from 'react'
import { clampNumber, roundTo } from './utils/number'
import { jsonEqual } from './utils/json'
import { Expand, Hamburger, Pause, Play, Plus, Redo, Restart, Undo } from './icons'
import { formatDayLabel } from './utils/time'
import { ConfirmModal } from './components/ConfirmModal'
import { HelpModal } from './components/HelpModal'
import { GlobeView } from './components/GlobeView'
import { Icon } from './components/Icon'
import { TabSwitch } from './components/TabSwitch'
import { Timeline } from './components/Timeline'
import { Sidebar } from './components/Sidebar'
import { helpContent } from './help/helpContent'
import { useHistoryModel } from './hooks/useHistoryModel'
import { useTimelinePlayback } from './hooks/useTimelinePlayback'
import { useUndoRedoShortcuts } from './hooks/useUndoRedoShortcuts'
import {
  addView as addViewAction,
  applyViewPreset as applyViewPresetAction,
  setOrbitParams as setOrbitParamsAction,
  deleteOrbit as deleteOrbitAction,
  deleteView as deleteViewAction,
  resetViewToSaved as resetViewToSavedAction,
  setActiveViewId as setActiveViewIdAction,
} from './model/actions'
import { createInitialModel } from './model/initialModel'
import { CAMERA_PRESETS, HELIO_CAMERA_PRESETS } from './model/presets'
import { PAPER } from './scene/OrbitScene.js'
import { parseViewerLink } from './utils/deeplink.js'
import { inclinationFromAltitude } from './model/orbit'
import { roundTo as round } from './utils/number'

export default function App() {
  const [active, setActive] = useState('visualizer')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [fullscreen, setFullscreen] = useState(false)
  const [timelineDays, setTimelineDays] = useState(0)
  const [timelinePlaying, setTimelinePlaying] = useState(false)
  const [playbackSeconds, setPlaybackSeconds] = useState(30)
  const [cameraRequest, setCameraRequest] = useState(null)
  const timelineAtEnd = timelineDays >= 365.24 - 1e-6
  const [helpId, setHelpId] = useState(null)

  const { model, setModel, undo, redo, canUndo, canRedo } = useHistoryModel(createInitialModel, { limit: 100 })

  const activeView = useMemo(() => model.views.find((v) => v.id === model.activeViewId) ?? model.views[0], [model])

  const [confirmState, setConfirmState] = useState({ open: false, kind: null, id: null })

  const setActiveViewId = (viewId) => setModel((prev) => setActiveViewIdAction(prev, viewId))

  const addView = () => {
    setModel((prev) => addViewAction(prev))
  }

  const deleteView = (viewId) => {
    setModel((prev) => deleteViewAction(prev, viewId))
  }

  const deleteOrbit = (orbitId) => {
    setModel((prev) => deleteOrbitAction(prev, orbitId))
  }

  const resetViewToSaved = (viewId) => {
    setModel((prev) => resetViewToSavedAction(prev, viewId))
  }

  const requestDeleteView = (viewId) => {
    setConfirmState({ open: true, kind: 'view', id: viewId })
  }

  const requestDeleteOrbit = (orbitId) => {
    setConfirmState({ open: true, kind: 'orbit', id: orbitId })
  }

  const confirmDeleteView = () => {
    if (!confirmState.id || !confirmState.kind) return
    if (confirmState.kind === 'view') deleteView(confirmState.id)
    if (confirmState.kind === 'orbit') deleteOrbit(confirmState.id)
    setConfirmState({ open: false, kind: null, id: null })
  }

  const cancelConfirm = () => {
    setConfirmState({ open: false, kind: null, id: null })
  }

  const requestHelp = (id) => {
    setHelpId(id)
  }

  const closeHelp = () => {
    setHelpId(null)
  }

  const whitepaperMode = active === 'whitepaper'
  const paperCapture = PAPER
  // Viewer-only build (the open-source package): no Whitepaper tab, no PDF button.
  const viewerOnly = import.meta.env.VITE_VIEWER_ONLY === '1'
  const background = whitepaperMode ? 'bg-white' : 'bg-gradient-to-b from-indigo-950 via-black to-black'

  useEffect(() => {
    document.documentElement.classList.toggle('wp-light', whitepaperMode)
    return () => document.documentElement.classList.remove('wp-light')
  }, [whitepaperMode])

  // Remember the whitepaper's scroll position across tab switches.
  const [wpScroll, setWpScroll] = useState(0)
  const changeTab = (tab) => {
    if (tab === active) return
    if (active === 'whitepaper') setWpScroll(window.scrollY)
    setActive(tab)
    if (tab !== 'visualizer') setFullscreen(false)
  }
  useEffect(() => {
    window.scrollTo({ top: active === 'whitepaper' ? wpScroll : 0, behavior: 'instant' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const moveCamera = (key) => {
    if (HELIO_CAMERA_PRESETS[key]) {
      setCameraRequest((prev) => ({ helio: key, nonce: (prev?.nonce ?? 0) + 1 }))
      return
    }
    const c = CAMERA_PRESETS[key]
    if (!c) return
    const len = Math.hypot(c.x, c.y, c.z) || 1
    const k = 4.2 / len
    setCameraRequest((prev) => ({ x: c.x * k, y: c.y * k, z: c.z * k, nonce: (prev?.nonce ?? 0) + 1 }))
  }
  const helioView = (activeView.config.toggles.viewMode ?? 'geo') === 'helio'

  /** Ease the timeline to a day over ~1 s so the scene moves instead of jumping. */
  const glideRef = useRef(0)
  const glideTimeline = (target) => {
    const start = timelineDays
    const t0 = performance.now()
    const id = ++glideRef.current
    const dur = 1000
    const step = (now) => {
      if (glideRef.current !== id) return
      const x = Math.min(1, (now - t0) / dur)
      const k = x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2
      setTimelineDays(roundTo(start + (target - start) * k, 2))
      if (x < 1) window.requestAnimationFrame(step)
    }
    window.requestAnimationFrame(step)
  }

  /** Whitepaper → viewer: apply a view preset (through the views system), optional orbit params, time and camera. */
  const showInViewer = ({ preset, timeDays: t, camera, orbitParams }) => {
    setModel((prev) => {
      let next = prev
      if (orbitParams) {
        const active = next.orbits.find((o) => o.id === next.activeOrbitId) ?? next.orbits[0]
        const patch = { ...orbitParams }
        if (patch.altitudeKm != null) patch.inclinationDeg = round(inclinationFromAltitude(patch.altitudeKm), 2)
        next = setOrbitParamsAction(next, active.id, patch)
      }
      if (preset) next = applyViewPresetAction(next, preset)
      return next
    })
    if (t != null) {
      setTimelinePlaying(false)
      glideTimeline(roundTo(clampNumber(t, 0, 365.24), 2))
    }
    changeTab('visualizer')
    if (camera) window.setTimeout(() => moveCamera(camera), 60)
  }

  // The handlers close over current state; re-registering every render is intended and cheap.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (!paperCapture) return undefined
    window.__k0app = { showInViewer, setModel, setTimelineDays, moveCamera, setCameraRequest }
    return () => { delete window.__k0app }
  })

  // Deep links (?view=…&alt=…&raan=…&day=…&cam=…) open the viewer in a given state — used by the PDF.
  const [deepLinkApplied, setDeepLinkApplied] = useState(false)
  useEffect(() => {
    if (deepLinkApplied || paperCapture) return
    setDeepLinkApplied(true)
    const req = parseViewerLink(window.location.search)
    if (req) window.setTimeout(() => showInViewer(req), 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deepLinkApplied])

  const toggleFullscreen = () => {
    setFullscreen((v) => {
      if (!v) setSidebarOpen(false)
      return !v
    })
  }

  useEffect(() => {
    if (!fullscreen) return undefined
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setFullscreen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [fullscreen])

  useUndoRedoShortcuts({ canUndo, canRedo, undo, redo })

  useTimelinePlayback({
    playing: timelinePlaying,
    setPlaying: setTimelinePlaying,
    valueDays: timelineDays,
    setValueDays: setTimelineDays,
    durationMs: playbackSeconds * 1000,
  })

  if (paperCapture) {
    return (
      <div className="h-dvh w-full bg-white">
        <GlobeView
          coordinateFrame={activeView.config.toggles.coordinateFrame ?? 'MSSI'}
          earthTextureMode={activeView.config.toggles.earthTextureMode ?? 'realistic'}
          viewMode={activeView.config.toggles.viewMode ?? 'geo'}
          orbits={model.orbits}
          displayOrbits={activeView.config.display.orbits}
          timeDays={timelineDays}
          vectors={activeView.config.display.vectors}
          referenceOverlays={activeView.config.display.referenceOverlays}
          cameraRequest={cameraRequest}
        />
      </div>
    )
  }

  return (
    <div className={`flex min-h-dvh ${background} ${whitepaperMode ? '' : 'select-none'}`}>
      <ConfirmModal
        open={confirmState.open}
        title={confirmState.kind === 'orbit' ? 'Delete orbit?' : 'Delete view?'}
        body={(() => {
          if (confirmState.kind === 'orbit') {
            const o = model.orbits.find((oo) => oo.id === confirmState.id)
            return o ? `This will permanently delete “${o.name}”.` : ''
          }
          const v = model.views.find((vv) => vv.id === confirmState.id)
          return v ? `This will permanently delete “${v.name}”.` : ''
        })()}
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onConfirm={confirmDeleteView}
        onCancel={cancelConfirm}
      />
      <HelpModal
        open={!!helpId}
        title={(helpId && helpContent[helpId]?.title) || 'Help'}
        body={helpId ? helpContent[helpId]?.body : ''}
        learnMoreLabel={(helpId && helpContent[helpId]?.learnMoreLabel) || 'Learn more'}
        onLearnMore={() => {
          const target = helpId ? helpContent[helpId]?.learnMoreUrl : undefined
          closeHelp()
          changeTab('whitepaper')
          if (target && target.startsWith('#')) {
            window.setTimeout(() => document.getElementById(target.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
          }
        }}
        onClose={closeHelp}
      />
      {!fullscreen ? (
        whitepaperMode ? (
          null
        ) : (
          <Sidebar
            open={sidebarOpen}
            model={model}
            setModel={setModel}
            timeDays={timelineDays}
            onRequestDeleteOrbit={requestDeleteOrbit}
            onRequestHelp={requestHelp}
          />
        )
      ) : null}

      <div className={`relative flex min-h-dvh flex-1 flex-col ${whitepaperMode ? '' : 'overflow-hidden'}`}>
        {active === 'visualizer' && fullscreen ? (
          <div className="pointer-events-auto absolute right-4 top-4 z-40">
            <button type="button" className="pointer-events-auto" onClick={() => setFullscreen(false)} aria-label="Exit fullscreen">
              <Icon className="text-white/90 hover:bg-white/10">
                <Expand />
              </Icon>
            </button>
          </div>
        ) : null}
        {!fullscreen ? (
          <header className={`z-30 flex items-center justify-between px-4 ${whitepaperMode ? 'sticky top-0 h-24 bg-white/80 pb-2 text-slate-900 backdrop-blur-md [-webkit-backdrop-filter:blur(12px)] [mask-image:linear-gradient(to_bottom,black_calc(100%-14px),transparent)]' : 'relative h-20 text-white'}`}>
            <div className="flex items-center gap-2">
              <button type="button" className="pointer-events-auto" onClick={() => setSidebarOpen((v) => !v)}>
                <Icon className={whitepaperMode ? 'text-slate-800 hover:bg-black/5' : 'text-white/90 hover:bg-white/10'}>
                  <Hamburger />
                </Icon>
              </button>
              {!whitepaperMode ? (
              <>
              <button type="button" className="pointer-events-auto disabled:cursor-default" onClick={undo} disabled={!canUndo} aria-label="Undo" title="Undo (Ctrl/Cmd+Z)">
                <Icon className={`${whitepaperMode ? 'text-slate-800 hover:bg-black/5' : 'text-white/90 hover:bg-white/10'} ${canUndo ? '' : 'opacity-30 hover:bg-transparent'}`}>
                  <Undo />
                </Icon>
              </button>
              <button type="button" className="pointer-events-auto disabled:cursor-default" onClick={redo} disabled={!canRedo} aria-label="Redo" title="Redo (Ctrl/Cmd+Shift+Z)">
                <Icon className={`${whitepaperMode ? 'text-slate-800 hover:bg-black/5' : 'text-white/90 hover:bg-white/10'} ${canRedo ? '' : 'opacity-30 hover:bg-transparent'}`}>
                  <Redo />
                </Icon>
              </button>
              </>
              ) : null}
            </div>

            <div className="absolute left-1/2 -translate-x-1/2">
              {viewerOnly ? (
                <div className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white">Kelvin Zero · Orbit Visualizer</div>
              ) : (
                <TabSwitch active={active} onChange={changeTab} light={whitepaperMode} />
              )}
            </div>

            <div className="flex items-center gap-2">
              {whitepaperMode ? (
              <a
                href="/Kelvin-Zero-Whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`pointer-events-auto inline-flex h-9 items-center gap-1.5 rounded-full px-3 text-xs font-semibold ring-1 ring-inset ${
                  whitepaperMode ? 'bg-slate-900/[0.06] text-slate-800 ring-slate-900/10 hover:bg-slate-900/10' : 'bg-white/10 text-white/90 ring-white/10 hover:bg-white/15'
                }`}
                title="Download the whitepaper as a PDF"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 3v5h5M9 13h6M9 17h6" />
                </svg>
                PDF
              </a>
              ) : null}
              {!whitepaperMode ? (
                <button type="button" className="pointer-events-auto" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
                  <Icon className="text-white/90 hover:bg-white/10">
                    <Expand />
                  </Icon>
                </button>
              ) : null}
            </div>
          </header>
        ) : null}

        {active === 'visualizer' ? (
          <main className={`relative z-10 flex flex-1 flex-col ${fullscreen ? 'pb-0' : 'pb-6'}`}>
            {!fullscreen ? (
              <div className="flex justify-end px-6 pt-2">
                <div className="hidden max-w-full items-start gap-3 sm:flex">
                  <div className="flex flex-1 items-start gap-3 overflow-x-auto pb-3 [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb:hover]:bg-white/30">
                    {model.views.map((v) => {
                      const isActive = v.id === model.activeViewId
                      const dirty = v.savedConfig ? !jsonEqual(v.config, v.savedConfig) : false
                      if (isActive) {
                        return (
                          <span key={v.id} className="inline-flex flex-none items-center gap-2 rounded-full bg-sky-500 px-3 py-1 text-xs font-semibold text-white ring-1 ring-inset ring-white/10">
                            {v.name}
                            {!v.locked || dirty ? (
                              <button
                                type="button"
                                className="text-white/70"
                                aria-label={dirty ? `Reset ${v.name}` : `Delete ${v.name}`}
                                onClick={() => {
                                  if (dirty) {
                                    resetViewToSaved(v.id)
                                    return
                                  }
                                  requestDeleteView(v.id)
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
                          key={v.id}
                          className="inline-flex flex-none items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-inset ring-white/10"
                        >
                          <button
                            type="button"
                            className="hover:text-white"
                            onClick={() => setActiveViewId(v.id)}
                            aria-label={`Select ${v.name}`}
                          >
                            {v.name}
                          </button>
                          {!v.locked ? (
                            <button
                              type="button"
                              className="text-white/60 hover:text-white/80"
                              aria-label={`Delete ${v.name}`}
                              onClick={(e) => {
                                e.stopPropagation()
                                requestDeleteView(v.id)
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
                    onClick={addView}
                    aria-label="Add view"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ) : null}

            <div className={`flex flex-1 flex-col ${fullscreen ? 'px-0 pt-0' : 'px-6 pt-6'}`}>
              <div className="flex flex-1 flex-col">
                <div className="relative flex flex-1">
                  <div className={`absolute inset-0 flex items-center justify-center bg-white/5 ${fullscreen ? '' : 'rounded-2xl ring-1 ring-inset ring-white/10'}`}>
                    <div className={`relative h-full w-full ${fullscreen ? '' : 'overflow-hidden rounded-2xl'}`}>
                      <div className="pointer-events-none absolute left-4 top-4 z-10 flex flex-col items-start gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60">
                        <div className="flex items-center gap-1.5">
                          <span className="rounded-md bg-slate-950/50 px-2 py-1 text-white/85 ring-1 ring-inset ring-white/10">{helioView ? 'Sun-centred · ecliptic' : (activeView.config.toggles.coordinateFrame ?? 'MSSI')}</span>
                          <span className="rounded-md bg-slate-950/50 px-2 py-1 ring-1 ring-inset ring-white/10">{{ still: 'Still Earth', hidden: 'Earth hidden' }[activeView.config.toggles.earthTextureMode ?? 'realistic'] ?? 'Rotating Earth'}</span>
                          <span className="rounded-md bg-slate-950/50 px-2 py-1 tabular-nums ring-1 ring-inset ring-white/10">{formatDayLabel(timelineDays)}</span>
                        </div>
                        {helioView ? (
                          <span className="rounded-md bg-amber-400/10 px-2 py-1 normal-case tracking-normal text-amber-200/90 ring-1 ring-inset ring-amber-300/20">Orbit shape, orientation and timing are real (e = 0.0167) · Earth ≈1000× enlarged · Sun not to scale</span>
                        ) : null}

                      </div>
                      <GlobeView
                        coordinateFrame={activeView.config.toggles.coordinateFrame ?? 'MSSI'}
                        earthTextureMode={activeView.config.toggles.earthTextureMode ?? 'realistic'}
                        viewMode={activeView.config.toggles.viewMode ?? 'geo'}
                        orbits={model.orbits}
                        displayOrbits={activeView.config.display.orbits}
                        timeDays={timelineDays}
                        vectors={activeView.config.display.vectors}
                        referenceOverlays={activeView.config.display.referenceOverlays}
                        cameraRequest={cameraRequest}
                      />
                      <div className={`absolute top-4 z-10 flex items-center gap-1 rounded-md bg-slate-950/50 p-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ring-1 ring-inset ring-white/10 ${fullscreen ? 'right-[4.25rem]' : 'right-4'}`} role="group" aria-label="Camera">
                        {Object.entries(helioView ? HELIO_CAMERA_PRESETS : CAMERA_PRESETS).map(([key, c]) => (
                          <button key={key} type="button" className="rounded px-2 py-1 text-white/60 hover:bg-white/10 hover:text-white" onClick={() => moveCamera(key)} title={`Look from the ${c.label.toLowerCase()}`}>
                            {c.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-auto ${fullscreen ? 'px-6 pb-4 pt-4' : 'px-6 pb-4 pt-6'}`}>
              <div className="flex w-full items-center gap-4 text-white/80">
                <div className="w-[168px] flex-none leading-tight">
                  <div className="text-[11px] font-semibold tabular-nums text-white/90">Day {timelineDays.toFixed(2)}</div>
                  <div className="text-[11px] tabular-nums text-white/50">{formatDayLabel(timelineDays)}</div>
                </div>

                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 ring-1 ring-inset ring-white/10"
                  onClick={() => {
                    if (!timelinePlaying && timelineAtEnd) {
                      setTimelineDays(0)
                      setTimelinePlaying(true)
                      return
                    }
                    setTimelinePlaying((v) => !v)
                  }}
                  aria-label={timelinePlaying ? 'Pause timeline' : timelineAtEnd ? 'Restart timeline' : 'Play timeline'}
                >
                  {timelinePlaying ? <Pause /> : timelineAtEnd ? <Restart /> : <Play />}
                </button>

                <div
                  className="flex-1"
                  onPointerDown={() => {
                    if (timelinePlaying) setTimelinePlaying(false)
                  }}
                >
                  <Timeline
                    valueDays={timelineDays}
                    onChangeDays={(v) => {
                      if (timelinePlaying) setTimelinePlaying(false)
                      setTimelineDays(roundTo(clampNumber(v, 0, 365.24), 2))
                    }}
                  />
                </div>

                <div className="hidden flex-none items-center gap-1 rounded-full bg-white/5 p-0.5 ring-1 ring-inset ring-white/10 sm:flex" role="radiogroup" aria-label="Playback speed">
                  {[
                    [15, '24 d/s', 'Fast: one year in 15 s (Earth spins ~24× per second — rotation strobes)'],
                    [30, '12 d/s', 'Normal: one year in 30 s'],
                    [120, '3 d/s', 'Slow: one year in 2 min'],
                    [2191, '1 d / 6 s', 'Day: one day every 6 s — watch the Earth rotate (a year takes ~36 min)'],
                  ].map(([sec, label, title]) => (
                    <button
                      key={sec}
                      type="button"
                      role="radio"
                      aria-checked={playbackSeconds === sec}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tabular-nums ${playbackSeconds === sec ? 'bg-white/15 text-white' : 'text-white/55 hover:text-white/85'}`}
                      onClick={() => setPlaybackSeconds(sec)}
                      title={title}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </main>
        ) : (
          <main className="relative z-10 flex flex-1 flex-col">
            <Whitepaper model={model} onShowInViewer={showInViewer} />
          </main>
        )}
      </div>
    </div>
  )
}
