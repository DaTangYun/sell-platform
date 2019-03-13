<<<<<<< HEAD
import api from '@/api/index'
const metaInfo = {
  state: {
    homeMeta: {},
    loginMeta: {},
    registerMeta: {},
    identMeta: {},
    errorMsg: '',
    messageMeta: {}
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
    setIdent(state, data) {
      state.identMeta = data
    },
    setMessage(state, data) {
      state.messageMeta = data
    },
    catchError(state, data) {
      state.errorMsg = data
    }
  },
  actions: {
    async nuxtServerInit({ commit }) {
      const info = await Promise.all([
        api.meta.commonSeo({
          scene: 'home',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'register',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'login',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'ident',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'message',
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
        const ident = info[3].data.data
        commit('setIdent', ident.seo)
        const message = info[4].data.data
        commit('setMessage', message.seo)
      } else {
        const data = '请稍后再试'
        commit('catchError', data)
      }
    }
  }
}
export default metaInfo
=======
import api from '@/api/index'
const metaInfo = {
  state: {
    homeMeta: {},
    loginMeta: {},
    registerMeta: {},
    identMeta: {},
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
    setIdent(state, data) {
      state.identMeta = data
    },
    catchError(state, data) {
      state.errorMsg = data
    }
  },
  actions: {
    async nuxtServerInit({ commit }) {
      const info = await Promise.all([
        api.meta.commonSeo({
          scene: 'home',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'register',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'login',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'ident',
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
        const ident = info[3].data.data
        console.log(ident.seo)
        commit('setIdent', ident.seo)
      } else {
        const data = '请稍后再试'
        commit('catchError', data)
      }
    }
  }
}
export default metaInfo
>>>>>>> 4dc6617417fa5c53f8192cdeb8ca848804f85fb2
