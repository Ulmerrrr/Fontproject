<!--推荐页面组件-->
<template>
    <div class="recommend">
      <banner></banner>
      <div class="recommend-list">
        <h2>热门歌单推荐</h2>
        <ul>
          <li v-for="item in HotList"
              :key="item.id">
            <div class="icon"><img v-lazy="item.picUrl" alt=""></div>
            <div class="text"><p>{{item.name}}</p></div>
          </li>
        </ul>
      </div>
      <div class="loading" v-show="!HotList.length">
        <loading></loading>
      </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Banner from '../pages/banner'
import Loading from '../pages/loading'
export default {
  name: 'MyRecommend',
  components: {
    Banner,
    Loading
  },
  data () {
    return {
      HotList: []
    }
  },
  methods: {
    gethot: function () {
      axios.defaults.withCredentials = true
      axios.defaults.baseURL = 'http://localhost:3000/'
      Vue.axios
        .get('/personalized')
        .then((res) => {
          // console.log(res.data.result)
          this.HotList = res.data.result
        })
    }
  },
  mounted () {
    // 加一个定时方便看loading的效果
    setTimeout(() => {
      this.gethot() // mounted中调用方法，获取数据
    }, 1000)
  }
}
</script>

<style scoped>
.recommend {
  position: relative;
}
.recommend-list {
  background-color: gray;
  color: white;
  margin-top: -0.3rem;
}
ul {
  /*overflow-scrolling: touch;*/
  height: 30rem;
  overflow: scroll;
}
h2 {
  text-align: center;
  margin: 0.3rem;
  letter-spacing: 0.1rem;
  color: goldenrod;
}
li {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}
.icon {
  width: 2.5rem;
  height: 2.5rem;
  flex: 2;
  padding: 0.3rem;
}
img {
  width: 2.5rem;
  height: 2.5rem;
}
.text {
  flex: 4;

}
.loading {
  position: absolute;
  top: 5rem;
  left: 2rem;
}
</style>
