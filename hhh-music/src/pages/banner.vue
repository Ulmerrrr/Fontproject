<!--轮播-->
<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item class="swipe-item"
      v-for="(item, index) in BannerList"
      :key="item.id">
      <img :src="item.imageUrl" alt="">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'banner',
  data () {
    return {
      BannerList: []
    }
  },
  methods: {
    getbanner: function () {
      axios.defaults.withCredentials = true
      axios.defaults.baseURL = 'http://localhost:3000/'
      Vue.axios
        .get('/banner')
        .then((res) => {
          // console.log(res.data)
          this.BannerList = res.data.banners
        })
    }
  },
  mounted () {
    // 调用方法获取数据
    this.getbanner()
  }
}
</script>

<style scoped>
.my-swipe{
  width: 100%;
  height: 4rem;
}
.swipe-item img {
  width: 100%;
  height: 4rem;
}

</style>
