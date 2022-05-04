<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.index">
      <!--如果是最后一项变成灰色,不是的话是黑色-->
      <span class="last" v-if="index === breadList.length - 1">{{item.name}}</span>
      <span class="no-last" v-else>{{item.name}}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'BreadCrumb',
  data () {
    return {
      // 当前页面的路由
      breadList: []
    }
  },
  watch: {
    // 监听路由变化，如果变化了就执行函数，更新面包屑导航
    $route: function () {
      // 打印当前路由的信息,matched是一个数组，包含了当前页面所有匹配的路由,父子路由各占数组一个位置
      // console.log(this.$route.matched)
      this.breadList = this.$route.matched
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;/*从头对齐*/
  align-items: center;
  flex-wrap: nowrap;
  font-size: 15px;
  flex: 9;
}
.last {
  color: gray;
  cursor: text;
}
.no-last {
  color: black;
  font-weight: bold;
  cursor: pointer;
}
</style>
