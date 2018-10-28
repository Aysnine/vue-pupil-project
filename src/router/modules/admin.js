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
        meta: { title: '简单的表格' }
      },
      {
        path: 'complex',
        name: 'ComplexTable',
        meta: { title: '复杂的表格' }
      }
    ]
  }
]
