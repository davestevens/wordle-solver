<template>
  <div>
    <h1>Current Game</h1>
    <button v-on:click="runParse">Get possible words</button>
    <div v-if="possibleWords.length">
      <button v-on:click="randomSelection">Random selection</button>
    </div>
    <ol ref="list">
      <li v-for="(item, index) in possibleWords"
        :key="index"
        :ref="'item' + index"
        :class='{ selected: selected === index }'
        v-on:click="enterWord(item)"
      >
        {{ item }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { parse } from '../services/parse'
import { findPossibleWords } from '../services/findPossibleWords'
import { enterWord } from '../services/enterWord'

export default class CompletedGame extends Vue {
  public possibleWords: string[] = []
  public selected: number = -1;

  public runParse (): void {
    const parsed = parse()
    this.selected = -1
    this.possibleWords = findPossibleWords(parsed)
    this.scrollTo(0)
  }

  public randomSelection (): void {
    this.selected = Math.floor(Math.random() * this.possibleWords.length)
    const element = this.$refs[`item${this.selected}`] as HTMLElement[]
    this.scrollTo(element[0].offsetTop)
  }

  public enterWord (selectedWord: string): void {
    enterWord(selectedWord)
  }

  private scrollTo (value: number): void {
    // eslint-disable-next-line dot-notation
    const list = this.$refs['list'] as HTMLElement
    list.scrollTop = value - list.offsetTop
  }
}
</script>

<style scoped>
ol {
  list-style: none;
  padding: 0;
  font-family: monospace;
  max-height: 200px;
  overflow: auto;
}
li {
  cursor: pointer;
  display: inline-block;
  padding: 8px;
}

li.selected {
  background: var(--color-present);
  color: var(--tile-text-color);
}

li:hover {
  background: var(--color-correct);
  color: var(--tile-text-color);
}
</style>
