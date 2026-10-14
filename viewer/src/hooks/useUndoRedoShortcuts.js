import { useEffect } from 'react'

export function useUndoRedoShortcuts({ canUndo, canRedo, undo, redo }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      const target = e.target
      const tag = target?.tagName
      const isEditable =
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT' ||
        target?.isContentEditable

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
