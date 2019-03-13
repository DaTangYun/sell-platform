<<<<<<< HEAD
import qs from 'qs'
import axios from './http'
const meta = {
  commonSeo(params) {
    return axios.post('/api/config/seo', qs.stringify(params))
  }
}
export default meta
=======
import qs from 'qs'
import axios from './http'
const meta = {
  commonSeo(params) {
    return axios.post('/api/config/seo', qs.stringify(params))
  }
}
export default meta
>>>>>>> 4dc6617417fa5c53f8192cdeb8ca848804f85fb2
