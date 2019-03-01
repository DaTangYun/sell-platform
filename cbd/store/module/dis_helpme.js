import api from '@/api/index'
const dishelpme = {
  state: {
    helpmelist: [],
    helpmeprofile: {}
  },
  mutations: {
    sethelpmelist(state, data) {
      state.helpmelist = data
    },
    sethelpmprofile(state, data) {
      state.helpmeprofile = data
    }
  },
  actions: {
    async helpmelist({ commit }, params) {
      const info = await api.dishelpme.getdishelpme({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const helpmelist = info.data.data
        commit('sethelpmelist', helpmelist.cases)
        return helpmelist
      }
    },
    async helpmprofile({ commit }, params) {
      const info = await api.dishelpme.gethelpmeprofile({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const helpmeprofile = info.data.data
        commit('sethelpmprofile', helpmeprofile.cases)
        return helpmeprofile
      }
    }
  }
}
export default dishelpme
