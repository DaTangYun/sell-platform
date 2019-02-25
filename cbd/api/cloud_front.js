import axios from './http'
const cloudhead = {
  getcloudMessage(params) {
    return axios.get('/api/topline_cate/lists', { params })
  }
}
export default cloudhead
