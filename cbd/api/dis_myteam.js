import axios from './http'
const dismyteam = {
  getdismyteam(params) {
    // console.log(axios)
    return axios.get('/api/team/lists', { params })
  },
  // 团队详情
  getteamdetail(params) {
    return axios.get('/api/team/detail', { params })
  }
}
export default dismyteam
