<template>
  <div>
    <h1>Completed Game</h1>
    <button v-on:click="onReset">Reset State</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { resetGameState } from '../services/gameState'

export default class CompletedGame extends Vue {
  onReset (): void {
    resetGameState()
    window.location.reload()
  }
}
</script>
