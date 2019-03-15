import api from '@/api/index'
const dishelpdo = {
  state: {
    dishelpdo: [],
    abilityprofile: {},
    abilitylists: {},
    abilitydetail: {},
    addcomment: {},
    abilityeditfl: {},
    bjnbhg: {},
    newnbhgfl: {},
    newability: {},
    deleteability: {},
    abilitymessage: {},
    addcommentnwwd: {},
    addreply: {}
  },
  mutations: {
    setdishelpdo(state, data) {
      state.dishelpdo = data
    },
    setabilityprofile(state, data) {
      state.abilityprofile = data
    },
    setabilitylists(state, data) {
      state.abilitylists = data
    },
    setabilitydetails(state, data) {
      state.abilitydetail = data
    },
    setaddcomment(state, data) {
      state.addcomment = data
    },
    setabilityeditfl(state, data) {
      state.abilityeditfl = data
    },
    setbgnbhg(state, data) {
      state.bjnbhg = data
    },
    setnewnbhgfl(state, data) {
      state.newnbhgfl = data
    },
    setnewability(state, data) {
      state.newability = data
    },
    setdeleteability(state, data) {
      state.deleteability = data
    },
    setabilitymessage(state, data) {
      state.abilitymessage = data
    },
    // 你问我答
    setaddnwwdcomment(state, data) {
      state.addcommentnwwd = data
    },
    setaddreply(state, data) {
      state.addreply = data
    }
  },
  actions: {
    async helpdolist({ commit }, params) {
      const info = await api.dishelpdo.getDishelpdo({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const dishelpdo = info.data.data
        commit('sethelpmelist', dishelpdo)
        return dishelpdo
      }
    },
    async abilityprofile({ commit }, params) {
      const info = await api.dishelpdo.getabilityprofile({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const abilityprofile = info.data.data
        commit('setabilityprofile', abilityprofile.cases)
        return abilityprofile
      }
    },
    async abilityls({ commit }, params) {
      const info = await api.dishelpdo.getabilitylists({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const abilitylists = info.data.data
        commit('setabilitylists', abilitylists.comment)
        return abilitylists
      }
    },
    async details({ commit }, params) {
      const info = await api.dishelpdo.getabilitydetail({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const abilitydetail = info.data.data
        commit('setabilitydetails', abilitydetail.data)
        return abilitydetail
      }
    },
    async addcom({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.dishelpdo.addcomment({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const addcomment = info.data.data
        commit('setaddcomment', addcomment.data)
        return addcomment
      }
    },
    async abilityeditfl({ commit }, params) {
      // params = Object.assign({}, {params}, { cate_id: params.cate_id })
      const info = await api.dishelpdo.getabilityeditfl({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const abilityeditfl = info.data.data
        commit('setabilityeditfl', abilityeditfl.data)
        return abilityeditfl
      }
    },
    async changenbhg({ commit }, params) {
      const info = await api.dishelpdo.getbjnbgh({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const bjnbhg = info.data
        commit('setbgnbhg', bjnbhg)
        return bjnbhg
      } else {
        const bjnbhg = info.data
        commit('setbgnbhg', bjnbhg)
        return bjnbhg
      }
    },
    async addnewnbhgfl({ commit }, params) {
      const info = await api.dishelpdo.getnewnbhgfl({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const newnbhgfl = info.data.data
        commit('setnewnbhgfl', newnbhgfl.cate)
        return newnbhgfl
      }
    },
    async addnewabil({ commit }, params) {
      const info = await api.dishelpdo.getnewability({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const newability = info.data
        commit('setnewability', newability)
        return newability
      } else {
        const newability = info.data
        commit('setnewability', newability)
        return newability
      }
    },
    async deleteability({ commit }, params) {
      const info = await api.dishelpdo.getdeleteability({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const deleteability = info.data
        commit('setdeleteability', deleteability)
        return deleteability
      }
    },
    async abilitymessagelist({ commit }, params) {
      const info = await api.dishelpdo.getabilitymessagelist({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const abilitymessage = info.data.data
        commit('setabilitymessage', abilitymessage.message)
        return abilitymessage
      }
    },
    async addnewnbhg({ commit }, params) {
      const info = await api.dishelpdo.getaddcomment({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const deleteability = info.data
        commit('setaddnwwdcomment', deleteability)
        return deleteability
      }
    },
    async replyadd({ commit }, params) {
      const info = await api.dishelpdo.getaddreply({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const deleteability = info.data
        commit('setaddreply', deleteability)
        return deleteability
      }
    }
  }
}
export default dishelpdo
