import axios from './http'
const headlist = {
  getheadlist(params) {
    return axios.get('/api/topline/lists', { params })
  }
}
export default headlist
