<!--侧边栏-->
<template>
 <div class="side-bar">
   <el-menu
     default-active="2"
     class="el-menu-vertical-demo"
     @open="handleOpen"
     @close="handleClose"
     background-color="#545c64"
     text-color="#fff"
     active-text-color="#ffd04b">
     <el-menu-item index="1-3">首页</el-menu-item>
     <el-submenu index="1" v-for="item in matchRoutes" :key="item.id">
       <template slot="title">
         <i class="el-icon-location"></i>
         <span>{{item.name}}</span>
       </template>
       <el-menu-item index="1-3" v-for="item1 in item.children" :key="item1.id"><router-link :to="'/item1.path'">{{item1.name}}</router-link></el-menu-item>
     </el-submenu>
   </el-menu>
 </div>
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
.side-bar {
  background-color: orchid;
  width: 200px;
  height: 100%;
}
</style>
