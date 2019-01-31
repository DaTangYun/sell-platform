import Vue from 'vue'
import Vuex from 'vuex'
import app from '../datastore/module/app'
Vue.use(Vuex)
const store = () =>
  new Vuex.Store({
    modules: {
      app
    }
  })
export default store
