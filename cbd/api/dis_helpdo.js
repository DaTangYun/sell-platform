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
  },
  // 编辑能帮会干时获取分类
  getabilityeditfl(params) {
    return axios.get('/api/ability/edit', { params })
  },
  // 提交编辑好的能帮会干
  getbjnbgh(params) {
    return axios.post('/api/ability/edit', qs.stringify(params))
  },
  // 添加新的能帮会干分类
  getnewnbhgfl(params) {
    return axios.get('/api/ability/add', { params })
  },
  // 添加新的能帮会干
  getnewability(params) {
    return axios.post('/api/ability/add', qs.stringify(params))
  },
  getdeleteability(params) {
    return axios.get('/api/ability/del', { params })
  }
}
export default dishelpdo
