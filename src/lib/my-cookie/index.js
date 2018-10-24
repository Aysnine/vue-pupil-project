/* eslint-disable */
import Cookies from 'js-cookie'

const domain = 'vue_pupil_project'
const version = '0.0.1'

export default {
  set(name = 'default', value = '', cookieSetting = {}) {
    let currentCookieSetting = { expires: 1 }
    Object.assign(currentCookieSetting, cookieSetting)
    Cookies.set(`${domain}-${version}-${name}`, value, currentCookieSetting)
  },
  get(name = 'default') {
    return Cookies.get(`${domain}-${version}-${name}`)
  },
  getAll() {
    return Cookies.get()
  },
  remove(name = 'default') {
    return Cookies.remove(`${domain}-${version}-${name}`)
  }
}
