import api from '@/api/index'
const cloudhead = {
  state: {
    headlist: [],
    headcate: []
  },
  mutations: {
    setcloudHead(state, data) {
      state.headcate = data
    },
    setheadlist(state, data) {
      state.headlist = data
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
        return cloudinfo
      }
    },
    async nuxtServerInit({ commit, req }) {
      const info = await Promise.all([api.cloudhead.getcloudMessage()])
      if (info.length) {
        const headcate = info[0].data.data
        commit('setcloudHead', headcate.toplineCate)
      }
    }
  }
}
export default cloudhead
