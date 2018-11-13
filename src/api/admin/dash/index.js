import request from '@/lib/main/el-request'

export const fetchDash = () => {
  return request({
    method: 'get',
    url: '/admin/dash/fetchDash'
  })
}
