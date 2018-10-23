export default [
  {
    path: /\/user\/login.*/,
    method: 'post',
    handle({ db, body, Random }) {
      let isAuth = db
        .get('users')
        .find({ account: body.account, pass: body.pass })
        .value()
      return isAuth
        ? { code: 0, msg: '登陆成功', token: Random.guid() }
        : { code: 1, msg: '登陆失败，请检查用户名或密码' }
    }
  }
]
