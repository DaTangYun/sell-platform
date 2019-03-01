import api from '@/api/index'
const common = {
  state: {
    slider: [],
    lianjie: [],
    error: '',
    banquan: {},
    callme: {},
    usergister: {},
    usershowmeinfo: {},
    images: {},
    meta: []
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
    },
    setusergister(state, data) {
      state.usergister = data
    },
    setimages(state, data) {
      state.images = data
    },
    setusershowmeinfo(state, data) {
      state.usershowmeinfo = data
    },
    setmeta(state, data) {
      state.meta = data
    }
  },
  actions: {
    async nuxtServerInit({ commit }, { route }) {
      commit('setmeta', route.meta)
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
    },
    async usergister({ commit }, params) {
      const info = await api.common.usergister({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const usergister = info.data.data
        commit('setusergister', usergister)
        return usergister
      }
    },
    async usershowmeinfo({ commit }, params) {
      const info = await api.common.getusershowmeInfor({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const usershowmeinfo = info.data.data
        commit('setusershowmeinfo', usershowmeinfo.showmeInfo)
        return usershowmeinfo
      }
    },
    async uploadimages({ commit }, params) {
      const info = await api.common.uploadimage({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const images = info.data.data
        commit('setimages', images)
        return images
      }
    }
  }
}
export default common
