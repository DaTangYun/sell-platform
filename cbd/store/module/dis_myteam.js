import api from '@/api/index'
const dismyteam = {
  state: {
    dismyteam: [],
    myteamdetail: []
  },
  mutations: {
    setdismyteam(state, data) {
      state.dismyteam = data
    },
    setmyteamdetail(state, data) {
      state.myteamdetail = data
    }
  },
  actions: {
    async dismyteamlist({ commit }, params) {
      const info = await api.dismyteam.getdismyteam({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const dismyteam = info.data.data
        commit('setdismyteam', dismyteam.team)
        return dismyteam
      }
    },
    async dismyteamdetail({ commit }, params) {
      const info = await api.dismyteam.getteamdetail({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const myteamdetail = info.data.data
        commit('setmyteamdetail', myteamdetail)
        return myteamdetail
      }
    }
  }
}
export default dismyteam
