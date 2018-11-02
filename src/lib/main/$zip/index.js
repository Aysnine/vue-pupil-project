/* eslint-disable */
import FileSaver from 'file-saver'
import JSZip from 'jszip'
import JSZipUtils from 'jszip-utils'

const makeAsync = (zip, path, src, other) =>
  new Promise((resovled, rejected) => {
    JSZipUtils.getBinaryContent(src, function(error, data) {
      if (error) return rejected(error)
      zip.file(path, data, other)
      resovled()
    })
  })

/**
 * @description 生成 Zip 文件并下载
 * @param {Array} source 各种文件的配置
 */
const ZipFileCreate = async (filename, source, progress = () => {}) => {
  let zip = new JSZip()

  for (let item of source) {
    let { type, path, data, src } = item
    if (type === 'image') {
      if (src) {
        await makeAsync(zip, path, src, { binary: true })
      } else {
        zip.file(path, data, { base64: true })
      }
    } else {
      if (src) {
        await makeAsync(zip, path, src, { binary: true })
      } else {
        zip.file(path, data)
      }
    }
    progress(item)
  }

  zip.generateAsync({ type: 'blob' }).then(function(content) {
    FileSaver.saveAs(content, filename)
  })
}

export default ZipFileCreate
