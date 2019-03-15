import axios from './http'
const help = {
  getShowme(params) {
    // console.log(axios)
    return axios.get('/api/user/showme', { params })
  }
}
export default help
