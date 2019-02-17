import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Classify from '@/view/Classify'
import goodList from '@/view/goodList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/goodlist',
      name: 'goodList',
      component: goodList
    }
  ]
})
