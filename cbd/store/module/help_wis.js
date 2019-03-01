import api from '@/api/index'
const helpwis = {
  state: {
    helpwis: [],
    caselist: [],
    documentlist: [],
    documentprofile: {},
    caseprofile: {}
  },
  mutations: {
    sethelpwis(state, data) {
      state.helpwis = data
    },
    setcaselist(state, data) {
      state.caselist = data
    },
    setdocumentlist(state, data) {
      state.documentlist = data
    },
    setdocumentprofile(state, data) {
      state.documentprofile = data
    },
    setcaseprofile(state, data) {
      state.caseprofile = data
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
        return caselist
      }
    },
    async documentlist({ commit }, params) {
      const info = await api.helpwis.getdocumentlist({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const documentlist = info.data.data
        commit('setdocumentlist', documentlist)
        return documentlist
      }
    },
    async documentprofile({ commit }, params) {
      const info = await api.helpwis.getdocumentprofile({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const documentprofile = info.data.data
        commit('setdocumentprofile', documentprofile.cases)
        return documentprofile
      }
    },
    async caseprofile({ commit }, params) {
      const info = await api.helpwis.getcasesprofile({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const caseprofile = info.data.data
        commit('setcaseprofile', caseprofile.cases)
        return caseprofile
      }
    }
  }
}
export default helpwis
