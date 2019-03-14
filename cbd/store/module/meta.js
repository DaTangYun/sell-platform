import api from '@/api/index'
const metaInfo = {
  state: {
    homeMeta: {},
    loginMeta: {},
    registerMeta: {},
    identMeta: {},
    errorMsg: '',
    messageMeta: {},
    messageDetail: {},
    topline: {},
    toplineDetailMeta: {},
    cloudMeta: {},
    libraMeta: {},
    financeDetailMeta: {},
    casesDetailMeta: {},
    showMeta: {},
    showDetailMeta: {},
    abilityMeta: {},
    abilityDetailMeta: {},
    helpmeMeta: {},
    helpmeDetailMeta: {},
    activeMeta: {},
    profileMeta: {},
    pageMeta: {}
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
    setMessageDetail(state, data) {
      state.messageDetail = data
    },
    setTopline(state, data) {
      state.topline = data
    },
    setToplineDetailMeta(state, data) {
      state.toplineDetailMeta = data
    },
    setcloudMeta(state, data) {
      state.cloudMeta = data
    },
    setlibraMeta(state, data) {
      state.libraMeta = data
    },
    setfinanceDetailMeta(state, data) {
      state.financeDetailMeta = data
    },
    setcasesDetailMeta(state, data) {
      state.casesDetailMeta = data
    },
    setshowMeta(state, data) {
      state.showMeta = data
    },
    setshowDetailMeta(state, data) {
      state.showDetailMeta = data
    },
    setabilityMeta(state, data) {
      state.abilityMeta = data
    },
    setabilityDetailMeta(state, data) {
      state.abilityDetailMeta = data
    },
    sethelpmeMeta(state, data) {
      state.helpmeMeta = data
    },
    sethelpmeDetailMeta(state, data) {
      state.helpmeDetailMeta = data
    },
    setactiveMeta(state, data) {
      state.activeMeta = data
    },
    setprofileMeta(state, data) {
      state.profileMeta = data
    },
    setpageMeta(state, data) {
      state.pageMeta = data
    },
    catchError(state, data) {
      state.errorMsg = data
    }
  },
  actions: {
    async nuxtServerInit({ commit }, { app, route }) {
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
        }),
        api.meta.commonSeo({
          scene: 'topline',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'cloud',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'libra',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'show',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'ability',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'helpme',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'active',
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
        const topline = info[5].data.data
        commit('setTopline', topline.seo)
        const cloud = info[6].data.data
        commit('setcloudMeta', cloud.seo)
        const libra = info[7].data.data
        commit('setlibraMeta', libra.seo)
        const show = info[8].data.data
        commit('setshowMeta', show.seo)
        const ability = info[9].data.data
        commit('setabilityMeta', ability.seo)
        const helpme = info[10].data.data
        commit('sethelpmeMeta', helpme.seo)
        const active = info[11].data.data
        commit('setactiveMeta', active.seo)
      } else {
        const data = '请稍后再试'
        commit('catchError', data)
      }
    }
  }
}
export default metaInfo
