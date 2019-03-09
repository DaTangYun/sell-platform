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
    return state.showme.showmelist
  },
  showerror: state => {
    return state.showme.error
  },
  cloudInfo: state => {
    return state.cloudinfo.cloudInfo
  },
  headcate: state => {
    return state.cloudhead.headcate
  },
  helpcloud: state => {
    return state.helpcloud.helpcloud
  },
  helpwis: state => {
    return state.helpwis.helpwis
  },
  caselist: state => {
    return state.helpwis.caselist
  },
  dishelpdo: state => {
    return state.dishelpdo.dishelpdo
  },
  activeyouhuilist: state => {
    return state.disactive.activelist
  },
  helpmelist: state => {
    return state.dishelpme.helpmelist
  },
  headlist: state => {
    return state.cloudhead.headlist
  },
  infolist: state => {
    return state.cloudinfo.infolist
  },
  infototal: state => {
    return state.cloudinfo.total
  },
  headtotal: state => {
    return state.cloudhead.headtotal
  },
  callme: state => {
    return state.common.callme
  },
  // 文档列表
  documentlist: state => {
    return state.helpwis.documentlist
  },
  // 21
  usergister: state => {
    return state.common.usergister
  },
  dismyteam: state => {
    return state.dismyteam.dismyteam
  },
  // 用户已参加列表
  useractiveprofile: state => {
    return state.disactive.useractiveprofile
  },
  // 秀秀我用户信息
  usershowmeinfo: state => {
    return state.common.usershowmeinfo
  },
  myteamdetail: state => {
    return state.dismyteam.myteamdetail
  },
  // 头条详情
  headdetail: state => {
    return state.cloudhead.headdetail
  },
  infodetail: state => {
    return state.cloudinfo.infodetail
  },
  imageslist: state => {
    return state.common.images
  },
  // 头条列表个人中心
  headprofile: state => {
    return state.cloudhead.headprofile
  },
  meta: state => {
    return state.common.meta
  },
  infoprofile: state => {
    return state.cloudinfo.infoprofile
  },
  documentprofile: state => {
    return state.helpwis.documentprofile
  },
  helpmeprofile: state => {
    return state.dishelpme.helpmeprofile
  },
  // 案例个人中心
  caseprofile: state => {
    return state.helpwis.caseprofile
  },
  abilityprofile: state => {
    return state.dishelpdo.abilityprofile
  },
  // 36
  // 评论列表
  abilitylists: state => {
    return state.dishelpdo.abilitylists
  },
  activeprofil: state => {
    return state.disactive.activeprofil
  },
  abilitydetail: state => {
    return state.dishelpdo.abilitydetail
  },
  helpdetail: state => {
    return state.dishelpme.helpdetail
  },
  // 添加评论
  addcomment: state => {
    return state.dishelpdo.addcomment
  },
  financedetail: state => {
    return state.helpwis.financedetail
  },
  logindata: state => {
    return state.common.logindata
  },
  sms: state => {
    return state.common.sms
  },
  loginout: state => {
    return state.common.loginout
  },
  // 查看自己评论
  usercommit: state => {
    return state.common.usercommit
  },
  teampro: state => {
    return state.dismyteam.teampro
  },
  teamedit: state => {
    return state.dismyteam.teamedit
  },
  // 48
  teamlist: state => {
    return state.dismyteam.teamlist
  },
  teamapply: state => {
    return state.dismyteam.teamapply
  },
  bcheadedit: state => {
    return state.cloudhead.bcheadedit
  },
  headedit: state => {
    return state.cloudhead.headedit
  },
  // 添加新头条
  newhead: state => {
    return state.cloudhead.newhead
  },
  sendinfo: state => {
    return state.cloudinfo.sendinfo
  },
  bcinfoedit: state => {
    return state.cloudinfo.bcinfoedit
  },
  addinfo: state => {
    return state.cloudinfo.addinfo
  },
  deleteinfo: state => {
    return state.cloudinfo.deleteinfo
  },
  deletedata: state => {
    return state.helpwis.deletedata
  },
  docuadd: state => {
    return state.helpwis.docuadd
  },
  doerror: state => {
    return state.helpwis.error
  },
  document: state => {
    return state.helpwis.document
  },
  helpedit: state => {
    return state.dishelpme.helpedit
  },
  helpedid: state => {
    return state.dishelpme.helpedid
  },
  // 帮帮我分类
  helpadd: state => {
    return state.dishelpme.helpadd
  },
  addhelp: state => {
    return state.dishelpme.addhelp
  },
  deletehelp: state => {
    return state.dishelpme.deletehelp
  },
  addnewcase: state => {
    return state.helpwis.addcase
  },
  caseinfo: state => {
    return state.helpwis.caseinfo
  },
  qdcase: state => {
    return state.helpwis.qdcase
  },
  abilityeditfl: state => {
    return state.dishelpdo.abilityeditfl
  },
  bjnbhg: state => {
    return state.dishelpdo.bjnbhg
  },
  newnbhgfl: state => {
    return state.dishelpdo.newnbhgfl
  },
  newability: state => {
    return state.dishelpdo.newability
  },
  deleteactive: state => {
    return state.disactive.deleteactive
  },
  deletehead: state => {
    return state.cloudhead.deletehead
  },
  deleteuseractive: state => {
    return state.cloudhead.deleteuseractive
  },
  changemobile: state => {
    return state.common.changemobile
  },
  changepass: state => {
    return state.common.changepass
  },
  userinfo: state => {
    return state.common.userinfo
  },
  changeinfo: state => {
    return state.common.changeinfo
  },
  exitdata: state => {
    return state.common.exitdata
  },
  editteam: state => {
    return state.dismyteam.editteam
  },
  bjteam: state => {
    return state.dismyteam.bjteam
  },
  addteam: state => {
    return state.dismyteam.addteam
  },
  useridenty: state => {
    return state.common.useridenty
  },
  abilitymessage: state => {
    return state.dishelpdo.abilitymessage
  },
  userdactive: state => {
    return state.disactive.userdactive
  },
  // 案例详情
  casedetail: state => {
    return state.helpwis.casedetail
  },
  // 编辑活动获取内容
  bjjqactivity: state => {
    return state.disactive.bjjqactivity
  },
  bcbj: state => {
    return state.disactive.bcbj
  },
  addactive: state => {
    return state.disactive.addactive
  },
  // 申请加入团队
  addnewteam: state => {
    return state.dismyteam.addnewteam
  },
  teammember: state => {
    return state.dismyteam.teammember
  },
  examine: state => {
    return state.dismyteam.examine
  },
  addcommentnwwd: state => {
    return state.dishelpdo.addcommentnwwd
  }
}
export default getters
