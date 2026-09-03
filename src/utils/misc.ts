export function numberFormat(n: number): string {
  if (n >= 1_000_000) {
    const val = Math.floor(n / 1_000_000)
    return `${val}M`
  }
  if (n >= 1_000) {
    const val = Math.floor(n / 1_000)
    return `${val}k`
  }
  return `${n}`
}
