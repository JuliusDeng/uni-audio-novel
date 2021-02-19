import Vue from 'vue'
import App from './App'
import myIcon from '@/components/myIcon.vue';

Vue.config.productionTip = false

Vue.prototype.$statusBarHeight = uni.getSystemInfoSync().statusBarHeight
Vue.component('myIcon', myIcon)


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
