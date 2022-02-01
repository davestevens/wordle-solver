import { timesInArray } from './timesInArray'
import { UNKNOWN } from './types'

export const correctLetters = (positions: number[], characters: string[], letter: string): boolean => {
  return positions.every((position) => {
    if (position === UNKNOWN) {
      return timesInArray(characters, letter) >= positions.length
    }
    return characters[position] === letter
  })
}
