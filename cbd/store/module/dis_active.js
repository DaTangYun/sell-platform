import api from '@/api/index'
const disactive = {
  state: {
    activelist: [],
    useractiveprofile: []
  },
  mutations: {
    setactivelist(state, data) {
      state.activelist = data
    },
    setuseractiveprofile(state, data) {
      state.useractiveprofile = data
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
        return activelist
      }
    },
    async useractiveprofile({ commit }, params) {
      const info = await api.disactive.getuseractiveprofile({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const useractiveprofile = info.data.data
        commit('setuseractiveprofile', useractiveprofile.userActive)
        return useractiveprofile
      }
    }
  }
}
export default disactive
