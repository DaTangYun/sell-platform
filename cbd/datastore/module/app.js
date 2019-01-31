let defaultcity = '切换城市'
try {
  if (sessionStorage.xian) {
    defaultcity = sessionStorage.xian
  }
} catch (error) {}
const app = {
  state: {
    city: defaultcity
  },
  mutations: {
    SET_CITY: (state, city) => {
      state.city = city
    }
  },
  actions: {
    async set_city({ commit }, city) {
      await commit('SET_CITY', city)
    }
  },
  getters: {
    city(state) {
      return state.city
    }
  }
}
export default app
