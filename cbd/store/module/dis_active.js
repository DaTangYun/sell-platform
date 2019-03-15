import api from '@/api/index'
const disactive = {
  state: {
    activelist: [],
    useractiveprofile: [],
    activeprofil: {},
    deleteactive: {},
    deleteuseractive: {},
    userdactive: {},
    // 编辑获取活动内容
    bjjqactivity: {},
    // 保存编辑
    bcbj: {},
    // 添加新活动
    addactive: {},
    useractiveadd: {}
  },
  mutations: {
    setactivelist(state, data) {
      state.activelist = data
    },
    setuseractiveprofile(state, data) {
      state.useractiveprofile = data
    },
    setactiveprofil(state, data) {
      state.activeprofil = data
    },
    setdeleteactive(state, data) {
      state.deleteactive = data
    },
    setdeletusereactive(state, data) {
      state.deleteuseractive = data
    },
    setuserdactive(state, data) {
      state.userdactive = data
    },
    seteditbj(state, data) {
      state.bjjqactivity = data
    },
    seteditbjbc(state, data) {
      state.bcbj = data
    },
    setaddactive(state, data) {
      state.addactive = data
    },
    setuseractiveadd(state, data) {
      state.useractiveadd = data
    }
  },
  actions: {
    async activelist({ commit }, params) {
      const info = await api.disactive.getdisactive({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const activelist = info.data.data
        commit('setactivelist', activelist)
        return activelist
      }
    },
    async useractiveprofile({ commit }, params) {
      const info = await api.disactive.getuseractiveprofile({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const pro = info.data.data
        commit('setuseractiveprofile', pro.userActive)
        return pro
      }
    },
    async activeprofillist({ commit }, params) {
      const info = await api.disactive.getactiveprofile({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const list = info.data.data
        commit('setactiveprofil', list.active)
        return list
      }
    },
    async deleteactive({ commit }, params) {
      const info = await api.disactive.getdeleteactive({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const deleteactive = info.data
        commit('setdeleteactive', deleteactive)
        return deleteactive
      }
    },
    async deleteuser({ commit }, params) {
      const info = await api.disactive.getdeleteuseractive({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const deleteuseractive = info.data
        commit('setdeletusereactive', deleteuseractive)
        return deleteuseractive
      }
    },
    async userduseractive({ commit }, params) {
      const info = await api.disactive.getuseractiveadd({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const userdactive = info.data
        commit('setuserdactive', userdactive)
        return userdactive
      } else {
        const userdactive = info.data
        commit('setuserdactive', userdactive)
        return userdactive
      }
    },
    // 保存编辑获取内容
    async editacbj({ commit }, params) {
      const info = await api.disactive.getactivitybj({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data.data) {
        const activelist = info.data.data
        commit('seteditbj', activelist.data)
        return activelist
      }
    },
    // 保存编辑
    async editacbjbc({ commit }, params) {
      const info = await api.disactive.getactivebc({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const activelist = info.data
        commit('seteditbjbc', activelist)
        return activelist
      } else {
        const activelist = info.data
        commit('seteditbjbc', activelist)
        return activelist        
      }
    },
    async addactive({ commit }, params) {
      const info = await api.disactive.getaddactivity({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const activelist = info.data
        commit('setaddactive', activelist)
        return activelist
      } else {
        const activelist = info.data
        commit('setaddactive', activelist)
        return activelist        
      }
    },
    async useractiveaddinfo({ commit }, params) {
      const info = await api.disactive.getusedactive({
        ...params
      })
      if (info.data.code === api.CODE_OK && info.data) {
        const activelist = info.data
        commit('setuseractiveadd', activelist)
        return activelist
      } else {
        const activelist = info.data
        commit('setuseractiveadd', activelist)
        return activelist
      }
    }
  }
}
export default disactive
