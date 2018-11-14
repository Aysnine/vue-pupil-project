export default [
  {
    path: /\/user\/login.*/,
    method: 'post',
    handle({ db, body, Random }) {
      let isAuth = db
        .get('users')
        .find({ account: body.account, pass: body.pass })
        .value()
      let token = Random.guid()
      if (isAuth) {
        db.get('users')
          .find({ account: body.account })
          .assign({ token })
          .write()
      }
      return isAuth
        ? { code: 0, msg: '登陆成功', token }
        : { code: 1, msg: '登陆失败，请检查用户名或密码' }
    }
  },
  {
    path: /\/user\/logout.*/,
    method: 'post',
    handle() {
      return {
        code: 0,
        msg: '已退出登录'
      }
    }
  },
  {
    path: /\/user\/profile.*/,
    method: 'post',
    handle({ body, db }) {
      let { token } = body
      let user = db
        .get('users')
        .find({ token })
        .cloneDeep()
        .value()
      return user
        ? {
            code: 0,
            msg: '欢迎回来',
            data: user
          }
        : {
            code: 1,
            msg: '登陆过期，请重新登陆'
          }
    }
  },
  {
    path: /\/user\/roles.*/,
    method: 'get',
    handle({ db }) {
      return {
        code: 0,
        data: {
          roles: db
            .get('roles')
            .cloneDeep()
            .value()
        }
      }
    }
  }
]
