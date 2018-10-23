import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
const db = low(new LocalStorage('mock-default-db'))

db.defaults({
  users: [
    {
      id: '1',
      account: 'admin',
      nickname: '管理员',
      pass: 'admin'
    }
  ]
}).write()

export default db
