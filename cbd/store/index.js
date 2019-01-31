import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'
import getters from './getters/getters'
Vue.use(Vuex)
const store = () =>
  new Vuex.Store({
    modules: {
      app
    },
    getters
  })
export default store
