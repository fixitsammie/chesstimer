import Vue from 'vue'
import App from '@/App.vue'




Vue.config.productionTip = false
import axios from 'axios'

Vue.prototype.$http = axios


const vue = new Vue({
  render: h => h(App)
})

vue.$mount('#app')
