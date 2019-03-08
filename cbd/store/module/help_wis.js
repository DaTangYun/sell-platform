import api from '@/api/index'
const helpwis = {
  state: {
    helpwis: [],
    caselist: [],
    documentlist: [],
    documentprofile: {},
    caseprofile: {},
    financedetail: {},
    deletedata: {},
    docuadd: {},
    document: {},
    error: {},
    addcase: {},
    caseinfo: {},
    qdcase: {},
    casedetail: {}
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
    },
    setfinancedetail(state, data) {
      state.financedetail = data
    },
    setdeletedata(state, data) {
      state.deletedata = data
    },
    setdocuadd(state, data) {
      state.docuadd = data
    },
    setdocument(state, data) {
      state.document = data
    },
    seterror(state, data) {
      state.error = data
    },
    setnewcase(state, data) {
      state.error = data
    },
    setcaseinfo(state, data) {
      state.caseinfo = data
    },
    setqdcase(state, data) {
      state.qdcase = data
    },
    setdetail(state, data) {
      state.casedetail = data
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
        return financelist
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
    },
    async financedetail({ commit }, params) {
      const info = await api.helpwis.getfinancedetail({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const financedetail = info.data.data
        commit('setfinancedetail', financedetail.detail)
        return financedetail
      }
    },
    async deletewendang({ commit }, params) {
      const info = await api.helpwis.getdelete({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const deletedata = info.data
        commit('setdeletedata', deletedata)
        return deletedata
      }
    },
    async docuadd({ commit }, params) {
      const info = await api.helpwis.getdocuadd({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const docuadd = info.data.data
        commit('setdocuadd', docuadd.cate)
        return docuadd
      }
    },
    async adddocument({ commit }, params) {
      const info = await api.helpwis.getdocument({
        ...params
      })
      if (info.data.code === api.CODE_ERROR) {
        const error = info.data
        commit('seterror', error)
        return error
      }
      if (info.data.code === api.CODE_OK && info.data.data) {
        const document = info.data.data
        commit('setdocument', document.cate)
        return document
      }
    },
    async addcases({ commit }, params) {
      const info = await api.helpwis.getnewcase({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const addcase = info.data
        commit('setnewcase', addcase)
        return addcase
      }
    },
    async getcaseinfo({ commit }, params) {
      const info = await api.helpwis.getcaseinfo({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const caseinfo = info.data.data
        commit('setcaseinfo', caseinfo)
        return caseinfo
      }
    },
    async qdcaseinfo({ commit }, params) {
      const info = await api.helpwis.getqdcase({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const qdcase = info.data
        commit('setqdcase', qdcase)
        return qdcase
      }
    },
    async addcasedetail({ commit }, params) {
      const info = await api.helpwis.getcasedetail({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const qdcase = info.data.data
        commit('setdetail', qdcase.detail)
        return qdcase
      }
    }
  }
}
export default helpwis
