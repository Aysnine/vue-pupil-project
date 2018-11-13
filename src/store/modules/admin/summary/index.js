import { fetchSummary } from '@/api/admin/summary'

export default {
  namespaced: true,
  getters: {
    vistor: state => state.vistor
  },
  state: {
    vistor: {
      columns: ['date', 'times'],
      rows: []
    }
  },
  mutations: {
    SET_VISTOR(state, val) {
      state.vistor.rows = val
    }
  },
  actions: {
    async fetch({ commit }) {
      try {
        let { data } = await fetchSummary()
        commit('SET_VISTOR', data.vistor)
      } catch (err) {
        throw err
      }
    }
  }
}
