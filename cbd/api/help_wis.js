import axios from './http'
const helpwis = {
  getHelpwis(params) {
    // console.log(axios)
    return axios.get('/api/finance/lists', { params })
  }
}
export default helpwis
