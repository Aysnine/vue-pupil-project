import qs from 'qs'
import request from '@/lib/main/el-request'

export const userLogin = ({ account, pass }) => {
  return request({
    method: 'post',
    url: '/user/login',
    data: qs.stringify({ account, pass })
  })
}

export const userLogout = () => {
  return request({
    method: 'post',
    url: '/user/logout'
  })
}

export const userInfo = token => {
  return request({
    method: 'post',
    url: '/user/profile',
    data: qs.stringify({ token })
  })
}

export const fetchRoles = () => {
  return request({
    method: 'get',
    url: '/user/roles'
  })
}
