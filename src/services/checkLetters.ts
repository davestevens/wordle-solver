import { correctLetters } from './correctLetters'
import { incorrectLetters } from './incorrectLetters'
import { GuessLetters } from './types'

export const checkLetters = (guessLetters: GuessLetters, characters: string[]): boolean => {
  return Object.entries(guessLetters).every(([letter, details]) => {
    return correctLetters(details.correct, characters, letter) && incorrectLetters(details.incorrect, characters, letter)
  })
}
