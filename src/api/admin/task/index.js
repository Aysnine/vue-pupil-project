import request from '@/lib/main/el-request'

export const fetchTask = () => {
  return request({
    method: 'get',
    url: '/admin/task'
  })
}
