export default [
  {
    path: /\/user\/login.*/,
    method: 'post',
    handle({ method, url, params, body, Mock, Random, E }) {
      return {
        code: 0,
        msg: '登录成功',
        ...E('firends|10', {
          'id|+1': 10000,
          name: '@CNAME',
          uid: Random.natural()
        })
      }
    }
  }
]
