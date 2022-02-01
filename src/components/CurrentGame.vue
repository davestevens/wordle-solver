<template>
  <div>
    <h1>Current Game</h1>
    <button v-on:click="runParse">Get possible words</button>
    <ol>
      <li v-for="(item, index) in possibleWords" :key="index" v-on:click="enterWord(item)">
        {{ item }}
      </li>
    </ol>
    <div v-if="random">
      Random selection:
      <button v-on:click="enterWord(random)">{{random}}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { parse } from '../services/parse'
import { findPossibleWords } from '../services/findPossibleWords'
import { enterWord } from '../services/enterWord'

export default class CompletedGame extends Vue {
  public random: string = ''
  public possibleWords: string[] = []

  runParse (): void {
    const parsed = parse()
    this.possibleWords = findPossibleWords(parsed)
    const random = Math.floor(Math.random() * this.possibleWords.length)
    this.random = this.possibleWords[random]
  }

  enterWord (selectedWord: string): void {
    enterWord(selectedWord)
  }
}
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
