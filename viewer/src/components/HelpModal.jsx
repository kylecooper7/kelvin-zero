export function HelpModal({ open, title, body, learnMoreLabel = 'Learn more', learnMoreUrl, onLearnMore, onClose }) {
  if (!open) return null
  const canLearnMore = !!(onLearnMore || learnMoreUrl)
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <button type="button" className="absolute inset-0 bg-black/50" onClick={onClose} aria-label="Close modal" />
      <div className="relative mx-6 w-full max-w-md rounded-2xl bg-slate-950/90 p-5 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur">
        <div className="text-sm font-semibold">{title}</div>
        {body ? <div className="mt-2 select-text text-sm text-white/80">{body}</div> : null}
        <div className="mt-5 flex justify-end gap-2">
          <button type="button" className="rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/15" onClick={onClose}>
            Close
          </button>
          <button
            type="button"
            className={`rounded-lg px-3 py-2 text-sm font-semibold text-white ${
              canLearnMore ? 'bg-sky-500 hover:bg-sky-500/90' : 'bg-white/10 text-white/50'
            }`}
            onClick={() => {
              if (onLearnMore) onLearnMore()
              else if (learnMoreUrl) window.open(learnMoreUrl, '_blank', 'noopener,noreferrer')
            }}
            disabled={!canLearnMore}
          >
            {learnMoreLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
