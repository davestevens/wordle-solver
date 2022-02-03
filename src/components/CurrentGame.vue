<template>
  <div>
    <div v-if="possibleWords.length">
      <span>{{possibleWords.length}} <span v-if="possibleWords.length > 1">possibilities</span><span v-else>possibility</span></span>:
      <button v-on:click="randomSelection">Random selection</button>
    </div>
    <ol ref="list"
      :class='{ disabled: !!entering }'
    >
      <li v-for="(item, index) in possibleWords"
        :key="index"
        :ref="'item' + index"
        :class='{ selected: selected === index }'
        v-on:click="enterWord(item)"
      >
        {{ item }}
      </li>
    </ol>
    <div v-if="entering">Entering word: <span class="entering">{{entering}}</span></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { parse } from '../services/parse'
import { findPossibleWords } from '../services/findPossibleWords'
import { enterWord } from '../services/enterWord'

@Options({
  props: {
    rowIndex: Number
  }
})
export default class CompletedGame extends Vue {
  public possibleWords: string[] = []
  public selected: number = -1;
  public entering: string = '';

  public created (): void {
    this.$watch('rowIndex', () => {
      this.resetState()
    })
  }

  public mounted (): void {
    this.resetState()
  }

  public randomSelection (): void {
    this.selected = Math.floor(Math.random() * this.possibleWords.length)
    const element = this.$refs[`item${this.selected}`] as HTMLElement[]
    this.scrollTo(element[0].offsetTop)
  }

  public enterWord (selectedWord: string): void {
    this.entering = selectedWord
    enterWord(selectedWord)
  }

  private resetState (): void {
    this.entering = ''
    this.runParse()
    this.scrollTo(0)
  }

  private runParse (): void {
    const parsed = parse()
    this.selected = -1
    this.possibleWords = findPossibleWords(parsed)
  }

  private scrollTo (value: number): void {
    // eslint-disable-next-line dot-notation
    const list = this.$refs['list'] as HTMLElement
    list.scrollTop = value - list.offsetTop
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

ol {
  list-style: none;
  padding: 0;
  font-family: monospace;
  max-height: 200px;
  overflow: auto;
}

ol.disabled {
  pointer-events: none;
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

.entering {
  font-weight: bold;
  text-transform: uppercase;
}
</style>
