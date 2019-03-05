import api from '@/api/index'
const dismyteam = {
  state: {
    dismyteam: [],
    myteamdetail: [],
    teampro: {},
    teamedit: {}
  },
  mutations: {
    setdismyteam(state, data) {
      state.dismyteam = data
    },
    setmyteamdetail(state, data) {
      state.myteamdetail = data
    },
    setteampro(state, data) {
      state.teampro = data
    },
    setteamedit(state, data) {
      state.teamedit = data
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
    },
    async dismyteampro({ commit }, params) {
      const info = await api.dismyteam.getteampro({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const teampro = info.data.data
        commit('setteampro', teampro.team)
        return teampro
      }
    },
    async dismyteamedit({ commit }, params) {
      const info = await api.dismyteam.getteamedit({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const teamedit = info.data.data
        commit('setteamedit', teamedit.data)
        return teamedit
      }
    }
  }
}
export default dismyteam
