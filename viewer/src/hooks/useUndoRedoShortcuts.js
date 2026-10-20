import { useEffect } from 'react'

export function useUndoRedoShortcuts({ canUndo, canRedo, undo, redo }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      const target = e.target
      const tag = target?.tagName
      // only text-entry fields keep the shortcut for themselves; a slider, checkbox or button that still
      // has focus after a click must not block undo
      const textInput = tag === 'INPUT' && !['range', 'checkbox', 'radio', 'button', 'submit', 'color'].includes(target.type)
      const isEditable = textInput || tag === 'TEXTAREA' || tag === 'SELECT' || target?.isContentEditable

      if (isEditable) return

      const key = String(e.key).toLowerCase()
      const mod = e.metaKey || e.ctrlKey
      if (!mod) return

      if (key === 'z' && e.shiftKey) {
        if (canRedo) {
          e.preventDefault()
          redo()
        }
        return
      }

      if (key === 'z') {
        if (canUndo) {
          e.preventDefault()
          undo()
        }
        return
      }

      if (key === 'y') {
        if (canRedo) {
          e.preventDefault()
          redo()
        }
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [canUndo, canRedo, undo, redo])
}
