import api from '@/api/index'
const helpcloud = {
  state: {
    helpcloud: []
  },
  mutations: {
    sethelpcloud(state, data) {
      state.helpcloud = data
    }
  },
  actions: {
    async nuxtServerInit({ commit, req }) {
      const info = await Promise.all([api.helpcloud.gethelpcloud()])
      if (info.length) {
        const helpcloud = info[0].data.data
        commit('sethelpcloud', helpcloud.cloud)
      }
    }
  }
}
export default helpcloud
