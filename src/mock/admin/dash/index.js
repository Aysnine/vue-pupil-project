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
          }
        }
      }
    }
  }
]
