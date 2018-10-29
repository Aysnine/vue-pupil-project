import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/permission'

import 'modern-normalize/modern-normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.styl'
import '@/components'

if (process.env.VUE_APP_PREVIEW) {
  require('@/mock/register')
}

import locale from 'element-ui/lib/locale/lang/zh-CN'
import ElementUI from 'element-ui'
import VCharts from 'v-charts'
import Plugins from '@/plugin.js'

Vue.use(ElementUI, { size: 'normal', locale })
Vue.use(VCharts)
Vue.use(Plugins)

Vue.config.productionTip = false
Vue.prototype.$env__is_preview = process.env.VUE_APP_PREVIEW === 'on'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
