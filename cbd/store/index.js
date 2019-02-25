import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'
import common from './module/common'
import cloudhead from './module/cloud_head'
import cloudinfo from './module/cloud_info'
import helpcloud from './module/help_cloud'
import showme from './module/showme'
import getters from './getters/getters'
Vue.use(Vuex)
const store = () =>
  new Vuex.Store({
    modules: {
      app,
      common,
      showme,
      cloudinfo,
      cloudhead,
      helpcloud
    },
    getters
  })
export default store
