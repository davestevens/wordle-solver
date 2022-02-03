<template>
  <div>
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

<style scoped>
button {
  display: inline-block;
  font-weight: bold;
  cursor: pointer;
  background-color: var(--key-bg);
  color: var(--key-text-color);
  text-transform: uppercase;
}
</style>
