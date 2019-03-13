import api from '@/api/index'
const metaInfo = {
  state: {
    homeMeta: {},
    loginMeta: {},
    registerMeta: {},
    errorMsg: ''
  },
  mutations: {
    setHome(state, data) {
      state.homeMeta = data
    },
    setRegister(state, data) {
      state.registerMeta = data
    },
    setLogin(state, data) {
      state.loginMeta = data
    },
    catchError(state, data) {
      state.errorMsg = data
    }
  },
  actions: {
    async nuxtServerInit({ commit }, { route }) {
      const info = await Promise.all([
        api.meta.commonSeo({
          scene: 'home',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'login',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'register',
          id: 0
        })
      ])
      if (info.length) {
        const home = info[0].data.data
        commit('setHome', home.seo)
        const register = info[1].data.data
        commit('setRegister', register.seo)
        const login = info[2].data.data
        commit('setLogin', login.seo)
      } else {
        const data = '请稍后再试'
        commit('catchError', data)
      }
    }
  }
}
export default metaInfo
