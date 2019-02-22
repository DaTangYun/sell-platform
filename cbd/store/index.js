import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'
import common from './module/common'
import getters from './getters/getters'
Vue.use(Vuex)
const store = () =>
  new Vuex.Store({
    modules: {
      app,
      common
    },
    getters
  })
export default store
