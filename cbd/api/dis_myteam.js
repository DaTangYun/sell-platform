import qs from 'qs'
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
  },
  // 点击编辑获取团队信息
  getbjteamedit(params) {
    return axios.get('/api/team/edit', { params })
  },
  // 点击编辑后保存团队
  getteameditbj(params) {
    return axios.post('/api/team/edit', qs.stringify(params))
  },
  // 点击组件新团队后保存信息
  getteamadd(params) {
    return axios.post('/api/team/add', qs.stringify(params))
  },
  // 申请加入团队
  getaddnewteam(params) {
    return axios.post('/api/team_apply/add', qs.stringify(params))
  },
  // 查询成员
  getteammember(params) {
    return axios.get('/api/team_apply/detail', { params })
  },
  // 审核成员
  examine(params) {
    return axios.post('/api/team_apply/examine', qs.stringify(params))
  }
}
export default dismyteam
