export function deepClone(value) {
  return JSON.parse(JSON.stringify(value))
}

export function jsonEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}
