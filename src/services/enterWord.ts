export const enterWord = (word: string): void => {
  word.split('').forEach((letter) => {
    window?.dispatchEvent(new KeyboardEvent('keydown', { key: letter }))
  })
  window?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
}
