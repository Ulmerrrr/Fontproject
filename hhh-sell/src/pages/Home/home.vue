<template>
<div class="home">
  <p v-if="!username">
    <span><router-link to="/my/login">请登录</router-link></span>
    <span><router-link to="/my/register">免费注册</router-link></span>
  </p>
  <p v-else>
    <span>{{username}}</span>
    <span @click="logout">退出登陆</span>
  </p>
  <van-swipe class="my-swipe" :autoplay="1000" indicator-color="white">
    <van-swipe-item v-for="item in Banner" :key="item.id">
      <img :src="item.imgUrl" alt="">
    </van-swipe-item>
  </van-swipe>
</div>
</template>

<script>
// import axios from 'axios' // 用axios原生的语法获取数据，要在每个组件中引入axios，比较麻烦。
// import requests from '../../api/mockserver' // 直接引入封装好的axios来使用
// import { reqGetBannerList } from '../../api' // 直接引入统一管理的接口，来使用
export default {
  name: 'home',
  components: {},
  data () {
    return {
      Banner: []
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
    },
    // 获取轮播图数据，有很多方法，下面一一介绍
    async GetBanner () {
      // 方法一：用axios原生的语法，要在每个组件中引入axios，比较麻烦。
      // axios.get('/mock/banner').then((res) => {
      //   this.Banner = res.data.data
      // })
      // 方法二：直接使用挂载到原型上的axios，不用在每个组件中引入axios
      // this.$axios.get('/mock/banner').then((res) => {
      //   this.Banner = res.data.data
      // })
      // 方法三：直接引入封装好的axios来使用
      // requests.get('/banner').then((res) => {
      //   this.Banner = res.data
      // })
      // 方法四：使用挂载到原型上封装好的axios，不用每次使用都在组件中引入封装好的axios
      // this.$requests.get('/banner').then((res) => {
      //   this.Banner = res.data
      // })
      // 方法五：使用await和async将异步转为同步
      // const res = await this.$requests.get('/banner')
      // this.Banner = res.data
      // 方法六：先引入src/api/index.js中统一管理的接口然后直接使用
      // reqGetBannerList().then((res) => {
      //   console.log(res.data)
      //   this.Banner = res.data
      // })
      // 方法七：使用挂载到vue原型上的统一接口来获取数据
      // this.$api.reqGetBannerList().then((res) => {
      //   this.Banner = res.data
      // })
      // 方法八：使用await和async将异步转为同步
      const res = await this.$api.reqGetBannerList()
      this.Banner = res.data
    }
  },
  computed: {
    // 从getters中获取用户信息展示在首页
    username: function () {
      return this.$store.getters.username
    }
  },
  mounted () {
    // 调用方法，获取轮播图数据
    this.GetBanner()
    // 判断一下本地存储中是否有token，有的话向服务器要用户信息（二次登录需要带上token）
    // 也就是说只有在登陆后才能展示用户信息
    if (localStorage.getItem('data')) {
    // 从服务获取用户信息展示在首页
      this.$store.dispatch('userinfo')
    }
  }
}
</script>

<style lang="" scoped>
img {
  width: 5rem;
  height: 9rem;
}
.my-swipe  {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  position: fixed;
  top: 5rem;
  left: -5rem;
}
</style>
