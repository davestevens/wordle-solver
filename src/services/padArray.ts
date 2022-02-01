export const padArray = <T>(array: T[], length: number, fill: T): T[] => {
  if (length < 1) { return [] }
  return array.concat(Array(length).fill(fill)).slice(0, length)
}
