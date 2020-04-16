import 'jquery'
import 'jquery-ui'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.scss'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
