// let defaultcity = '切换城市'
// try {
//   if (sessionStorage.xian) {
//     defaultcity = sessionStorage.xian
//   }
// } catch (error) {}

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
