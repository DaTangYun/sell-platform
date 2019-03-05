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
      dismyteam
    },
    getters
  })
// export const actions = {
//   nuxtServerInit({ commit }, { req }) {
//     if (req.session && req.session.authUser) {
//       commit('SET_USER', req.session.authUser)
//     }
//   },
//   async login({ commit }, { mobile, password }) {
//     try {
//       const { data } = await axios.post('/api/user/login', {
//         mobile,
//         password
//       })
//       commit('SET_USER', data)
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         throw new Error('Bad credentials')
//       }
//       throw error
//     }
//   },
//   async logout({ commit }) {
//     await axios.post('/api/user/logout')
//     commit('SET_USER', null)
//   }
// }
export default store
