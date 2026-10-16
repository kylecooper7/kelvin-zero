export function TabSwitch({ active, onChange, light = false }) {
  return (
    <div className={`pointer-events-auto rounded-full p-1 backdrop-blur ${light ? 'bg-slate-900/[0.06] ring-1 ring-inset ring-slate-900/10' : 'bg-white/10'}`}> 
      <div className={`relative grid w-[min(360px,calc(100vw-9.5rem))] grid-cols-2 text-sm font-medium ${light ? 'text-slate-900' : ''}`}>
        <span
          className={`absolute inset-y-0 left-0 w-1/2 rounded-full transition-transform duration-200 ease-out ${
            active === 'whitepaper' ? 'translate-x-full' : 'translate-x-0'
          } bg-sky-500`}
        />
        <button
          className={`relative z-10 rounded-full px-3 py-2.5 sm:px-6 ${
            active === 'visualizer' ? 'text-white' : light ? 'text-slate-700' : 'text-white/80'
          }`}
          onClick={() => onChange('visualizer')}
          type="button"
        >
          Visualizer
        </button>
        <button
          className={`relative z-10 rounded-full px-6 py-2.5 ${
            active === 'whitepaper' ? 'text-white' : light ? 'text-slate-700' : 'text-white/80'
          }`}
          onClick={() => onChange('whitepaper')}
          type="button"
        >
          Whitepaper
        </button>
      </div>
    </div>
  )
}
