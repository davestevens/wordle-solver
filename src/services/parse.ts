import { correctOrPresentTimesInArray } from './correctOrPresentTimesInArray'
import { getGameState } from './gameState'
import { padArray } from './padArray'
import { ABSENT, CORRECT, GuessLetters, PRESENT, UNKNOWN } from './types'

interface IStateItem {
    minCount: number;
    positions: Set<number>;
    incorrectPositions: Set<number>;
}

export const parse = (): GuessLetters => {
  const gameState = getGameState()
  const state: { [key: string]: IStateItem } = {}

  for (let i = 0; i < gameState.rowIndex; ++i) {
    const characters = gameState.boardState[i].split('')

    characters.forEach((character, index) => {
      if (!state[character]) {
        state[character] = { minCount: -1, positions: new Set(), incorrectPositions: new Set() }
      }

      switch (gameState.evaluations[i][index]) {
        case CORRECT:
          state[character].minCount = (state[character].minCount === UNKNOWN) ? 1 : state[character].minCount
          state[character].positions.add(index)
          break
        case PRESENT: {
          const count = correctOrPresentTimesInArray(characters, gameState.evaluations[i], character)
          state[character].minCount = (state[character].minCount === UNKNOWN) ? 1 : Math.min(state[character].minCount + 1, count)
          state[character].incorrectPositions.add(index)
        }
          break
        case ABSENT:
          state[character].incorrectPositions.add(index)
          break
      }
    })
  }

  return Object.entries(state).reduce((map, [key, value]) => {
    map[key] = {
      correct: padArray([...value.positions], value.minCount, UNKNOWN),
      incorrect: [...value.incorrectPositions]
    }
    return map
  }, {} as GuessLetters)
}
