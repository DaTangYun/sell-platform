import api from '@/api/index'
const showme = {
  state: {
    showmelist: [],
    error: ''
  },
  mutations: {
    setShowme(state, data) {
      state.showmelist = data
    },
    setError(state, data) {
      state.error = data
    }
  },
  actions: {
    async showMe({ commit }, params) {
      const info = await api.help.getShowme({
        page: params.page,
        limite: params.limit
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const showmelist = info.data.data
        commit('setShowme', showmelist.showme)
      }
      return info.data.data
    }
  }
}
export default showme
