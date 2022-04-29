<!--头部导航栏-->
<template>
  <div class="navbar">
<!--    汉堡按钮-->
    <div class="ham" @click="toggleClick">
      <span :class="icon"></span>
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
      // 汉堡按钮
      icon: 'el-icon-s-fold',
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
  },
  methods: {
    // 获取用户信息
    getInfo: function () {
      this.$store.dispatch('getInfo')
    },
    // 点击汉堡按钮,更改按钮图表和侧边栏状态
    toggleClick: function () {
      this.$store.commit('asideCollapse')
      // 三元表达式判断一下侧边栏状态，根据这个状态更改图表
      this.$store.getters.asideCollapse ? this.icon = 'el-icon-s-unfold' : this.icon = 'el-icon-s-fold'
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
  .ham {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    flex: 0.5;
  }
  .breadcrumb {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;/*从头对齐*/
    align-items: center;
    flex-wrap: nowrap;
    font-size: 15px;
    flex: 9;
  }
  .avatar {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 0.5;
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
