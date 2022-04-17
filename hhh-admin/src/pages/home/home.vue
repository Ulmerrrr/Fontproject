<template>
<div>
  <card-charts></card-charts>
  <bai-map></bai-map>
</div>
</template>

<script>
// 引入CardCharts组件
import CardCharts from './components/CardCharts/CartCharts.vue'
// 引入BaiduMap组件
import BaiMap from './components/BaiMap/BaiMap.vue'
export default {
  name: 'home',
  // 注册组件
  components: {
    CardCharts,
    BaiMap
  }
}
</script>

<style scoped>

</style>
