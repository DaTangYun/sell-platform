import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'
import common from './module/common'
import cloudhead from './module/cloud_head'
import cloudinfo from './module/cloud_info'
import helpcloud from './module/help_cloud'
import dishelpdo from './module/dis_helpdo'
import headlist from './module/cloud_headlist'
import infolist from './module/cloud_infolist'
import cloudintelligence from './module/help_cloudintelligence'
import helpwis from './module/help_wis'
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
      helpcloud,
      helpwis,
      dishelpdo,
      headlist,
      infolist,
      cloudintelligence
    },
    getters
  })
export default store
