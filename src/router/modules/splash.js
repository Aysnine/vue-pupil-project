export default [
  {
    path: '',
    component: () => import('@/layout/splash'),
    redirect: 'welcome',
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        meta: { title: '首页' },
        component: () => import('@/pages/splash/welcome')
      }
    ]
  },
  {
    path: '',
    component: () => import('@/layout/splash'),
    redirect: 'login',
    meta: { hide: false },
    children: [
      {
        path: 'login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('@/pages/splash/login')
      }
    ]
  },
  {
    path: '/to',
    redirect: '/to/admin',
    meta: { hide: true },
    children: [
      {
        path: 'admin',
        name: 'ToAdmin',
        meta: { title: '后台' },
        redirect: '/admin/dash'
      }
    ]
  }
]
