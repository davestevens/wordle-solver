import { checkLetters } from './checkLetters'
import { intersection } from './intersection'
import { GuessLetters } from './types'
import { words } from '../data/words'

export const findPossibleWords = (guessLetters: GuessLetters) => {
  const incorrectLetters = Object.entries(guessLetters).filter(([_key, value]) => value.incorrect.length > 0 && value.correct.length < 1).map(([key]) => key)
  return words.filter((word) => {
    const characters = word.split('')
    return intersection(characters, incorrectLetters).length <= 0 && checkLetters(guessLetters, characters)
  })
}
