import api from '@/api/index'
const dishelpdo = {
  state: {
    dishelpdo: [],
    abilityprofile: {},
    abilitylists: {}
  },
  mutations: {
    setdishelpdo(state, data) {
      state.dishelpdo = data
    },
    setabilityprofile(state, data) {
      state.abilityprofile = data
    },
    setabilitylists(state, data) {
      state.abilitylists = data
    }
  },
  actions: {
    async helpdolist({ commit }, params) {
      const info = await api.dishelpdo.getDishelpdo({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const dishelpdo = info.data.data
        commit('sethelpmelist', dishelpdo)
        return dishelpdo
      }
    },
    async abilityprofile({ commit }, params) {
      const info = await api.dishelpdo.getabilityprofile({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const abilityprofile = info.data.data
        commit('setabilityprofile', abilityprofile.cases)
        return abilityprofile
      }
    },
    async abilityls({ commit }, params) {
      const info = await api.dishelpdo.getabilitylists({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const abilitylists = info.data.data
        commit('setabilitylists', abilitylists.comment)
        return abilitylists
      }
    }
  }
}
export default dishelpdo
