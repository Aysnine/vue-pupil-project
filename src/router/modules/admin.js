export default [
  {
    path: '/admin',
    component: () => import('@/layout/admin'),
    redirect: '/admin/dash',
    children: [
      {
        path: 'dash',
        name: 'Dashboard',
        meta: { title: '仪表盘' },
        component: () => import('@/pages/admin/dash')
      }
    ]
  },
  {
    path: '/admin/table',
    meta: { title: '数据表格' },
    component: () => import('@/layout/admin'),
    redirect: '/admin/table/index',
    children: [
      {
        path: 'index',
        name: 'SimpleTable',
        meta: { title: '简单的表格' },
        component: () => import('@/pages/admin/table/simple')
      },
      {
        path: 'complex',
        name: 'ComplexTable',
        meta: { title: '复杂的表格' },
        component: () => import('@/pages/admin/table/complex')
      }
    ]
  },
  {
    path: '/admin/tree',
    component: () => import('@/layout/admin'),
    redirect: '/admin/tree/index',
    children: [
      {
        path: 'index',
        name: 'Tree',
        meta: { title: '树形结构' },
        component: () => import('@/pages/admin/tree')
      }
    ]
  },
  {
    path: '/admin/editor',
    component: () => import('@/layout/admin'),
    redirect: '/admin/editor/index',
    children: [
      {
        path: 'index',
        name: 'Editor',
        meta: { title: '内容编辑' },
        component: () => import('@/pages/admin/editor')
      }
    ]
  },
  {
    path: '/path/to',
    redirect: '/path/to/404',
    children: [
      {
        path: '404',
        name: 'NotFound',
        meta: { title: '404 页面' },
        redirect: '/404'
      }
    ]
  }
]
