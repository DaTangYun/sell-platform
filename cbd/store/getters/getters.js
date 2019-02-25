const getters = {
  city: state => {
    return state.app.city
  },
  // 首页轮播图
  slider: state => {
    return state.common.slider
  },
  // 友情链接
  lianjie: state => {
    return state.common.lianjie
  },
  error: state => {
    return state.common.error
  },
  // 首页版权
  banquan: state => {
    return state.common.banquan
  },
  // 首页秀秀我
  showme: state => {
    return state.showme.showmeList
  },
  showerror: state => {
    return state.showme.error
  },
  cloudInfo: state => {
    return state.cloudinfo.cloudInfo
  },
  cloudhead: state => {
    return state.cloudhead.cloudHead
  },
  helpcloud: state => {
    return state.helpcloud.helpcloud
  }
}
export default getters
