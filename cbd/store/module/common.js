import api from '@/api/index'
const common = {
  state: {
    slider: [],
    lianjie: [],
    error: '',
    banquan: {},
    callme: {}
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
    },
    setcallme(state, data) {
      state.callme = data
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
        commit('setBanquan', banquans.site)
      } else {
        const data = '请稍后再试'
        commit('catchError', data)
      }
    },
    async callme({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.about({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const callme = info.data.data
        commit('setcallme', callme.detail)
        return callme
      }
    }
  }
}
export default common
