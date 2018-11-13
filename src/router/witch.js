import WitchSuit from '@/lib/main/witch-suit'
import Plugins from '@/plugin'
import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const { $cookie } = Plugins
const witch = WitchSuit(router)

witch.rules([
  /* base */

  {
    match: '/login',
    validator() {
      return !!$cookie.get('token')
    },
    reactor() {
      return '/404'
    }
  },
  {
    match: '/admin/**',
    validator() {
      return !$cookie.get('token')
    },
    reactor() {
      Message.warning('未登录，请先登录')
      return '/login'
    }
  },

  /* role control */

  {
    match: '/admin/**',
    validator({ to }) {
      let user = store.getters.user
      return (
        user &&
        user.role &&
        to.meta &&
        to.meta.role &&
        to.meta.role.indexOf(user.role) == -1
      )
    },
    reactor() {
      return '/404'
    }
  }
])

witch.before(() => {
  NProgress.start()
})

witch.after(() => {
  NProgress.done()
})

export default witch
