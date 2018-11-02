import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import admin from './modules/admin'

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    admin
  },
  getters
})

export default store
