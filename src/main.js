// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'lib-flexible/flexible.js'
import 'styles/override.css'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: '/static/images/loading.gif'
})

import {Button, AddressList, AddressEdit, Card } from 'vant';
Vue.use(Button).use(AddressList).use(AddressEdit).use(Card)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
