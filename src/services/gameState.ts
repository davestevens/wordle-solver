interface IGameState {
    boardState: string[];
    evaluations: string[];
    gameStatus: string;
    rowIndex: number;
}

export const getGameState = (): IGameState => {
  return JSON.parse(window.localStorage.gameState)
}

export const isGameInProgress = (): boolean => {
  return getGameState()?.gameStatus === 'IN_PROGRESS'
}

export const getCurrentRow = (): number => {
  return getGameState()?.rowIndex
}

export const resetGameState = (): void => {
  window.localStorage.removeItem('gameState')
}
