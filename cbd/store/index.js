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
    state: {
      counter: 0
    },
    getters
  })
export default store
