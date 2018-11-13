import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
const db = low(new LocalStorage('mock-default-db'))

db.defaults({
  users: [
    {
      id: '1',
      account: 'admin',
      nickname: 'admin',
      pass: 'admin',
      role: 'admin'
    },
    {
      id: '2',
      account: 'manager',
      nickname: 'manager',
      pass: 'manager',
      role: 'manager'
    },
    {
      id: '3',
      account: 'leader',
      nickname: 'leader',
      pass: 'leader',
      role: 'leader'
    },
    {
      id: '4',
      account: 'member',
      nickname: 'member',
      pass: 'member',
      role: 'member'
    }
  ],
  roles: [
    { id: 'admin', name: '管理员' },
    { id: 'manager', name: '主管' },
    { id: 'leader', name: '组长' },
    { id: 'member', name: '成员' }
  ],
  tasks: [
    { id: '1', interval: '8 h', state: 0, content: '控制面板代码编写' },
    { id: '2', interval: '8 h', state: 0, content: '文档编写' },
    { id: '3', interval: '7 h', state: 1, content: '业务流程设计' },
    { id: '4', interval: '8 h', state: 0, content: '仪表盘界面设计' },
    { id: '5', interval: '5 h', state: 0, content: '数据库设计' },
    { id: '6', interval: '8 h', state: 0, content: '检查本周业务' },
    { id: '7', interval: '8 h', state: 0, content: '提交季度报告' },
    { id: '8', interval: '8 h', state: 0, content: '审核上周代码' }
  ]
}).write()

export default db
