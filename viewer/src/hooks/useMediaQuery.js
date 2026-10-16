import { useEffect, useState } from 'react'

/** True while the media query matches; re-evaluates on resize. */
export function useMediaQuery(query) {
  const get = () => typeof window !== 'undefined' && window.matchMedia(query).matches
  const [matches, setMatches] = useState(get)
  useEffect(() => {
    const mq = window.matchMedia(query)
    const on = () => setMatches(mq.matches)
    mq.addEventListener('change', on)
    on()
    return () => mq.removeEventListener('change', on)
  }, [query])
  return matches
}

/** Phones and small tablets: the sidebars become drawers and the layout stacks. */
export const useIsMobile = () => useMediaQuery('(max-width: 899px)')
