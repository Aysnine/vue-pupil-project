export default [
  {
    path: /\/admin\/summary.*/,
    method: 'get',
    handle() {
      return {
        code: 0,
        data: {
          vistor: [
            { date: '周一', times: 1393 },
            { date: '周二', times: 1700 },
            { date: '周三', times: 2923 },
            { date: '周四', times: 1723 },
            { date: '周五', times: 3792 },
            { date: '周六', times: 4593 }
          ]
        }
      }
    }
  }
]
