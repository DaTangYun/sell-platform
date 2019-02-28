import api from '@/api/index'
const dishelpdo = {
  state: {
    dishelpdo: []
  },
  mutations: {
    setdishelpdo(state, data) {
      state.dishelpdo = data
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
    }
  }
}
export default dishelpdo
