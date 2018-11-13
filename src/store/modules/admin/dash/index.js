import { fetchDash } from '@/api/admin/dash'

export default {
  namespaced: true,
  getters: {
    summary: state => state.summary
  },
  state: {
    summary: {
      total: 0,
      views: 0,
      share: 0,
      msgs: 0
    }
  },
  mutations: {
    SET_SUMMARY(state, val) {
      state.summary = val
    }
  },
  actions: {
    async fetch({ commit, dispatch }) {
      try {
        let { data } = await fetchDash()
        dispatch('admin/task/fetch', null, { root: true })
        dispatch('admin/summary/fetch', null, { root: true })
        commit('SET_SUMMARY', data.summary)
      } catch (err) {
        throw err
      }
    }
  }
}
