// 实际开发中用的比较少不建议用
// 将组件的公共逻辑或者配置提取出来，哪个组件需要用到时
// 直接将提取的这部分混入到组件内部即可，这样既可以减少代码冗余度，也可以让后期维护起来更加容易，
// 这里需要注意的是：提取的是逻辑或配置，而不是HTML代码和CSS代码，
// 其实大家也可以换一种想法，mixin就是组件中的组件，Vue组件化让我们的代码复用性更高。
// 那么组件与组件之间还有重复部分，我们使用Mixin在抽离一遍，
export const mixins1 = {
  data () {
    return {
      msg: '我是小猪课堂'
    }
  },
  computed: {},
  created () {
    // console.log('我是mixin中的created生命周期函数')
  },
  mounted () {
    // console.log('我是mixin中的mounted生命周期函数')
  },
  methods: {
    clickMe () {
      // console.log('我是mixin中的点击事件')
    }
  }
}
