import router from '@/router'
import store from '@/store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (/^(\/login)/.test(to.path) && store.getters.isLogin) {
    next('/')
  } else {
    if (/^(\/admin)/.test(to.path) && !store.getters.isLogin) {
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
