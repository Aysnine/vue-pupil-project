export default {
  state: {
    isLogin: false
  },
  mutations: {
    SET_IS_LOGIN(state, val) {
      state.isLogin = val
    }
  },
  actions: {
    async login({ commit }) {
      try {
        // ... request in here
        commit('SET_IS_LOGIN', true)
      } catch (err) {
        return err
      }
    }
  }
}
