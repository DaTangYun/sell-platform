import cookie from '@/assets/js/cookie'
export default function({ route, redirect, req }) {
  const path = route.path
  if (process.client) {
    const token = cookie.get()
    if (!token) {
      redirect({ name: 'login', query: { authUrl: path } })
    }
  } else {
    const header = req.headers
    if (!header.cookie) {
      redirect({ name: 'login', query: { authUrl: path } })
    }
  }
}
