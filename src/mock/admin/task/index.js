export default [
  {
    path: /\/admin\/task\/fetchTask.*/,
    method: 'get',
    handle({ db }) {
      return {
        code: 0,
        data: {
          tasks: db
            .get('tasks')
            .orderBy('t', 'desc')
            .cloneDeep()
            .value()
        }
      }
    }
  },
  {
    path: /\/admin\/task\/addTask.*/,
    method: 'post',
    handle({ body, db, uid }) {
      let { content, interval } = body
      return {
        code: 0,
        data: {
          tasks: db
            .get('tasks')
            .push({ t: +new Date(), id: uid(), content, interval, state: 0 })
            .write().id
        }
      }
    }
  },
  {
    path: /\/admin\/task\/deleteTask.*/,
    method: 'post',
    handle({ body, db }) {
      let { id } = body
      return {
        code: 0,
        data: {
          tasks: db
            .get('tasks')
            .remove({ id })
            .write().id
        }
      }
    }
  },
  {
    path: /\/admin\/task\/editTask.*/,
    method: 'post',
    handle({ body, db }) {
      let { id, content, interval } = body
      return {
        code: 0,
        data: {
          tasks: db
            .get('tasks')
            .find({ id })
            .assign({ content, interval })
            .write().id
        }
      }
    }
  },
  {
    path: /\/admin\/task\/stateFinished.*/,
    method: 'post',
    handle({ body, db }) {
      let { id } = body
      return {
        code: 0,
        data: {
          tasks: db
            .get('tasks')
            .find({ id })
            .assign({ state: 1 })
            .write().id
        }
      }
    }
  },
  {
    path: /\/admin\/task\/stateRemark.*/,
    method: 'post',
    handle({ body, db }) {
      let { id } = body
      return {
        code: 0,
        data: {
          tasks: db
            .get('tasks')
            .find({ id })
            .assign({ state: 0 })
            .write().id
        }
      }
    }
  }
]
