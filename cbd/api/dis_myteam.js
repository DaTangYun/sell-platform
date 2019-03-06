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
  },
  // 个人中的团队成员
  getteamlist(params) {
    return axios.get('/api/team_apply/lists', { params })
  },
  // 团队审核通过的成员
  getteamapply(params) {
    return axios.get('/api/team_apply/apply', { params })
  }
}
export default dismyteam
