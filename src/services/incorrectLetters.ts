export const incorrectLetters = (positions: number[], characters: string[], letter: string): boolean => {
  return positions.every((position) => characters[position] !== letter)
}
