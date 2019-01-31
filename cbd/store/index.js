import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/datastore/module/app'
import getters from '@/datastore/getters'
Vue.use(Vuex)
const store = () =>
  new Vuex.Store({
    modules: {
      app
    },
    getters
  })
export default store
