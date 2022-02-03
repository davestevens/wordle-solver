<template>
  <div>
    <header>Wordle Solver</header>
    <CurrentGame v-if="gameIsInProgress" :rowIndex="currentRow" />
    <CompletedGame v-else />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import CurrentGame from './components/CurrentGame.vue'
import CompletedGame from './components/CompletedGame.vue'
import { getCurrentRow, isGameInProgress } from './services/gameState'

@Options({
  components: {
    CurrentGame,
    CompletedGame
  }
})
export default class App extends Vue {
  public gameIsInProgress: boolean = isGameInProgress()
  public currentRow: number = getCurrentRow()
  private interval: number | undefined

  public mounted (): void {
    this.interval = setInterval(() => this.queryGameState(), 2000)
  }

  public unmounted (): void {
    clearInterval(this.interval)
  }

  private queryGameState (): void {
    this.gameIsInProgress = isGameInProgress()
    this.currentRow = getCurrentRow()
  }
}
</script>

<style>
#wordle-solver-app {
  position: absolute;
  top: 0;
  right: 0;
  width: 335px;
  color: var(--color-tone-1);
  user-select: none;
}

header {
  color: var(--color-tone-1);
  border-bottom: 1px solid var(--color-tone-4);
  height: var(--header-height);
  font-weight: 700;
  font-size: 24px;
  line-height: var(--header-height);
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 8px;
}
</style>
