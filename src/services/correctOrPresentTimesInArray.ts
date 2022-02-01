import { CORRECT, PRESENT } from './types'

export const correctOrPresentTimesInArray = (array: string[], results: string, value: string): number => {
  return array.map((c, index) => c === value ? results[index] : null).filter((v) => v && [PRESENT, CORRECT].indexOf(v) > -1).length
}
