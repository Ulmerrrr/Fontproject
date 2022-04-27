<!--头部面包屑导航栏-->
<template>
  <el-breadcrumb class="navbar" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      :to="{ path: '/' }">{{breadList.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      // 当前页面的路由
      breadList: {}
    }
  },
  watch: {
    // 监听路由变化，如果变化了就执行函数，更新面包屑导航
    $route: function () {
      // 打印当前路由的信息
      console.log(this.$route.meta)
      this.breadList = this.$route.meta
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  text-align: left;
}
</style>
