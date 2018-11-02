import router from '@/router'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Plugins from '@/plugin'
const { $cookie } = Plugins

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  let token = $cookie.get('token')
  if (/^(\/login)/.test(to.path) && token) {
    next('/404')
    NProgress.done()
  } else {
    if (/^(\/admin)/.test(to.path) && !token) {
      next('/login')
      Message.warning('未登录，请先登录')
      NProgress.done()
    } else {
      next()
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
