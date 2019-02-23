import api from '@/api/index'
const cloudinfo = {
  state: {
    cloudInfo: []
  },
  mutations: {
    setcloudInfo(state, data) {
      state.cloudInfo = data
    }
  },
  actions: {
    async nuxtServerInit({ commit, req }) {
      const info = await Promise.all([api.cloudinfo.getcloudInfo()])
      if (info.length) {
        const cloudInfo = info[0].data.data
        commit('setcloudInfo', cloudInfo.messageCate)
      }
    }
  }
}
export default cloudinfo
