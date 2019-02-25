import api from '@/api/index'
const helpwis = {
  state: {
    helpwis: []
  },
  mutations: {
    sethelpwis(state, data) {
      state.helpwis = data
    }
  },
  actions: {
    async nuxtServerInit({ commit, req }) {
      const info = await Promise.all([api.helpwis.getHelpwis()])
      if (info.length) {
        const helpwis = info[0].data.data
        commit('sethelpwis', helpwis.finance)
      }
    }
  }
}
export default helpwis
