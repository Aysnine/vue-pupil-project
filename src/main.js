import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

if (process.env.VUE_APP_PREVIEW == 'on') {
  require('@/mock/register')
}

import 'modern-normalize/modern-normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.styl'

import locale from 'element-ui/lib/locale/lang/zh-CN'
import ElementUI from 'element-ui'

import '@/plugin'
import '@/permission'
import '@/components/auto'

Vue.use(ElementUI, { size: 'normal', locale })

Vue.config.productionTip = false
Vue.prototype.$env__is_preview = process.env.VUE_APP_PREVIEW === 'on'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
