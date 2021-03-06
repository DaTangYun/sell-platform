// import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'
import common from './module/common'
import cloudhead from './module/cloud_head'
import cloudinfo from './module/cloud_info'
import helpcloud from './module/help_cloud'
import helpwis from './module/help_wis'
import dishelpdo from './module/dis_helpdo'
import disactive from './module/dis_active'
import dishelpme from './module/dis_helpme'
import dismyteam from './module/dis_myteam'
import showme from './module/showme'
import metaInfo from './module/meta'
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
      dishelpdo,
      helpwis,
      disactive,
      dishelpme,
      dismyteam,
      metaInfo
    },
    getters
  })
export default store
