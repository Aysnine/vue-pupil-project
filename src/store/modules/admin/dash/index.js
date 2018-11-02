export default {
  namespaced: true,
  getters: {
    summary: state => state.summary,
    tasks: state => state.tasks,
    taskTotalNumber: state => state.tasks.length,
    taskCompleteNumber: state =>
      state.tasks.reduce((x, { completed }) => (completed ? ++x : 0, x), 0),
    vistor: state => state.vistor
  },
  state: {
    summary: {
      total: 0,
      views: 0,
      share: 0,
      msgs: 0
    },
    tasks: [
      { content: '编写仪表盘界面', completed: 0, interval: '7 h' },
      { content: '编写仪表盘界面', completed: 0, interval: '7 h' },
      { content: '编写仪表盘界面', completed: 0, interval: '7 h' },
      { content: '编写仪表盘界面', completed: 1, interval: '7 h' }
    ],
    vistor: {
      columns: ['date', 'times'],
      rows: [
        { date: '1', times: 1393 },
        { date: '2', times: 1700 },
        { date: '3', times: 2923 },
        { date: '4', times: 1723 },
        { date: '5', times: 3792 },
        { date: '6', times: 4593 }
      ]
    }
  },
  mutations: {
    SET_SUMMARY(state, val) {
      state.summary = val
    }
  },
  actions: {
    async init() {
      try {
        // ...
      } catch (err) {
        throw err
      }
    }
  }
}
