import api from '@/api/index'
const cloudhead = {
  state: {
    headlist: [],
    headcate: [],
    headtotal: 0,
    headdetail: []
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
    }
  }
}
export default cloudhead
