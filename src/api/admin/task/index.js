import request from '@/lib/main/el-request'
import qs from 'qs'

export const fetchTask = () => {
  return request({
    method: 'get',
    url: '/admin/task/fetchTask'
  })
}

export const addTask = ({ content, interval }) => {
  return request({
    method: 'post',
    url: '/admin/task/addTask',
    data: qs.stringify({ content, interval })
  })
}

export const deleteTask = id => {
  return request({
    method: 'post',
    url: '/admin/task/deleteTask',
    data: qs.stringify({ id })
  })
}

export const editTask = form => {
  return request({
    method: 'post',
    url: '/admin/task/editTask',
    data: qs.stringify({ ...form })
  })
}

export const stateFinished = id => {
  return request({
    method: 'post',
    url: '/admin/task/stateFinished',
    data: qs.stringify({ id })
  })
}

export const stateRemark = id => {
  return request({
    method: 'post',
    url: '/admin/task/stateRemark',
    data: qs.stringify({ id })
  })
}
