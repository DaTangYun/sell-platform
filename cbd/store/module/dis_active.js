import api from '@/api/index'
const disactive = {
  state: {
    activelist: []
  },
  mutations: {
    setactivelist(state, data) {
      state.activelist = data
    }
  },
  actions: {
    async activelist({ commit }, params) {
      const info = await api.disactive.getdisactive({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const activelist = info.data.data
        commit('setactivelist', activelist)
      }
    }
  }
}
export default disactive
