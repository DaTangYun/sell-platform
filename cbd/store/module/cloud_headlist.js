import api from '@/api/index'
const headlist = {
  state: {
    headlist: []
  },
  mutations: {
    setheadlist(state, data) {
      state.headlist = data
    }
  },
  actions: {
    async nuxtServerInit({ commit, req }) {
      const info = await Promise.all([api.headlist.getheadlist()])
      if (info.length) {
        const headlist = info[0].data.data
        commit('setheadlist', headlist.topline)
      }
    }
  }
}
export default headlist
