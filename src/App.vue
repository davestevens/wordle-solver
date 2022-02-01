<template>
  <div v-if="gameIsInProgress">
    <CurrentGame />
  </div>
  <div v-else>
    <CompletedGame />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import CurrentGame from './components/CurrentGame.vue'
import CompletedGame from './components/CompletedGame.vue'
import { isGameInProgress } from './services/gameState'

@Options({
  components: {
    CurrentGame,
    CompletedGame
  }
})
export default class App extends Vue {
  gameIsInProgress = isGameInProgress()
}
</script>

<style>
#wordle-solver-app {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  max-height: 100%;
  overflow: auto;
}
</style>
