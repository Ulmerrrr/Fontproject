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
import {reqGetBannerList} from '../../api'
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
    reqGetBannerList().then((res) => {
      // console.log(res.data)
      this.Banner = res.data
    })
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
