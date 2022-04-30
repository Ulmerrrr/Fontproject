<!--页面整体布局-->
<template>
    <el-container>
      <el-aside :width="sideBarHideWidth">
        <side-bar></side-bar>
      </el-aside>
<!--      动态绑定class类,如果this.$store.getters.asideCollapse为true，那么绑定container类-->
      <el-container :class="{container: !this.$store.getters.asideCollapse}">
        <el-header class="header">
          <nav-bar></nav-bar>
          <tabs-view></tabs-view>
        </el-header>
        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
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
    return {
      // 菜单栏隐藏时宽度
      sideBarHideWidth: '50px'
    }
  },
  methods: {},
  mounted () {
    if (this.$store.getters.asideCollapse) {
      this.sideBarHideWidth = ''
    } else {
      this.sideBarHideWidth = '50px'
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.header {
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
}
/*内容区域宽度*/
.container {
  width: calc(100% - 50px);
}

</style>
