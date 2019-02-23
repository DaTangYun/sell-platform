import api from '@/api/index'
const common = {
  state: {
    slider: [],
    lianjie: [],
    error: '',
    banquan: {}
  },
  mutations: {
    setSlider(state, data) {
      state.slider = data
    },
    setLianjie(state, data) {
      state.lianjie = data
    },
    catchError(state, data) {
      state.error = data
    },
    setBanquan(state, data) {
      state.banquan = data
    }
  },
  actions: {
    async nuxtServerInit({ commit, req }) {
      const info = await Promise.all([
        api.common.getSlider(),
        api.common.getLianjie(),
        api.common.getBanquan()
      ])
      if (info.length) {
        const slider = info[0].data.data
        commit('setSlider', slider.carousel)
        const lianjies = info[1].data.data
        commit('setLianjie', lianjies.link)
        const banquans = info[2].data.data
        // console.log(banquans.site)
        commit('setBanquan', banquans.site)
      } else {
        const data = '请稍后再试'
        commit('catchError', data)
      }
    }
  }
}
export default common
