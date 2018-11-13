export default [
  {
    path: /\/admin\/task.*/,
    method: 'get',
    handle({ db }) {
      return {
        code: 0,
        data: {
          tasks: db
            .get('tasks')
            .cloneDeep()
            .value()
        }
      }
    }
  }
]
