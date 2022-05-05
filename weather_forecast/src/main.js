// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios' // 引入axios
// 为axios配置请求根路径，今后再加上具体的路径就可以发起请求，访问数据
axios.defaults.baseURL = 'https://v0.yiketianqi.com'
// 把axios挂载到Vue的原型上
Vue.prototype.$axios = axios

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
