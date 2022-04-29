<!--侧边栏-->
<template>
   <!--router是否使用vue-router的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转-->
   <el-menu
     default-active="2"
     class="el-menu-vertical-demo"
     @open="handleOpen"
     @close="handleClose"
     background-color="#191970"
     text-color="#fff"
     active-text-color="#ffd04b"
     :collapse="this.$store.getters.asideCollapse"
     unique-opened
     router>
     <!--router是否使用vue-router的模式，启用该模式会在激活导航时以index作为path进行路由跳转-->
<!--     collapse：控制菜单栏的展开和折叠-->
     <el-menu-item index="/home">
       <i class="el-icon-menu"></i>
       <span slot="title">首页</span>
     </el-menu-item>
<!--     这里的index和key的作用类似，可以作为当前被选中元素的唯一表示-->
<!--     可以通过index和key来设置当前被选中的菜单项，不至于点击某一个菜单项后，其他菜单项的active状态也被激活-->
     <el-submenu :index="item.name" v-for="item in matchRoutes" :key="item.name">
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
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
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
/*菜单文本左对齐*/
.el-menu-vertical-demo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  overflow: hidden;
}
/*overflow: hidden去除滚动条*/
</style>
