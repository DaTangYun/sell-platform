import qs from 'qs'
import axios from './http'
const meta = {
  commonSeo(params) {
    return axios.post('/api/config/seo', qs.stringify(params))
  }
}
export default meta
