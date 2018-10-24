import Moment from 'moment'
import Clipboard from '@/lib/clipboard'
import MyExport from '@/lib/my-export'
import MyCookie from '@/lib/my-cookie'
import MyImport from '@/lib/my-import'
import PrettyLog from '@/lib/pretty-log'
import ZipExport from '@/lib/zip-export'

export default {
  install(Vue) {
    Vue.prototype.$mt = Moment
    Vue.prototype.$cp = Clipboard
    Vue.prototype.$cookie = MyCookie
    Vue.prototype.$export = MyExport
    Vue.prototype.$import = MyImport
    Vue.prototype.$log = PrettyLog
    Vue.prototype.$zip = ZipExport
  }
}
