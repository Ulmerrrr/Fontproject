<!--歌手详情列表(点击【歌手组件]里的列表)-->
<template>
<p>歌手详情列表</p>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

export default {
  name: 'singerdetail',
  components: {},
  data () {
    return {}
  },
  methods: {
    getlist: function () {
      axios.defaults.withCredentials = true
      axios.defaults.baseURL = 'http://localhost:3000/'
      const id = this.$route.params.aa // 动态路由传过来的参数
      Vue.axios
        .get('/artist/list?cat=id')
        .then((res) => {
          console.log(res.data)
        })
    }
  },
  mounted () {
    this.getlist()
  }
}
</script>

<style lang="" scoped>
p{
  width: 100%;
  height: 30rem;
  background-color: gray;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}
</style>
