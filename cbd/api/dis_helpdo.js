import qs from 'qs'
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
  },
  // 能帮会干详情
  getabilitydetail(params) {
    return axios.get('/api/ability/detail', { params })
  },
  // 添加评论
  addcomment(params) {
    return axios.post('/api/ability_comment/add', qs.stringify(params))
  }
}
export default dishelpdo
