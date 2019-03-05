import api from '@/api/index'
const dishelpdo = {
  state: {
    dishelpdo: [],
    abilityprofile: {},
    abilitylists: {},
    abilitydetail: {},
    addcomment: {}
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
    },
    setabilitydetails(state, data) {
      state.abilitydetail = data
    },
    setaddcomment(state, data) {
      state.addcomment = data
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
    },
    async details({ commit }, params) {
      const info = await api.dishelpdo.getabilitydetail({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const abilitydetail = info.data.data
        commit('setabilitydetails', abilitydetail.data)
        return abilitydetail
      }
    },
    async addcom({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.dishelpdo.addcomment({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const addcomment = info.data.data
        commit('setaddcomment', addcomment.data)
        return addcomment
      }
    }
  }
}
export default dishelpdo
