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
    async nuxtServerInit({ commit, req }) {
      const info = await Promise.all([api.dishelpdo.getDishelpdo()])
      if (info.length) {
        const dishelpdo = info[0].data.data
        commit('setdishelpdo', dishelpdo.ability)
      }
    }
  }
}
export default dishelpdo
