import api from '@/api/index'
const cloudinfo = {
  state: {
    cloudInfo: [],
    infolist: [],
    total: 0,
    infodetail: [],
    infoprofile: {},
    sendinfo: {},
    bcinfoedit: {},
    addinfo: {},
    deleteinfo: {}
  },
  mutations: {
    setcloudInfo(state, data) {
      state.cloudInfo = data
    },
    setinfolist(state, data) {
      state.infolist = data
    },
    settotal(state, data) {
      state.total = data
    },
    setinfodetail(state, data) {
      state.infodetail = data
    },
    setinfoprofile(state, data) {
      state.infoprofile = data
    },
    setsendinfo(state, data) {
      state.sendinfo = data
    },
    setbcinfoedit(state, data) {
      state.bcinfoedit = data
    },
    setaddinfo(state, data) {
      state.addinfo = data
    },
    setdelete(state, data) {
      state.deleteinfo = data
    }
  },
  actions: {
    async infolist({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.cloudinfo.getinfolist({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const infolist = info.data.data
        commit('setinfolist', infolist.message)
        commit('settotal', infolist.total)
        return infolist
      }
    },
    async nuxtServerInit({ commit, req }) {
      const info = await Promise.all([api.cloudinfo.getcloudInfo()])
      if (info.length) {
        const cloudInfo = info[0].data.data
        commit('setcloudInfo', cloudInfo.messageCate)
        return cloudInfo
      }
    },
    async infodetail({ commit }, params) {
      const info = await api.cloudinfo.getinfodetail({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const infodetail = info.data.data
        commit('setinfodetail', infodetail.detail)
        return infodetail
      }
    },
    async infoprofile({ commit }, params) {
      const info = await api.cloudinfo.getinfoprofile({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const infoprofile = info.data.data
        commit('setinfoprofile', infoprofile.message)
        return infoprofile
      }
    },
    async sendinfolist({ commit }, params) {
      const info = await api.cloudinfo.getsendinfo({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const sendinfo = info.data.data
        commit('setsendinfo', sendinfo.data)
        return sendinfo
      }
    },
    async bcinfoit({ commit }, params) {
      const info = await api.cloudinfo.getsendedit({
        ...params
      })
<<<<<<< HEAD
      if (info.data.code === api.CODE_OK && info.data) {
        const bcinfoedit = info.data
        console.log(bcinfoedit)
=======
      if (info.data.code === api.CODE_ERROR) {
        const addinfo = info.data.msg
        commit('setbcinfoedit', addinfo)
        return addinfo
      }
      if (info.data.code === api.CODE_OK && info.data.data) {
        const bcinfoedit = info.data.data
>>>>>>> origin/home
        commit('setbcinfoedit', bcinfoedit)
        return bcinfoedit
      }
    },
    async addinfolist({ commit }, params) {
      const info = await api.cloudinfo.getaddinfo({
        ...params
      })
      if (info.data.code === api.CODE_ERROR && info.data.data) {
        const addinfo = info.data.data
        commit('setaddinfo', addinfo)
        return addinfo
      }
      if (info.data.code === api.CODE_OK && info.data.data) {
        const addinfo = info.data.data
        commit('setaddinfo', addinfo.msg)
        return addinfo
      }
    },
    async deleteinfo({ commit }, params) {
      const info = await api.cloudinfo.getdelete({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const deleteinfo = info.data
        commit('setdelete', deleteinfo)
        return deleteinfo
      }
    }
  }
}
export default cloudinfo
