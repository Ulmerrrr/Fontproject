<template>
  <div id="app">
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import Tab from './components/tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style>
#app {
}
</style>
