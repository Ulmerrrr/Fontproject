<template>
  <div id="app">
    <HelloWord></HelloWord>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
