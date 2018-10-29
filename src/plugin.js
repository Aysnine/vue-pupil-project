import $Moment from 'moment'
import $Clipboard from '@/lib/clipboard'
import $MyExport from '@/lib/my-export'
import $MyCookie from '@/lib/my-cookie'
import $MyImport from '@/lib/my-import'
import $PrettyLog from '@/lib/pretty-log'
import $ZipExport from '@/lib/zip-export'

export default {
  // for javascript module
  $Moment,
  $Clipboard,
  $MyExport,
  $MyCookie: $MyCookie(
    process.env.VUE_ADD_MAIN_COOKIE_DOMAIN || 'vue-pupil-project',
    process.env.VUE_ADD_MAIN_COOKIE_VERSION || '0.0.1'
  ),
  $MyImport,
  $PrettyLog,
  $ZipExport,

  // for vue component
  install(Vue) {
    Vue.prototype.$Moment = this.$Moment
    Vue.prototype.$Clipboard = this.$Clipboard
    Vue.prototype.$MyExport = this.$MyExport
    Vue.prototype.$MyCookie = this.$MyCookie
    Vue.prototype.$MyImport = this.$MyImport
    Vue.prototype.$PrettyLog = this.$PrettyLog
    Vue.prototype.$ZipExport = this.$ZipExport
  }
}
