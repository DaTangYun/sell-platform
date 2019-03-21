const app = {
  state: {
    city: ''
  },
  mutations: {
    SET_CITY: (state, city) => {
      state.city = city
    }
  },
  actions: {
    set_city({ commit }, city) {
      commit('SET_CITY', city)
    }
  }
}
export default app
