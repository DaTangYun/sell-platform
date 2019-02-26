import api from '@/api/index'
const helpwis = {
  state: {
    helpwis: [],
    caselist: []
  },
  mutations: {
    sethelpwis(state, data) {
      state.helpwis = data
    },
    setcaselist(state, data) {
      state.caselist = data
    }
  },
  actions: {
    async financelist({ commit }, params) {
      const info = await api.helpwis.getHelpwis({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const financelist = info.data.data
        commit('sethelpwis', financelist)
      }
    },
    async caselist({ commit }, params) {
      const info = await api.helpwis.getcaselist({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const caselist = info.data.data
        // console.log(caselist)
        commit('setcaselist', caselist.cases)
      }
    }
  }
}
export default helpwis
