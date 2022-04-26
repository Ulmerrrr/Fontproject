<!--侧边栏-->
<template>
   <!--router是否使用vue-router的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转-->
   <el-menu
     default-active="2"
     class="el-menu-vertical-demo"
     @open="handleOpen"
     @close="handleClose"
     background-color="#545c64"
     text-color="#fff"
     active-text-color="#ffd04b"
     router>
     <!--router是否使用vue-router的模式，启用该模式会在激活导航时以index作为path进行路由跳转-->
     <el-menu-item index="/home">
       <i class="el-icon-menu"></i>
       <span slot="title">首页</span>
     </el-menu-item>
     <el-submenu index="1-1" v-for="item in matchRoutes" :key="item.id">
       <template slot="title">
         <i class="el-icon-location"></i>
         <span>{{item.name}}</span>
       </template>
       <!--router是否使用vue-router的模式，启用该模式会在激活导航时以index作为path进行路由跳转-->
<!--       字符串拼接，变量不用加引号，这里还可以用模板字符串的方式，比如：`${item.id}/${item1.name}`，注意这里是反引号，不是单引号-->
       <el-menu-item :index="item.path + '/' + item1.path" v-for="item1 in item.children" :key="item1.id">{{item1.name}}</el-menu-item>
     </el-submenu>
   </el-menu>
</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  computed: {
    matchRoutes: function () {
      return this.$store.getters.matchRoutes
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
</style>
