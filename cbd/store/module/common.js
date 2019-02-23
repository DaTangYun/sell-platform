import api from '@/api/index'
const common = {
  state: {
    slider: []
  },
  mutations: {
    setSlider(state, data) {
      state.slider = data
    }
  },
  actions: {
    async nuxtServerInit({ commit, req }) {
      const res = await api.common.getSlider()
      const { data } = res
      if (data.code === api.CODE_OK && data.data) {
        const slider = data.data
        commit('setSlider', slider.carousel)
      }
      const dd = await api.common.getSlider()
      console.log(dd)
    }
  }
}
export default common
