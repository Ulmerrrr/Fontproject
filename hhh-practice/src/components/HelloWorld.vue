<template>
  <div class="hello">
  <button @click="getdata">点我获取数据</button>
  </div>
</template>

<script>
import Vue from 'vue'
// import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  methods: {
    getdata: function () {
      Vue.axios
        .get('/api/user/passport/register')
        .then((res) => {
          console.log(res.data)
          // this.weatherList = res.data.data.forecast;
          // this.reminder = res.data.data.ganmao;
          // this.ishow = true;
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  width: 80px;
  height: 80px;
}
</style>
