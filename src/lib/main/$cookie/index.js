/* eslint-disable */
import Cookies from 'js-cookie'

export default function (domain, version) {
  return {
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
}
