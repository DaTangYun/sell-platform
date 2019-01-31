import Vue from 'Vue'
import Vuex from 'Vuex'
import app from '../datastore/module/app'
import getters from '../datastore/getters'
Vue.use(Vuex)
const store = () =>
  new Vuex.Store({
    modules: {
      app
    },
    getters
  })
export default store
