import api from '@/api/index'
const infolist = {
  state: {
    infolist: []
  },
  mutations: {
    setinfolist(state, data) {
      state.infolist = data
    }
  },
  actions: {
    async nuxtServerInit({ commit, req }) {
      const info = await Promise.all([api.infolist.getinfolist()])
      if (info.length) {
        const infolist = info[0].data.data
        commit('setinfolist', infolist.message)
      }
    }
  }
}
export default infolist
