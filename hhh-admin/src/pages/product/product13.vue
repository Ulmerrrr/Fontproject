<template>
  <!--  作用域插槽（带数据的）,数据由子组件提供-->
  <div>
<!--    为了让data在父级的插槽内容中可用，我们可以将data作为 <slot> 元素的一个 attribute 绑定上去-->
    <slot :data="data"></slot>
  </div>
</template>

<script>
export default {
  name: 'product13',
  data () {
    return {
      data: [23, 456, 465, 4565]
    }
  }
}
</script>

<style scoped>

</style>
