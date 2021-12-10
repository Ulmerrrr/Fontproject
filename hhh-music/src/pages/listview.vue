<!--热门歌单推荐【歌手组件的热门】-->
<template>
<div>
  <h3>热门</h3>
  <div>
      <ul>
                             <!--    子组件listview以自定义事件的形式向父组件Mysinger传值“item"-->
        <li v-for="item in singlist" :key="item.id" @click="selectitem(item)">
          <p> {{item.name}}</p>
          <img :src="item.picUrl" alt="">
        </li>
      </ul>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
export default {
  name: 'listview',
  data () {
    return {
      singlist: []
    }
  },
  methods: {
    getlist: function () {
      axios.defaults.withCredentials = true
      axios.defaults.baseURL = 'http://localhost:3000/'
      Vue.axios
        .get('/artist/list')
        .then((res) => {
          // console.log(res.data.artists)
          this.singlist = res.data.artists
        })
    },
    selectitem: function (item) {
      // console.log(item.id)
      this.$emit('select', item) // 子组件的自定义事件使用$emit自动触发select事件，然后在父组件监听
    }
  },
  mounted () {
    this.getlist()
  }
}
</script>

<style lang="" scoped>
ul{
  overflow: scroll;
  height: 30rem;
}
li {
  width: 5rem;
  height: 2rem;
}
img{
  width: 4rem;
  height: 2rem;
}
</style>
