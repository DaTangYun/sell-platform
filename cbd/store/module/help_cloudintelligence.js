import api from '@/api/index'
const cloudintelligence = {
  state: {
    cloudintelligence: []
  },
  mutations: {
    setcloudintelligence(state, data) {
      state.cloudintelligence = data
    }
  },
  actions: {
    async nuxtServerInit({ commit, req }) {
      const info = await Promise.all([
        api.cloudintelligence.getcloudintelligence()
      ])
      if (info.length) {
        const cloudintelligence = info[0].data.data
        commit('setcloudintelligence', cloudintelligence.cloud)
      }
    }
  }
}
export default cloudintelligence
