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
  ]
}).write()

export default db
