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
            { date: '1', times: 1393 },
            { date: '2', times: 1700 },
            { date: '3', times: 2923 },
            { date: '4', times: 1723 },
            { date: '5', times: 3792 },
            { date: '6', times: 4593 }
          ]
        }
      }
    }
  }
]
