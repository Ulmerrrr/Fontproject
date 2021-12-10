<template>
<div class="container">
<!--  标题-->
  <div class="header">天气预报</div>
<!--  搜索框-->
  <div class="search">
    <input
      type="text"
      placeholder="请输入正确的城市/县城名称"
      v-model = "city"
      @keyup.enter="searchWeather"
    >
<!--    <button @click="searchWeather" type="button">搜索</button>-->
    <van-button round type="info" @click="searchWeather">搜索</van-button>
  </div>
<!--  天气展示-->
  <div class="show">
    <ul>
      <li v-for="(item,index) in weatherList" :key="index">
        <h3>{{item.type}}</h3>
        <p>{{ item.high }}</p>
        <p>{{ item.low }}</p>
        <p>{{ item.fengxiang }}</p>
        <p>{{ item.date }}</p>
      </li>
    </ul>
  </div>
<!--  温馨提示-->
  <transition name="slide-fade">
    <div class="reminder" v-show="ishow">
      <h1>温馨提示</h1>
      <p>{{reminder}}</p>
    </div>

  </transition>


</div>
</template>

<script>
import Vue from "vue";
import axios from 'axios';


export default {
  name: "home",
  data() {
    return {
      city: "苏州",
      weatherList: [],
      reminder:"",
      ishow: false
    }
  },
  methods:{
    searchWeather: function (city) {
      axios.defaults.withCredentials = true
      // axios.defaults.baseURL = 'http://localhost:3000/'
      Vue.axios
        .get('http://localhost:3000/playlist/hot')
        .then((res) => {
        console.log(res.data)
          // this.weatherList = res.data.data.forecast;
          // this.reminder = res.data.data.ganmao;
          // this.ishow = true;
      })
      // .catch(function (error) {
      //   alert("请输入正确的城市/县城")
      // })
    }
  }

}
</script>

<style scoped>
.container{
  width: 100%;
  height: 800px;
  background-color: gray;
  margin: 100px auto;
}
.header{
  width: 100%;
  height: 80px;
  font-size: 50px;
  text-align: center;
  color: yellow;
}
.search{
  width: 800px;
  height: 50px;
  /*background-color: red;*/
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.search input{
  flex: 8;
  height: 50px;
}
.search button{
  flex: 2;
  height: 55px;
  color: black;
  font-size: 30px;
  background-color: gold;
}
.show {
  width: 800px;
  height: 240px;
  margin: 30px auto;
  background-color: pink;
}
.show ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.show ul li {
  float: left;
  text-align: center;
  list-style: none;
  font-size: 25px;
  margin: 10px;
}
.reminder h1 {
  color: red;
}
.slide-fade-enter-active {
  transition: all .9s ease;
}
.slide-fade-leave-active {
  transition: all .9s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
