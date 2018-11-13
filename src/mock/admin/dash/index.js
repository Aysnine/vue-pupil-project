export default [
  {
    path: /\/admin\/dash\/fetchDash.*/,
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
