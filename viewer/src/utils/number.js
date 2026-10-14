export function clampNumber(value, min, max) {
  if (Number.isNaN(value)) return min
  return Math.min(max, Math.max(min, value))
}

export function roundTo(value, decimals) {
  return Number(Number(value).toFixed(decimals))
}
