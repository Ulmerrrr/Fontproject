<!--排行榜组件-->
<template>
  <div class="rank">
    <ul>
      <li class="cover" v-for="item in ranklist" :key="item.id">
        <div><img :src="item.coverImgUrl" alt=""></div>
        <div>{{item.description}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'MyRank',
  data () {
    return {
      ranklist: []
    }
  },
  methods: {
    getrank: function () {
      axios.defaults.withCredentials = true
      axios.defaults.baseURL = 'http://localhost:3000/'
      Vue.axios
        .get('/toplist')
        .then((res) => {
          console.log(res.data.list)
          this.ranklist = res.data.list
        })
    }
  },
  mounted () {
    this.getrank()
  }
}
</script>

<style scoped>
ul{
  overflow: scroll;
  height: 30rem;
}
li {
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
img {
  width: 2rem;
  height: 2rem;
}
</style>
