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
    async showMeList({ commit }, info) {
      const res = await api.help.getShowme({
        page: info.page,
        limit: info.limit
      })
      const data = res.data
      if (data.code === api.CODE_OK && data.data) {
        commit('setShowme', data.data)
      } else {
        commit('setError', '请稍后再试')
      }
    }
  }
}
export default showme
