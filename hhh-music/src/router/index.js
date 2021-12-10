import Vue from 'vue'
import Router from 'vue-router'
import MyRecommend from '../components/MyRecommend'
import MySinger from '../components/MySinger'
import MyRank from '../components/MyRank'
import MySearch from '../components/MySearch'
import Singerdetail from '../pages/singerdetail'

Vue.use(Router)

export default new Router({
  routes: [
    // 跳转到根目录重定向到推荐页面
    {
      path: '/',
      redirect: '/recommend'
    },
    // 路由配置
    {
      path: '/recommend',
      name: 'recommend',
      component: MyRecommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: MySinger,
      children: [{
        path: ':aa', // 点击item跳转到歌手详情页使用动态匹配路由
        component: Singerdetail
      }]
    },
    {
      path: '/rank',
      name: 'rank',
      component: MyRank
    },
    {
      path: '/search',
      name: 'search',
      component: MySearch
    }
  ]
})
