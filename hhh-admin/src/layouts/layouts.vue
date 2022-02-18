<!--页面整体布局-->
<template>
  <div class="app-wrapper">
    <div class="left">
      <side-bar></side-bar>
    </div>
    <div class="right">
      <nav-bar></nav-bar>
      <tabs-view></tabs-view>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar/SideBar'
import NavBar from './components/NavBar/NavBar'
import TabsView from './components/TabsView/TabsView'
import AppMain from './components/AppMain/AppMain'
export default {
  name: 'layouts',
  components: {
    SideBar,
    NavBar,
    TabsView,
    AppMain
  },
  created () {
  },
  data () {
    return {}
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100%;
  background-color: orange;
  position: absolute; /*设置绝对定位，脱离文档流，使背景铺满整个界面*/
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.left {
  width: 200px;
  height: 100%;
}
.right {
  flex: 1;
}
</style>
