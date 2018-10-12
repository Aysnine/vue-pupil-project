import Mock from 'mockjs'
import qs from 'qs'

Mock.setup({ timeout: '200-300' })

const parse = ({ url, type, body }) => ({
  method: type,
  params: qs.parse(url.split('?').length > 1 ? url.split('?')[1] : ''),
  body: qs.parse(body)
})
const setup = (path, method, handle) => {
  Mock.mock(
    path,
    method,
    typeof handle === 'function' ? o => handle(parse(o), Mock) : handle
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
    if (method instanceof Array) {
      method.map(item => setup(path, item, handle))
    } else {
      setup(path, method, handle)
    }
  })
}

export default { load }
