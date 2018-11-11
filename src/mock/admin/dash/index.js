export default [
  {
    path: /\/admin\/dash.*/,
    method: 'get',
    handle() {
      return {
        code: 0,
        data: {
          summary: {
            total: 10,
            views: 20,
            share: 30,
            msgs: 40
          },
          tasks: [
            { content: '编写仪表盘界面', completed: 0, interval: '7 h' },
            { content: '编写仪表盘界面', completed: 0, interval: '7 h' },
            { content: '编写仪表盘界面', completed: 0, interval: '7 h' },
            { content: '编写仪表盘界面', completed: 1, interval: '7 h' }
          ],
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
