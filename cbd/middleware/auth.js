import Cookie from '@/assets/js/cookie'
// import { Message } from 'element-ui'
export default function({ route, redirect }) {
  const token = Cookie.get()
  const path = route.path
  if (!token) {
    redirect({ name: 'login', query: { authUrl: path } })
    // if (process.client) {
    //   Message.warning({
    //     messge: '请登录',
    //     duration: 2000,
    //     onClose: () => {
    //     }
    //   })
    // }
  } else {
  }
}
