/* eslint-disable */
import Csv from './_csv'
import ExportCsv from './_export-csv'
import FileSaver from 'file-saver'
import * as Excel from './_export2Excel'

export default {
  // export csv
  csv(params) {
    return new Promise(resolve => {
      const paramsDefault = {
        columns: [],
        data: [],
        title: 'table',
        noHeader: false
      }
      const _params = Object.assign({}, paramsDefault, params)
      const data = Csv(_params.columns, _params.data, params, _params.noHeader)
      ExportCsv.download(_params.title, data)
      resolve()
    })
  },
  // export excel
  excel(params) {
    return new Promise(resolve => {
      const paramsDefault = {
        columns: [],
        data: [],
        title: 'table',
        header: null,
        merges: []
      }
      const _params = Object.assign({}, paramsDefault, params)
      const header = _params.columns.map(e => e.label)
      const data = _params.data.map(row =>
        _params.columns.map(col => row[col.prop])
      )
      Excel.export_json_to_excel(header, data, _params.title, {
        merges: _params.merges,
        header: _params.header
      })
      resolve()
    })
  },
  // export txt
  txt(params) {
    return new Promise(resolve => {
      const paramsDefault = {
        text: '',
        title: '文本'
      }
      const _params = Object.assign({}, paramsDefault, params)
      const blob = new Blob([_params.text], {
        type: 'text/plain;charset=utf-8'
      })
      FileSaver.saveAs(blob, _params.title + '.txt')
      resolve()
    })
  }
}
