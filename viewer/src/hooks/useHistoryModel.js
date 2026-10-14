import { useCallback, useMemo, useState } from 'react'
import { jsonEqual } from '../utils/json'

export function useHistoryModel(makeInitialModel, { limit = 100 } = {}) {
  const [history, setHistory] = useState(() => ({
    past: [],
    present: makeInitialModel(),
    future: [],
  }))

  const model = history.present

  const setModel = useCallback(
    (updater) => {
      setHistory((h) => {
        const next = typeof updater === 'function' ? updater(h.present) : updater
        if (jsonEqual(next, h.present)) return h
        const past = [...h.past, h.present]
        return {
          past: past.length > limit ? past.slice(past.length - limit) : past,
          present: next,
          future: [],
        }
      })
    },
    [limit],
  )

  const undo = useCallback(() => {
    setHistory((h) => {
      if (!h.past.length) return h
      const previous = h.past[h.past.length - 1]
      return {
        past: h.past.slice(0, -1),
        present: previous,
        future: [h.present, ...h.future],
      }
    })
  }, [])

  const redo = useCallback(() => {
    setHistory((h) => {
      if (!h.future.length) return h
      const next = h.future[0]
      return {
        past: [...h.past, h.present],
        present: next,
        future: h.future.slice(1),
      }
    })
  }, [])

  const canUndo = history.past.length > 0
  const canRedo = history.future.length > 0

  return useMemo(
    () => ({
      history,
      model,
      setModel,
      undo,
      redo,
      canUndo,
      canRedo,
    }),
    [history, model, setModel, undo, redo, canUndo, canRedo],
  )
}
