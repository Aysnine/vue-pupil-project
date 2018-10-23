import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/permission'

import 'modern-normalize/modern-normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.styl'
import '@/components'

if (process.env.NODE_ENV != 'production') {
  require('@/mock/register')
}

import locale from 'element-ui/lib/locale/lang/zh-CN'
import ElementUI from 'element-ui'

Vue.use(ElementUI, { size: 'normal', locale })
Vue.config.productionTip = false
Vue.prototype.$env = process.env.NODE_ENV

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
