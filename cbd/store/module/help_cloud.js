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
    async helpcloudlist({ commit }, params) {
      const info = await api.helpcloud.gethelpcloud({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const helpcloud = info.data.data
        commit('sethelpcloud', helpcloud.cloud)
        return helpcloud
      }
    }
  }
}
export default helpcloud
