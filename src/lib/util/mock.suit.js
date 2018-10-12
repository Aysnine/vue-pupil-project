/**
  MockSuit：for better experience of the Mock

  author: https://github.com/Aysnine
  update: 2018-10-12 22:02:29

  usage:

    import MockSuit from 'path/to/mock.suit.js' // ! 根据自己放文件的位置修改哦

    MockSuit.load([
      {
        // 匹配对应 url 的请求
        // 可用正则或字符串，如 '/user/login'
        // 最好用正则，以免错过 /user/login?id=123 这种带 query 参数的 url
        path: /\/user\/login.*.?/,

        // 匹配 path 下对应方法的请求
        // 使用 '*' 会匹配所有请求方法
        // 使用 ['get', 'post'] 匹配多个请求方法
        // 嫌麻烦还可以用 'get|post' 格式匹配多个请求，用 '|' 分割
        method: 'post',

        // 用函数处理请求，return 返回模拟数据对象，一般为 json
        // ! 注意，用函数处理，就不能用 mock 模版语法了，但是可以用函数内的 Mock.mock( ... ) 支持模版
        // 以内置所需的各种参数，需要用解构语法使用，如以下
        // method: 收到的请求方法，如 'get' 'post'，为小写字符串
        // url: 收到的 URL，已经去除 query 字符串
        // params: 收到的 query 字符串解析后的对象
        //    如 /user/login?id=123&name=hello
        //    得到 { id: '123', name: 'hello' }
        // body: 收到的请求体，一般为 post 请求的表单信息对象
        // Mock: 参照 Mock 官方文档，一定会有很多 Mock.xxx() 这样的示例代码，那就用吧
        // 在 Mock 文档中会有的对象，直接用就是了：Random
        // * 在函数处理里用 Mock.mock( ... ) 加模版去生成列表很坑爹，这里提供了 E 来辅助生成
        // * 需配合解构使用，如 ...E('data|10', { name: '@CNAME' } ) 得到一个 data 属性，值为 10 个对象
        handle({ method, url, params, body, Mock, Random, E }) {
          return {
            code: 0,
            msg: '登录成功',
            ...E('data|10', {
              'id|+1': 10000,
              name: '@CNAME',
              uid: Random.natural()
            })
          }
        }
      }
      // more...
    ])

*/
import Mock from 'mockjs'
import qs from 'qs'

Mock.setup({ timeout: '200-300' })

const E = (prop, template) => {
  let obj = {}
  obj[prop] = [template]
  return Mock.mock(obj)
}

const wired = ({ url, type, body }) => ({
  method: type,
  params: qs.parse(url.split('?').length > 1 ? url.split('?')[1] : ''),
  body: qs.parse(body),
  url: qs.parse(url.split('?')[0]),
  Mock,
  Random: Mock.Random,
  E
})

const setup = (path, method, handle) => {
  Mock.mock(
    path,
    method,
    typeof handle === 'function' ? o => handle(wired(o)) : handle
  )
}

const load = collection => {
  collection.map(({ path, method, handle }) => {
    if (method === '*')
      method = [
        'get',
        'head',
        'post',
        'put',
        'delete',
        'connect',
        'options',
        'trace',
        'patch'
      ]
    if (typeof method === 'string' && method.indexOf('|') > -1)
      method = method.split('|')
    if (method instanceof Array) {
      method.map(item => setup(path, item, handle))
    } else {
      setup(path, method, handle)
    }
  })
}

export default { load }
