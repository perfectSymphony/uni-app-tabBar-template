import Vue from 'vue'
import App from './App'
import tabBar from './components/tabBar/tabBar.vue'

Vue.config.productionTip = false

App.mpType = 'app'
Vue.component('tab-bar', tabBar)

const app = new Vue({
    ...App
})
app.$mount()
