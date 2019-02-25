import axios from './http'
const infolist = {
  getinfolist(params) {
    return axios.get('/api/message/lists', { params })
  }
}
export default infolist
