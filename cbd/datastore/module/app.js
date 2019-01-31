let defaultcity = ''
try {
  const xian = sessionStorage.getItem('xian')
  if (sessionStorage.getItem('xian')) {
    defaultcity = xian
  }
} catch (error) {}

const app = {
  store: {
    city: defaultcity
  },
  mutations: {
    SET_CITY: (state, city) => {
      state.city = city
    }
  },
  actions: {
    setCity: ({ commit }, city) => {
      commit('SET_CITY', city)
    }
  }
}
export default app
