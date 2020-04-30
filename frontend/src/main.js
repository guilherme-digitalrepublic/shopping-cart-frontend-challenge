import Vue from 'vue'
import Home from './pages/home.vue'
import './styles/_index.scss'
Vue.config.productionTip = false

new Vue({
  render: h => h(Home),
}).$mount('#app')
