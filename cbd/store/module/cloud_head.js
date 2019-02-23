import api from '@/api/index'
const cloudhead = {
  state: {
    cloudHead: []
  },
  mutations: {
    setcloudHead(state, data) {
      state.cloudHead = data
    }
  },
  actions: {
    async nuxtServerInit({ commit, req }) {
      const info = await Promise.all([api.cloudhead.getcloudMessage()])
      if (info.length) {
        const cloudHead = info[0].data.data
        commit('setcloudHead', cloudHead.toplineCate)
      }
    }
  }
}
export default cloudhead
