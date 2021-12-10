<!--搜索页面组件-->
<template>
<div class="search">
  <input type="text" v-model = 'query' placeholder="搜索歌曲，歌手">
  <button v-show="query" @click="clear">删除</button>
</div>
</template>

<script>
export default {
  name: 'MySearch',
  // props: {
  //   placeholder: {
  //     type: String,
  //     default: '搜索歌曲、歌手'
  //   }
  data () {
    return {
      query: ''
    }
  },
  methods: {
    clear: function () {
      this.query = ''
    }
  }
}
</script>

<style scoped>
.search{
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
input {
  flex: 9;
}
button {
  flex: 1;
}
</style>
