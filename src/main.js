// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import App from './App'

Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-110731170-1',
  autoTracking: {
    exception: true
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
