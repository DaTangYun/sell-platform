import api from '@/api/index'
const disactive = {
  state: {
    activelist: [],
    useractiveprofile: [],
    activeprofil: {},
    deleteactive: {},
    deleteuseractive: {}
  },
  mutations: {
    setactivelist(state, data) {
      state.activelist = data
    },
    setuseractiveprofile(state, data) {
      state.useractiveprofile = data
    },
    setactiveprofil(state, data) {
      state.activeprofil = data
    },
    setdeleteactive(state, data) {
      state.deleteactive = data
    },
    setdeletusereactive(state, data) {
      state.deleteuseractive = data
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
        const pro = info.data.data
        commit('setuseractiveprofile', pro.userActive)
        return pro
      }
    },
    async activeprofillist({ commit }, params) {
      const info = await api.disactive.getactiveprofile({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const list = info.data.data
        commit('setactiveprofil', list.active)
        return list
      }
    },
    async deleteactive({ commit }, params) {
      const info = await api.disactive.getdeleteactive({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const deleteactive = info.data
        commit('setdeleteactive', deleteactive)
        return deleteactive
      }
    },
    async deleteuser({ commit }, params) {
      const info = await api.disactive.getdeleteuseractive({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const deleteuseractive = info.data
        commit('setdeletusereactive', deleteuseractive)
        return deleteuseractive
      }
    }
  }
}
export default disactive
