import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

/* 在预览选项开启时注入 Mock */
if (process.env.VUE_APP_PREVIEW == 'on') {
  require('@/mock/register')
}

/* PWA */
import '@/lib/main/pwa/registerServiceWorker'

/* 引入全局的 CSS */
import 'modern-normalize/modern-normalize.css' // style reset，一定要写在最前
import 'element-ui/lib/theme-chalk/index.css' // ElementUI 的样式
import '@/style/index.styl' // 自己的 CSS，for Override，一定要写在最后

/* 引入功能性模块 */
import '@/plugin' // 全局使用的插件，如 log、cookie
import '@/router/witch' // 路由权限
import '@/components/auto' // 全局使用的组件

/* 完整引入 ElementUI，默认中文，默认尺寸 */
import locale from 'element-ui/lib/locale/lang/zh-CN'
import ElementUI from 'element-ui'
Vue.use(ElementUI, { size: 'normal', locale })

/* 配置及信息注入 */
// default
Vue.config.productionTip = false
// 便于在 vue 组件中通过 this.$env__is_preview 判断预览选项是否开启
Vue.prototype.$env__is_preview = process.env.VUE_APP_PREVIEW === 'on'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
