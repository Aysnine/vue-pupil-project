import { userLogin, userLogout, userInfo } from '@/api/app'
import Plugins from '@/plugin'
const { $cookie } = Plugins

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, val) {
      state.user = val
    }
  },
  actions: {
    async init({ dispatch }) {
      try {
        let token = $cookie.get('token')
        if (token) {
          let res = await dispatch('profile', token)
          return res
        }
      } catch (err) {
        throw err
      }
    },
    async profile({ commit }, token) {
      try {
        let res = await userInfo(token)
        let { data } = res
        commit('SET_USER', data)
        return res
      } catch (err) {
        throw err
      }
    },
    async login({ dispatch }, { account, pass }) {
      try {
        let res = await userLogin({ account, pass })
        let { token } = res
        $cookie.set('token', token)
        await dispatch('profile', token)
        return res
      } catch (err) {
        throw err
      }
    },
    async logout({ commit }) {
      try {
        let res = await userLogout()
        $cookie.remove('token')
        commit('SET_USER', null)
        return res
      } catch (err) {
        throw err
      }
    }
  }
}
