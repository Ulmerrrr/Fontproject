<template>
<div>
  <card-charts></card-charts>
</div>
</template>

<script>
// 引入CardCharts组件
import CardCharts from './components/CardCharts/CartCharts.vue'
export default {
  name: 'home',
  // 注册组件
  components: {
    CardCharts
  }
}
</script>

<style scoped>

</style>
