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
  mutation: {
    SET_CITY: (state, city) => {
      state.city = city
    }
  },
  action: {
    setcc: ({ commit }, city) => {
      commit('SET_CITY', city)
    }
  }
}
export default app
