import request from '@/lib/main/el-request'

export const fetchSummary = () => {
  return request({
    method: 'get',
    url: '/admin/summary/fetchSummary'
  })
}
