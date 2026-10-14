// One palette for the 3-D scene and the sidebar so the chrome and the globe
// read as a single instrument. Hex values are Tailwind's, and each entry also
// carries the Tailwind class pair used by the sidebar swatches.

export const ORBITS = [
  { hex: '#38bdf8', cls: 'text-sky-400 border-sky-400', chip: 'bg-sky-400/90' },
  { hex: '#34d399', cls: 'text-emerald-400 border-emerald-400', chip: 'bg-emerald-400/90' },
  { hex: '#fcd34d', cls: 'text-amber-300 border-amber-300', chip: 'bg-amber-300/90' },
  { hex: '#a78bfa', cls: 'text-violet-400 border-violet-400', chip: 'bg-violet-400/90' },
]
export const orbitColor = (idx) => ORBITS[idx % ORBITS.length]

export const SCENE = {
  sun: '#fbbf24', // amber-400 — sun vector, sub-solar point, lighting
  analemma: '#fde68a', // amber-200 — the Sun's yearly locus / mean-Sun axis
  ecliptic: '#fde68a',
  terminator: '#cbd5e1', // slate-300
  grid: '#ffffff',
  emiAxis: '#a5b4fc', // indigo-300 — vernal equinox
  mssiAxis: '#fde68a',
  eclipsed: '#f43f5e', // rose-500 — shadowed arc of a ring
  regionAlways: [124, 58, 237], // violet-600
  regionSome: [249, 115, 22], // orange-500
  regionNever: [16, 185, 129], // emerald-500
  dU: '#8b5cf6', // violet-500
  dI: '#fb923c', // orange-400
  label: '#e2e8f0',
}

export const SWATCH = {
  analemma: 'text-amber-200 border-amber-200',
  subSolarPoint: 'text-amber-400 border-amber-400',
  sunDirectionLine: 'text-amber-400 border-amber-400',
  terminator: 'text-slate-300 border-slate-300',
  latLonGrid: 'text-slate-400 border-slate-400',
  otherFrameAxes: 'text-indigo-300 border-indigo-300',
  framePlanes: 'text-amber-200 border-amber-200',
  labels: 'text-slate-200 border-slate-200',
  eclipsed: 'bg-rose-500',
  regionAlways: 'bg-violet-600',
  regionSome: 'bg-orange-500',
  regionNever: 'bg-emerald-500',
}
