/* eslint-disable */
import { Loading } from 'element-ui'
import axios from 'axios'
import log from './sao-log.js'

const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 1000 * 5
})

const smoothness = 600
const startLoading = () =>
  Loading.service({
    fullscreen: true,
    lock: false,
    text: '请稍后 _(:3」∠)_ 。。。',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
const StopLoading = instance => (instance.close(), null)

const { push, pop } = (function() {
  let count = 0
  let is = null
  return {
    push() {
      count++
      if (!is && count) is = startLoading()
    },
    pop() {
      if (count) count--
      if (is && !count) {
        setTimeout(() => {
          if (is && !count) is = StopLoading(is)
        }, smoothness)
      }
    }
  }
})()

service.interceptors.request.use(
  config => {
    push()
    return config
  },
  error => (pop(), Promise.reject(error))
)

service.interceptors.response.use(
  res => {
    log(res.request, res)
    pop()

    // ! custom error type
    if (res.data.code !== undefined) {
      if (res.data.code !== 0) {
        return Promise.reject(res.data)
      } else {
        return res.data
      }
    } else {
      return res.data
    }
  },
  err => {
    log(err.request, err.response)
    pop()
    err.msg = `数据异常 (${err.request.statusText} : ${err.request.status})`
    return Promise.reject(err)
  }
)

export default service
