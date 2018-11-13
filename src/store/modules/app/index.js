import { userLogin, userLogout, userInfo, fetchRoles } from '@/api/app'
import Plugins from '@/plugin'
const { $cookie } = Plugins

export default {
  namespaced: true,
  state: {
    user: null,
    roles: []
  },
  mutations: {
    SET_USER(state, val) {
      state.user = val
    },
    SET_ROLES(state, val) {
      state.roles = val
    }
  },
  actions: {
    async init({ dispatch }) {
      try {
        let token = $cookie.get('token')
        if (token) {
          let rst = await dispatch('profile', token)
          return rst
        }
      } catch (err) {
        throw err
      }
    },
    async profile({ commit, dispatch }, token) {
      try {
        let rst = await userInfo(token)
        await dispatch('fetchRoles')
        let { data } = rst
        commit('SET_USER', data)
        return rst
      } catch (err) {
        $cookie.remove('token')
        throw err
      }
    },
    async login({ dispatch }, { account, pass }) {
      try {
        let rst = await userLogin({ account, pass })
        let { token } = rst
        $cookie.set('token', token)
        await dispatch('profile', token)
        return rst
      } catch (err) {
        throw err
      }
    },
    async logout({ commit }) {
      try {
        let rst = await userLogout()
        $cookie.remove('token')
        commit('SET_USER', null)
        return rst
      } catch (err) {
        throw err
      }
    },
    async fetchRoles({ commit }) {
      try {
        let rst = await fetchRoles()
        commit('SET_ROLES', rst.data.roles)
        return rst
      } catch (err) {
        throw err
      }
    }
  }
}
