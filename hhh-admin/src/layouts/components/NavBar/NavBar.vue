<!--头部面包屑导航栏-->
<template>
<div class="navbar">
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {}
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
}
</style>
