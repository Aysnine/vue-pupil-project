import Vue from 'vue'

import $cookie from '@/lib/main/$cookie'
import $log from '@/lib/main/$log'

const plugin = {
  // for javascript module
  $cookie: $cookie(
    process.env.VUE_APP_MAIN_COOKIE_DOMAIN || '',
    process.env.VUE_APP_MAIN_COOKIE_VERSION || ''
  ),
  $log,

  // for vue component
  install(Vue) {
    Vue.prototype.$cookie = this.$cookie
    Vue.prototype.$log = this.$log
  }
}

Vue.use(plugin)

export default plugin
