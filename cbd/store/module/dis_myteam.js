import api from '@/api/index'
const dismyteam = {
  state: {
    dismyteam: [],
    myteamdetail: [],
    teampro: {},
    teamedit: {},
    teamlist: {},
    teamapply: {},
    editteam: {},
    bjteam: {},
    addteam: {},
    addnewteam: {},
    teammember: {},
    examine: {}
  },
  mutations: {
    setdismyteam(state, data) {
      state.dismyteam = data
    },
    setmyteamdetail(state, data) {
      state.myteamdetail = data
    },
    setteampro(state, data) {
      state.teampro = data
    },
    setteamedit(state, data) {
      state.teamedit = data
    },
    setteamlist(state, data) {
      state.teamlist = data
    },
    setteamapply(state, data) {
      state.teamapply = data
    },
    seteditteam(state, data) {
      state.editteam = data
    },
    setbjteam(state, data) {
      state.bjteam = data
    },
    setaddteam(state, data) {
      state.addteam = data
    },
    setnewteam(state, data) {
      state.addnewteam = data
    },
    setteammember(state, data) {
      state.teammember = data
    },
    setexamine(state, data) {
      state.examine = data
    }
  },
  actions: {
    async dismyteamlist({ commit }, params) {
      const info = await api.dismyteam.getdismyteam({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const dismyteam = info.data.data
        commit('setdismyteam', dismyteam.team)
        return dismyteam
      }
    },
    async dismyteamdetail({ commit }, params) {
      const info = await api.dismyteam.getteamdetail({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const myteamdetail = info.data.data
        commit('setmyteamdetail', myteamdetail)
        return myteamdetail
      }
    },
    async dismyteampro({ commit }, params) {
      const info = await api.dismyteam.getteampro({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const teampro = info.data.data
        commit('setteampro', teampro.team)
        return teampro
      }
    },
    async dismyteamedit({ commit }, params) {
      const info = await api.dismyteam.getteamedit({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const teamedit = info.data.data
        commit('setteamedit', teamedit.row)
        return teamedit
      }
    },
    async dismyteamlistmy({ commit }, params) {
      const info = await api.dismyteam.getteamlist({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const teamlist = info.data.data
        commit('setteamlist', teamlist.member)
        return teamlist
      }
    },
    async dismyteamapply({ commit }, params) {
      const info = await api.dismyteam.getteamapply({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const teamapply = info.data.data
        commit('setteamapply', teamapply.member)
        return teamapply
      }
    },
    async bjteamedit({ commit }, params) {
      const info = await api.dismyteam.getbjteamedit({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const editteam = info.data.data
        commit('seteditteam', editteam.row)
        return editteam
      }
    },
    async bjteaminfo({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.dismyteam.getteameditbj({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const bjteam = info.data
        commit('setbjteam', bjteam)
        return bjteam
      }
    },
    async addteam({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.dismyteam.getteamadd({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const addteam = info.data
        commit('setaddteam', addteam)
        return addteam
      } else {
        return info.data
      }
    },
    // 申请加入团队
    async addnewteam({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.dismyteam.getaddnewteam({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const addteam = info.data
        commit('setnewteam', addteam)
        return addteam
      } else {
        return info.data
      }
    },
    // 查询成员
    async cxmember({ commit }, params) {
      const info = await api.dismyteam.getteammember({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const editteam = info.data.data
        commit('setteammember', editteam.member)
        return editteam
      }
    },
    async examineteam({ commit }, params) {
      const info = await api.dismyteam.examine({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const editteam = info.data.data
        commit('setexamine', editteam.member)
        return editteam
      }
    }
  }
}
export default dismyteam
