import Vue from 'vue'
import App from './App.vue'
import router from './router'

import $http from '@/api' // global css

Vue.config.productionTip = false

Object.assign(Vue.prototype, {
    $http
})

const _Vue = new Vue({
    router,
    render: h => h(App),
}).$mount('#app')

window._Vue = _Vue