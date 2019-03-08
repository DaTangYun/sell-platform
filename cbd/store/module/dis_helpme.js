import api from '@/api/index'
const dishelpme = {
  state: {
    helpmelist: [],
    helpmeprofile: {},
    helpdetail: {},
    helpedid: {},
    helpedit: {},
    helpadd: {},
    addhelp: {},
    deletehelp: {}
  },
  mutations: {
    sethelpmelist(state, data) {
      state.helpmelist = data
    },
    sethelpmprofile(state, data) {
      state.helpmeprofile = data
    },
    sethelpmdetail(state, data) {
      state.helpdetail = data
    },
    sethelpedit(state, data) {
      state.helpedit = data
    },
    sethelpedid(state, data) {
      state.helpedid = data
    },
    sethelpadd(state, data) {
      state.helpadd = data
    },
    setaddhelp(state, data) {
      state.addhelp = data
    },
    setdelete(state, data) {
      state.deletehelp = data
    }
  },
  actions: {
    async helpmelist({ commit }, params) {
      const info = await api.dishelpme.getdishelpme({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const helpmelist = info.data.data
        commit('sethelpmelist', helpmelist.ability)
        return helpmelist
      }
    },
    async helpmprofile({ commit }, params) {
      const info = await api.dishelpme.gethelpmeprofile({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const helpmeprofile = info.data.data
        commit('sethelpmprofile', helpmeprofile.cases)
        return helpmeprofile
      }
    },
    async helpdetail({ commit }, params) {
      const info = await api.dishelpme.gethelpdetail({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const helpdetail = info.data.data
        commit('sethelpmdetail', helpdetail.detail)
        return helpdetail
      }
    },
    async helpeditid({ commit }, params) {
      const info = await api.dishelpme.gethelpeditid({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const helpedid = info.data.data
        commit('sethelpedid', helpedid.data)
        return helpedid
      }
    },
    async helpedit({ commit }, params) {
      const info = await api.dishelpme.gethelpedit({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const helpedit = info.data.data
        commit('sethelpedit', helpedit.data)
        return helpedit
      }
    },
    // 获取添加时候的分类
    async helpadd({ commit }, params) {
      const info = await api.dishelpme.getheloadd({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const helpadd = info.data.data
        commit('sethelpadd', helpadd.cate)
        return helpadd
      }
    },
    // 添加帮帮我
    async addhelplist({ commit }, params) {
      const info = await api.dishelpme.getaddlist({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const addhelp = info.data.data
        commit('setaddhelp', addhelp)
        return addhelp
      }
    },
    async deletehelp({ commit }, params) {
      const info = await api.dishelpme.getdeletehelp({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const deletehelp = info.data.data
        commit('setdelete', deletehelp)
        return deletehelp
      }
    }
  }
}
export default dishelpme
