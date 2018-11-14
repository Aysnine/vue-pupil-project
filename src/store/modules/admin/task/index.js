import {
  fetchTask,
  addTask,
  editTask,
  deleteTask,
  stateFinished,
  stateRemark
} from '@/api/admin/task'

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
        let rst = await fetchTask()
        commit('SET_TASKS', rst.data.tasks)
        return rst
      } catch (err) {
        throw err
      }
    },
    async submitAddTask({ dispatch }, form) {
      try {
        let rst = await addTask(form)
        dispatch('fetch')
        return rst
      } catch (err) {
        throw err
      }
    },
    async submitEditTask({ dispatch }, form) {
      try {
        let rst = await editTask(form)
        dispatch('fetch')
        return rst
      } catch (err) {
        throw err
      }
    },
    async submitDeleteTask({ dispatch }, id) {
      try {
        let rst = await deleteTask(id)
        dispatch('fetch')
        return rst
      } catch (err) {
        throw err
      }
    },
    async submitStateFinished({ dispatch }, id) {
      try {
        let rst = await stateFinished(id)
        dispatch('fetch')
        return rst
      } catch (err) {
        throw err
      }
    },
    async submitStateRemark({ dispatch }, id) {
      try {
        let rst = await stateRemark(id)
        dispatch('fetch')
        return rst
      } catch (err) {
        throw err
      }
    }
  }
}
