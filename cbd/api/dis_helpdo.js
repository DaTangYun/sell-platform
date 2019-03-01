import axios from './http'
const dishelpdo = {
  getDishelpdo(params) {
    return axios.get('/api/ability/lists', { params })
  },
  getabilityprofile(params) {
    return axios.get('/api/ability/profile', { params })
  },
  // 评论列表
  getabilitylists(params) {
    return axios.get('/api/ability_comment/lists', { params })
  }
}
export default dishelpdo
