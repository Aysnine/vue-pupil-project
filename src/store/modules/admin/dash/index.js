import { fetchDash } from '@/api/admin/dash'

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
    tasks: [],
    vistor: {
      columns: ['date', 'times'],
      rows: []
    }
  },
  mutations: {
    SET_SUMMARY(state, val) {
      state.summary = val
    },
    SET_TASKS(state, val) {
      state.tasks = val
    },
    SET_VISTOR(state, val) {
      state.vistor.rows = val
    }
  },
  actions: {
    async fetchDash({ commit }) {
      try {
        let { data } = await fetchDash()
        commit('SET_SUMMARY', data.summary)
        commit('SET_TASKS', data.tasks)
        commit('SET_VISTOR', data.vistor)
      } catch (err) {
        throw err
      }
    }
  }
}
