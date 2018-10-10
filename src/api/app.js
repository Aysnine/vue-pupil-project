import qs from 'qs'
import request from '@/lib/el-request'

export const userLogin = ({ account, pass }) => {
  return request({
    method: 'post',
    url: '/user/login',
    data: qs.stringify({ account, pass })
  })
}

// * Post with form data
// export const PostSomething = ({ account, password }) => {
//   return request({
//     method: 'post',
//     url: 'PostSomething',
//     data: qs.stringify({ account, password })
//   })
// }

// * Get with params
// export const PostSomething = ({ account, password }) => {
//   return request({
//     method: 'get',
//     url: 'GetSomething',
//     params: { account, password }
//   })
// }
