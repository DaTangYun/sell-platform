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
    async nuxtServerInit({ commit }) {
      const info = await Promise.all([api.help.getShowme()])
      if (info.length) {
        const showmelist = info[0].data.data
        commit('setShowme', showmelist.showme)
      }
    }
  }
}
export default showme
