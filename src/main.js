import Vue from 'vue'

import App from './App.vue'

// 全局组件
import pluginInstall from '../lib/install/index'
Vue.use(pluginInstall)

new Vue({
	el: '#square-root',
	render: h => h(App)
})