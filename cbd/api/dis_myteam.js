import axios from './http'
const dismyteam = {
  getdismyteam(params) {
    // console.log(axios)
    return axios.get('/api/team/lists', { params })
  },
  // 团队详情
  getteamdetail(params) {
    return axios.get('/api/team/detail', { params })
  },
  // 团队列表个人中心
  getteampro(params) {
    return axios.get('/api/team/profile', { params })
  },
  // 个人中心我的团队简介编辑
  getteamedit(params) {
    return axios.get('/api/team/edit', { params })
  }
}
export default dismyteam
