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
      let detailid, casesDetailid
      const flag = route.query.flag
      if (flag === '财经法规') {
        detailid = route.params.id
      } else {
        casesDetailid = route.params.id
      }
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
          scene: 'messageDetail',
          id: route.params.id
        }),
        api.meta.commonSeo({
          scene: 'topline',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'toplineDetail',
          id: route.params.id
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
          scene: 'financeDetail',
          id: detailid
        }),
        api.meta.commonSeo({
          scene: 'casesDetail',
          id: casesDetailid
        }),
        api.meta.commonSeo({
          scene: 'show',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'showDetail',
          id: route.params.id
        }),
        api.meta.commonSeo({
          scene: 'ability',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'abilityDetail',
          id: route.params.id
        }),
        api.meta.commonSeo({
          scene: 'helpme',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'helpmeDetail',
          id: route.params.id
        }),
        api.meta.commonSeo({
          scene: 'active',
          id: 0
        }),
        api.meta.commonSeo({
          scene: 'profile',
          id: route.params.id
        }),
        api.meta.commonSeo({
          scene: 'page',
          id: route.query.id
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
        const messageDetail = info[5].data.data
        commit('setMessageDetail', messageDetail.seo)
        console.log(messageDetail)
        const topline = info[6].data.data
        commit('setTopline', topline.seo)
        const toplineDetail = info[7].data.data
        commit('setToplineDetailMeta', toplineDetail.seo)
        const cloud = info[8].data.data
        commit('setcloudMeta', cloud.seo)
        const libra = info[9].data.data
        commit('setlibraMeta', libra.seo)
        const financeDetail = info[10].data.data
        commit('setfinanceDetailMeta', financeDetail.seo)
        const casesDetail = info[11].data.data
        // console.log(casesDetail.seo)
        commit('setcasesDetailMeta', casesDetail.seo)
        const show = info[12].data.data
        commit('setshowMeta', show.seo)
        const showDetail = info[13].data.data
        commit('setshowDetailMeta', showDetail.seo)
        const ability = info[14].data.data
        commit('setabilityMeta', ability.seo)
        const abilityDetail = info[15].data.data
        commit('setabilityDetailMeta', abilityDetail.seo)
        const helpme = info[16].data.data
        commit('sethelpmeMeta', helpme.seo)
        const helpmeDetail = info[17].data.data
        commit('sethelpmeDetailMeta', helpmeDetail.seo)
        const active = info[18].data.data
        commit('setactiveMeta', active.seo)
        const profile = info[19].data.data
        commit('setprofileMeta', profile.seo)
        app.router.go(-1)
        const page = info[20].data.data
        commit('setpageMeta', page.seo)
      } else {
        const data = '请稍后再试'
        commit('catchError', data)
      }
    }
  }
}
export default metaInfo
