import api from '@/api/index'
const cloudhead = {
  state: {
    headlist: [],
    headcate: [],
    headtotal: 0,
    headdetail: [],
    headprofile: {},
    headedit: {},
    bcheadedit: {},
    newhead: {},
    deletehead: {}
  },
  mutations: {
    setcloudHead(state, data) {
      state.headcate = data
    },
    setheadlist(state, data) {
      state.headlist = data
    },
    setheadtotal(state, data) {
      state.headtotal = data
    },
    setheaddetail(state, data) {
      state.headdetail = data
    },
    setheadprofile(state, data) {
      state.headprofile = data
    },
    setheadedit(state, data) {
      state.headedit = data
    },
    setbcheadedit(state, data) {
      state.bcheadedit = data
    },
    setnewhead(state, data) {
      state.newhead = data
    },
    setdeletehead(state, data) {
      state.deletehead = data
    }
  },
  actions: {
    async headlist({ commit }, params) {
      const info = await api.cloudhead.getheadlist({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const cloudinfo = info.data.data
        commit('setheadlist', cloudinfo.topline)
        commit('setheadtotal', cloudinfo.total)
        return cloudinfo
      }
    },
    async nuxtServerInit({ commit, req }) {
      const info = await Promise.all([api.cloudhead.getcloudMessage()])
      if (info.length) {
        const headcate = info[0].data.data
        commit('setcloudHead', headcate.toplineCate)
      }
    },
    async headdetail({ commit }, params) {
      const info = await api.cloudhead.gettoplinedetail({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const headdetail = info.data.data
        commit('setheaddetail', headdetail.detail)
        return headdetail
      }
    },
    async headprofile({ commit }, params) {
      const info = await api.cloudhead.gettoplineprofile({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const headprofile = info.data.data
        commit('setheadprofile', headprofile.topline)
        return headprofile
      }
    },
    async headedit({ commit }, params) {
      const info = await api.cloudhead.gettoplinedit({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const headedit = info.data.data
        commit('setheadedit', headedit.data)
        return headedit
      }
    },
    async bcheadedit({ commit }, params) {
      const info = await api.cloudhead.bctoplineedit({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const bcheadedit = info.data
        commit('setbcheadedit', bcheadedit)
        return bcheadedit
      } else {
        const bcheadedit = info.data
        commit('setbcheadedit', bcheadedit)
        return bcheadedit
      }
    },
    async newhead({ commit }, params) {
      const info = await api.cloudhead.addnewhead({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const newhead = info.data
        commit('setnewhead', newhead.msg)
        return newhead
      } else {
        const newhead = info.data
        commit('setnewhead', newhead)
        return newhead
      }
    },
    async deletehead({ commit }, params) {
      const info = await api.cloudhead.getdeletehead({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const deletehead = info.data
        commit('setdeletehead', deletehead)
        return deletehead
      }
    }
  }
}
export default cloudhead
