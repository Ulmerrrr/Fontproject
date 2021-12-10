<template>
 <div id="app">
   <MyHeader></MyHeader>
   <MyTab></MyTab>
   <keep-alive><router-view></router-view></keep-alive>
   <MyPlayer></MyPlayer>
 </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyTab from './components/MyTab'
import MyPlayer from './components/MyPlayer'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyTab,
    MyPlayer
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
