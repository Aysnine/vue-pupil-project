import $cookie from '@/lib/main/$cookie'
import $log from '@/lib/main/$log'

export default {
  // for javascript module
  $cookie: $cookie(
    process.env.VUE_ADD_MAIN_COOKIE_DOMAIN || '',
    process.env.VUE_ADD_MAIN_COOKIE_VERSION || ''
  ),
  $log,

  // for vue component
  install(Vue) {
    Vue.prototype.$cookie = this.$cookie
    Vue.prototype.$log = this.$log
  }
}
