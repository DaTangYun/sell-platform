// import Cookie from 'js-cookie'
import cookie from '@/assets/js/cookie'
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
    meta: [],
    logindata: {},
    sms: {},
    loginout: {},
    usercommit: {},
    changemobile: {},
    changepass: {},
    userinfo: {},
    changeinfo: {},
    exitdata: {},
    useridenty: {},
    userresetpwd: {},
    test: {},
    messageDetail: {},
    headDetail: {},
    abilityDetailtest: {},
    helpmeDetailtest: {},
    callmetest: {},
    caseDetailtest: {},
    financeDetailtest: {}
  },
  mutations: {
    setfinanceDetailtest(state, data) {
      state.financeDetailtest = data
    },
    setcaseDetailtest(state, data) {
      state.caseDetailtest = data
    },
    setcallmetest(state, data) {
      state.callmetest = data
    },
    sethelpmeDetailtest(state, data) {
      state.helpmeDetailtest = data
    },
    setabilityDetailtest(state, data) {
      state.abilityDetailtest = data
    },
    setheadDetail(state, data) {
      state.headDetail = data
    },
    setMessageDetail(state, data) {
      state.messageDetail = data
    },
    setuserresetpwd(state, data) {
      state.userresetpwd = data
    },
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
    },
    setlogin(state, data) {
      state.logindata = data
    },
    setsms(state, data) {
      state.sms = data
    },
    setloginout(state, data) {
      state.loginout = data
    },
    setusercomment(state, data) {
      state.usercommit = data
    },
    setchangemobile(state, data) {
      state.changemobile = data
    },
    setchangepass(state, data) {
      state.changepass = data
    },
    setuserinfo(state, data) {
      state.userinfo = data
    },
    setchangeinfo(state, data) {
      state.changeinfo = data
    },
    setexit(state, data) {
      state.exitdata = data
    },
    seruseridenty(state, data) {
      state.useridenty = data
    },
    settest(state, data) {
      state.test = data
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
      console.log(info)
      if (info.data.code === api.CODE_OK && info.data) {
        const images = info.data
        commit('setimages', images)
        return images
      }
    },
    async logindata({ commit }, params) {
      const info = await api.common.getlogin({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const { userinfo } = info.data.data
        commit('setlogin', userinfo)
        localStorage.setItem('USERINFO', JSON.stringify(userinfo))
        cookie.set(userinfo.token)
        return userinfo
      }
    },
    async smsdata({ commit }, params) {
      const info = await api.common.getsmssend({
        ...params
      })
      if (info.data.code === api.CODE_OK) {
        const sms = info.data
        commit('setsms', sms)
        return sms
      } else {
        const sms = info.data
        commit('setsms', sms)
        return sms
      }
    },
    async loginout({ commit }, params) {
      const info = await api.common.getlogout({
        ...params
      })
      if (info.data.code === api.CODE_OK) {
        const loginout = info.data
        cookie.remove()
        commit('setloginout', loginout)
        return loginout
      }
    },
    async usercommit({ commit }, params) {
      const info = await api.common.getusercommit({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const usercomment = info.data.data
        commit('setusercomment', usercomment.comment)
        return usercomment
      }
    },
    async userchangemobile({ commit }, params) {
      const info = await api.common.getchangemobile({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const changemobile = info.data
        commit('setchangemobile', changemobile)
        return changemobile
      } else {
        const changepass = info.data
        commit('setchangemobile', changepass)
        return changepass
      }
    },
    async userchangepass({ commit }, params) {
      const info = await api.common.getchangepass({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const changepass = info.data
        commit('setchangepass', changepass)
        return changepass
      } else {
        const changepass = info.data
        commit('setchangepass', changepass)
        return changepass
      }
    },
    async userinfo({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.getuserinfo({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const userinfo = info.data.data
        commit('setuserinfo', userinfo.info)
        return userinfo
      }
    },
    async changeuserinfo({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.getuserchangeinfo({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const changeinfo = info.data
        commit('setchangeinfo', changeinfo)
        return changeinfo
      } else {
        const changeinfo = info.data
        commit('setchangeinfo', changeinfo)
        return changeinfo
      }
    },
    async exituser({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.getexit({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const exitdata = info.data
        commit('setexit', exitdata)
        cookie.remove()
        localStorage.removeItem('USERINFO')
        return exitdata
      }
    },
    async userind({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.getuseridenty({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const useriden = info.data
        commit('seruseridenty', useriden)
        return useriden
      } else {
        const useriden = info.data
        commit('seruseridenty', useriden)
        return useriden
      }
    },
    async userresetpwd({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.getuserresetpwd({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const useriden = info.data
        commit('setuserresetpwd', useriden)
        return useriden
      } else {
        const useriden = info.data
        commit('setuserresetpwd', useriden)
        return useriden
      }
    },
    async test({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.gettest({
        ...params
      })
      commit('settest', info.data.data)
      return info.data.data
    },
    async messagetest({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.gettest({
        ...params
      })
      commit('setMessageDetail', info.data.data)
      return info.data.data
    },
    async headtest({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.gettest({
        ...params
      })
      commit('setheadDetail', info.data.data)
      return info.data.data
    },
    async abilitytest({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.gettest({
        ...params
      })
      commit('setabilityDetailtest', info.data.data)
      return info.data.data
    },
    async helpmetest({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.gettest({
        ...params
      })
      commit('sethelpmeDetailtest', info.data.data)
      return info.data.data
    },
    async callmetest({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.gettest({
        ...params
      })
      commit('setcallmetest', info.data.data)
      return info.data.data
    },
    async casetest({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.gettest({
        ...params
      })
      commit('setcaseDetailtest', info.data.data.seo)
      return info.data.data
    },
    async fincetest({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.common.gettest({
        ...params
      })
      commit('setfinanceDetailtest', info.data.data.seo)
      return info.data.data
    }
  }
}
export default common
