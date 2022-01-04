<template>
<div class="trade">
 <div class="adress">
   <p>默认地址</p>
   <div
     v-for="address in getaddress"
     :key="address.id">
<!--     动态添加class="selected" 判断address.isDefault === 1成立则添加这个class-->
     <span :class="{ selected: address.isDefault === 1 }">{{address.name}}</span>
<!--     点击改变isDefault的值，从而改变class的绑定-->
     <span @click="change(address, getaddress)">{{address.adress}}</span>
   </div>
 </div>
</div>
</template>

<script>
export default {
  name: 'trade',
  components: {},
  data () {
    return {}
  },
  computed: {
    getaddress: function () {
      return this.$store.getters.adress
    }
  },
  methods: {
    change: function (address, getaddress) {
      // 这里运用了排他思想
      // 将isDefault全部改成0
      getaddress.forEach((item) => { item.isDefault = 0 })
      // 被点击的isDefault改成1
      address.isDefault = 1
    }
  }
}
</script>

<style lang="" scoped>
.trade{
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
  position: fixed;
  bottom: 0;
  color: black;
}
.adress {
  margin: 0 auto;
}

span {
  display: inline-block;
  margin: 0.3rem;
  /*background-color: red;*/
}
.selected{
  border: 1px solid red;
}
</style>
