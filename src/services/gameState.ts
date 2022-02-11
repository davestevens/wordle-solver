interface IGameState {
    boardState: string[];
    evaluations: string[];
    gameStatus: string;
    rowIndex: number;
}

export const getGameState = (): IGameState => {
  return JSON.parse(window.localStorage['nyt-wordle-state'])
}

export const isGameInProgress = (): boolean => {
  return getGameState()?.gameStatus === 'IN_PROGRESS'
}

export const resetGameState = (): void => {
  window.localStorage.removeItem('nyt-wordle-state')
}
