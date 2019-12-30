import Vue from 'vue'

import App from './App.vue'

import '../lib/theme/global.scss'
import SquareWeb from '../lib/install/index'
Vue.use(SquareWeb)

new Vue({
	el: '#square-root',
	render: h => h(App)
})