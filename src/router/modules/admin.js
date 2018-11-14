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
    path: '/admin/task',
    component: () => import('@/layout/admin'),
    redirect: '/admin/task/index',
    children: [
      {
        path: 'index',
        name: 'Task',
        meta: { title: '数据表格' },
        component: () => import('@/pages/admin/task')
      }
    ]
  },
  {
    path: '/admin/summary',
    component: () => import('@/layout/admin'),
    redirect: '/admin/summary/index',
    children: [
      {
        path: 'index',
        name: 'Summary',
        meta: { title: '数据图表' },
        component: () => import('@/pages/admin/summary')
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
    path: '/admin/role/admin',
    component: () => import('@/layout/admin'),
    redirect: '/admin/role/admin/index',
    children: [
      {
        path: 'index',
        name: 'RoleAdmin',
        meta: { title: '权限测试 Admin', role: ['admin'] },
        component: () => import('@/pages/admin/role')
      }
    ]
  },
  {
    path: '/admin/role/leader',
    component: () => import('@/layout/admin'),
    redirect: '/admin/role/leader/index',
    children: [
      {
        path: 'index',
        name: 'RoleLeader',
        meta: { title: '权限测试 Leader', role: ['leader'] },
        component: () => import('@/pages/admin/role')
      }
    ]
  },
  {
    path: '/admin/role/member',
    component: () => import('@/layout/admin'),
    redirect: '/admin/role/member/index',
    children: [
      {
        path: 'index',
        name: 'RoleMember',
        meta: { title: '权限测试 Member', role: ['member'] },
        component: () => import('@/pages/admin/role')
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
