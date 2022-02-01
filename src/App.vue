<template>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from './components/HelloWorld.vue'

@Options({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
</script>

<style>
#wordle-solver-app {
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
}
</style>
