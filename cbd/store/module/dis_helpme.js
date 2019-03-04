import api from '@/api/index'
const dishelpme = {
  state: {
    helpmelist: [],
    helpmeprofile: {},
    helpdetail: {}
  },
  mutations: {
    sethelpmelist(state, data) {
      state.helpmelist = data
    },
    sethelpmprofile(state, data) {
      state.helpmeprofile = data
    },
    sethelpmdetail(state, data) {
      state.helpdetail = data
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
    },
    async helpdetail({ commit }, params) {
      const info = await api.dishelpme.gethelpdetail({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const helpdetail = info.data.data
        commit('sethelpmdetail', helpdetail.detail)
        return helpdetail
      }
    }
  }
}
export default dishelpme
