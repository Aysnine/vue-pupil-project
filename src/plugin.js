import $moment from 'moment'
import $clipboard from '@/lib/clipboard'
import $cookie from '@/lib/my-cookie'
import $export from '@/lib/my-export'
import $import from '@/lib/my-import'
import $log from '@/lib/pretty-log'
import $zip from '@/lib/zip-export'
import $print from '@/lib/my-print'

export default {
  // for javascript module
  $moment,
  $clipboard,
  $cookie: $cookie(
    process.env.VUE_ADD_MAIN_COOKIE_DOMAIN || '',
    process.env.VUE_ADD_MAIN_COOKIE_VERSION || ''
  ),
  $export,
  $import,
  $log,
  $zip,
  $print,

  // for vue component
  install(Vue) {
    Vue.prototype.$moment = this.$moment
    Vue.prototype.$clipboard = this.$clipboard
    Vue.prototype.$cookie = this.$cookie
    Vue.prototype.$export = this.$export
    Vue.prototype.$import = this.$import
    Vue.prototype.$log = this.$log
    Vue.prototype.$zip = this.$zip
    Vue.prototype.$print = this.$print
  }
}
