<!--头部导航栏-->
<template>
  <div class="navbar">
<!--    汉堡按钮-->
    <div class="ham">
      <span class="el-icon-s-fold"></span>
    </div>
<!--    面包屑-->
    <el-breadcrumb class="breadcrumb" separator="/">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="item.index">
        <!--如果是最后一项变成灰色,不是的话是黑色-->
        <span class="last" v-if="index === breadList.length - 1">{{item.name}}</span>
        <span class="no-last" v-else>{{item.name}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
<!--    头像-->
    <div class="avatar">
      <el-avatar :size="40" :src="this.$store.getters.avatar">
      </el-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
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
      console.log(this.$route.matched)
      this.breadList = this.$route.matched
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
  .ham {
    font-size: 40px;
  }
  .breadcrumb {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    text-align: left;
  }
  .avatar {
    margin-top: 10%;
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
}
</style>
