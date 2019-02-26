import axios from './http'
const disactive = {
  getdisactive(params) {
    // console.log(axios)
    return axios.get('/api/active/lists', { params })
  }
}
export default disactive
