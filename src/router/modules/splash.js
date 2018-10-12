export default [
  {
    path: '',
    meta: { title: '首页' },
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
    meta: { title: '菜单' },
    component: () => import('@/layout/splash'),
    redirect: 'menu',
    children: [
      {
        path: 'm1',
        name: 'm1',
        meta: { title: '菜单' }
      },
      {
        path: 'm2',
        name: 'm2',
        meta: { title: '菜单' },
        children: [
          {
            path: 'm3',
            name: 'm3',
            meta: { title: '菜单' }
          },
          {
            path: 'm4',
            name: 'm4',
            meta: { title: '菜单' }
          }
        ]
      }
    ]
  },
  {
    path: '',
    meta: { title: '登陆' },
    component: () => import('@/layout/splash'),
    redirect: 'login',
    children: [
      {
        path: 'login',
        name: 'login',
        meta: { title: '登陆' },
        component: () => import('@/pages/splash/login')
      }
    ]
  }
]
