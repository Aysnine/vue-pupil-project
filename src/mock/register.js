import Mock from 'mockjs'
import qs from 'qs'

import app from '@/mock/app'
// import other from '@/mock/other'

const gen = [app /* , other */]

Mock.setup({ timeout: '200-300' })

const parse = ({ url, type, body }) => ({
  method: type,
  params: qs.parse(url.split('?').length > 1 ? url.split('?')[1] : ''),
  body: qs.parse(body)
})
gen.map(set =>
  set.map(({ path, method, handle }) =>
    Mock.mock(
      path,
      method,
      typeof handle === 'function' ? o => handle(parse(o)) : handle
    )
  )
)
