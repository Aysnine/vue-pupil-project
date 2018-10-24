/* eslint-disable */
import clipboard from 'clipboard-polyfill'

export default {
  copyText(text) {
    clipboard.writeText(text)
  },
  copyHtml(htmlText) {
    var dt = new clipboard.DT()
    dt.setData('text/html', htmlText)
    clipboard.write(dt)
  },
  readText() {
    return new Promise((resolved, rejected) => {
      clipboard.readText().then(res => resolved(res), error => rejected(error))
    })
  },
  read() {
    return new Promise((resolved, rejected) => {
      clipboard.read().then(res => resolved(res), error => rejected(error))
    })
  }
}
