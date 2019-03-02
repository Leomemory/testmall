import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Classify from '@/view/Classify'
import goodList from '@/view/goodList'
import goodDetail from '@/view/goodDetail'
import cart from '@/view/cart'
import address from '@/view/address'
import addressEdit from '@/view/addressEdit'
import me from '@/view/me'

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
    },
    {
      path: '/gooddetail',
      name: 'goodDetail',
      component: goodDetail
    },{
      path: '/cart',
      name: 'cart',
      component: cart
    },{
      path: '/address',
      name: 'address',
      component: address
    },{
      path: '/addressedit',
      name: 'addressEdit',
      component: addressEdit
    },{
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})
