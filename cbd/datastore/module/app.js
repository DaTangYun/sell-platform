let defaultcity = '切换城市'
try {
  const xian = sessionStorage.getItem('xian')
  if (sessionStorage.getItem('xian')) {
    defaultcity = xian
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
    set_city: ({ commit }, city) => {
      commit('SET_CITY', city)
    }
  }
}
export default app
