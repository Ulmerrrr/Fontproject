<!--头部导航栏-->
<template>
  <div class="navbar">
<!--    汉堡按钮-->
    <HamBurger></HamBurger>
<!--    面包屑-->
    <BreadCrumb></BreadCrumb>
<!--    头像-->
    <Avatar></Avatar>
<!--    全屏切换-->
    <ScreenFull></ScreenFull>
  </div>
</template>

<script>
// 引入汉堡按钮组件
import HamBurger from './components/HamBurger'
// 引入面包屑组件
import BreadCrumb from './components/BreadCrumb'
// 引入头像组件
import Avatar from './components/Avatar'
// 引入全屏切换组件
import ScreenFull from './components/ScreenFull'
export default {
  name: 'NavBar',
  components: {
    HamBurger,
    BreadCrumb,
    Avatar,
    ScreenFull
  },

  data () {
    return {
    }
  },
  methods: {
    // 获取用户信息
    getInfo: function () {
      this.$store.dispatch('getInfo')
    }
  },
  mounted () {
    // 调用方法获取信息
    this.getInfo()
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between; /*flex项目之间隔开*/
  align-items: center;
  flex-wrap: nowrap;
  .fullscreen {
    font-size: 20px;
    flex: 1;
  }
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
