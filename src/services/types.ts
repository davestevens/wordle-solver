export const ABSENT = 'absent'
export const CORRECT = 'correct'
export const PRESENT = 'present'
export const UNKNOWN = -1

export interface IGuessLetter {
    correct: number[];
    incorrect: number[];
}

export type GuessLetters = { [key: string]: IGuessLetter }
