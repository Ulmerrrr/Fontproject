<!--歌手页面-->
<template>
<div>
<!--  父组件监听子组件传过来的事件，触发selectsinger方法，然后执行相应的操作。-->
  <listview @select="selectsinger"></listview>
  <router-view></router-view>
</div>
</template>

<script>
import listview from '../pages/listview'
export default {
  name: 'MySinger',
  components: {
    listview
  },
  methods: {
    selectsinger: function (item) {
      this.$router.push({
        path: `/singer/${item.id}` // 这里点击item地址栏对应的变成singer/item.id...
        // 例如点击林俊杰（他的id是3684），那么通过this.$router.push跳转到singer/3684，
        // 此时：aa=3684，跳转到component对应组件listdetail，并且渲染到mysinger组件上（因为router-view写在了mysinger上）
        // ｛此时打印this.$route.params.aa的结果为3684，相当于通过params传了一个参数｝
      })
    }
  }
}
</script>

<style scoped>

</style>
