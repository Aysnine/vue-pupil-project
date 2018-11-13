import { fetchTask } from '@/api/admin/task'

export default {
  namespaced: true,
  getters: {
    tasks: state => state.tasks,
    taskTotalNumber: state => state.tasks.length,
    taskCompleteNumber: state =>
      state.tasks.reduce((x, { state }) => (state ? ++x : 0, x), 0)
  },
  state: {
    tasks: []
  },
  mutations: {
    SET_TASKS(state, val) {
      state.tasks = val
    }
  },
  actions: {
    async fetch({ commit }) {
      try {
        let { data } = await fetchTask()
        commit('SET_TASKS', data.tasks)
      } catch (err) {
        throw err
      }
    }
  }
}
