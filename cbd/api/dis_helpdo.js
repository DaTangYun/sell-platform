import axios from './http'
const dishelpdo = {
  getDishelpdo(params) {
    // console.log(axios)
    return axios.get('/api/ability/lists', { params })
  }
}
export default dishelpdo
