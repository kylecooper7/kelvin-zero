const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** Calendar label for a timeline day (days since 2000-01-01 12:00). */
export function formatDayLabel(days) {
  const epoch = Date.UTC(2000, 0, 1, 12)
  const t = new Date(epoch + days * 86400000)
  const hh = String(t.getUTCHours()).padStart(2, '0')
  const mm = String(t.getUTCMinutes()).padStart(2, '0')
  return `${t.getUTCDate()} ${MONTHS[t.getUTCMonth()]} ${hh}:${mm} UT`
}
