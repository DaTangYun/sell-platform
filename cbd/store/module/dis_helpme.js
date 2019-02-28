import api from '@/api/index'
const dishelpme = {
  state: {
    helpmelist: []
  },
  mutations: {
    sethelpmelist(state, data) {
      state.helpmelist = data
    }
  },
  actions: {
    async helpmelist({ commit }, params) {
      const info = await api.dishelpme.getdishelpme({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const helpmelist = info.data.data
        commit('sethelpmelist', helpmelist.ability)
        return helpmelist
      }
    }
  }
}
export default dishelpme
