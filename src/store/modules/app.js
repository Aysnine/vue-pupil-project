import { userLogin } from '@/api/app'

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
    async login({ commit }, { account, pass }) {
      try {
        let res = await userLogin({ account, pass })
        commit('SET_IS_LOGIN', true)
        return res
      } catch (err) {
        throw err // ! must throw if you neet .catch()
      }
    }
  }
}
