import api from '@/api/index'
const cloudinfo = {
  state: {
    cloudInfo: [],
    infolist: [],
    total: 0
  },
  mutations: {
    setcloudInfo(state, data) {
      state.cloudInfo = data
    },
    setinfolist(state, data) {
      state.infolist = data
    },
    settotal(state, data) {
      state.total = data
    }
  },
  actions: {
    async infolist({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.cloudinfo.getinfolist({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const infolist = info.data.data
        commit('setinfolist', infolist.message)
        commit('settotal', infolist.total)
        return infolist
      }
    },
    async nuxtServerInit({ commit, req }) {
      const info = await Promise.all([api.cloudinfo.getcloudInfo()])
      if (info.length) {
        const cloudInfo = info[0].data.data
        commit('setcloudInfo', cloudInfo.messageCate)
        return cloudInfo
      }
    }
  }
}
export default cloudinfo
