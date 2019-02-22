// import routers from '@assets/js/router'
export default ({ route }) => {
  route.matched.map((item, index) => {
    item.meta = {
      title: route.meta[index].title
    }
    return item
  })
  return route
}
