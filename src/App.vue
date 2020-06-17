<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from './view/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
</style>
