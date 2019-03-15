import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _2e244bf5 = () => interopDefault(import('..\\pages\\authentication.vue' /* webpackChunkName: "pages_authentication" */))
const _03c657f3 = () => interopDefault(import('..\\pages\\callme.vue' /* webpackChunkName: "pages_callme" */))
const _dfe9b7da = () => interopDefault(import('..\\pages\\discont.vue' /* webpackChunkName: "pages_discont" */))
const _e4c09ece = () => interopDefault(import('..\\pages\\discont\\active.vue' /* webpackChunkName: "pages_discont_active" */))
const _2c9767ee = () => interopDefault(import('..\\pages\\discont\\help\\index.vue' /* webpackChunkName: "pages_discont_help_index" */))
const _4842992b = () => interopDefault(import('..\\pages\\discont\\helpcando\\index.vue' /* webpackChunkName: "pages_discont_helpcando_index" */))
const _4dcae454 = () => interopDefault(import('..\\pages\\discont\\help\\_id.vue' /* webpackChunkName: "pages_discont_help__id" */))
const _476aea53 = () => interopDefault(import('..\\pages\\discont\\helpcando\\_id.vue' /* webpackChunkName: "pages_discont_helpcando__id" */))
const _fccbd304 = () => interopDefault(import('..\\pages\\help.vue' /* webpackChunkName: "pages_help" */))
const _bac4dbb0 = () => interopDefault(import('..\\pages\\help\\cloudwisdom.vue' /* webpackChunkName: "pages_help_cloudwisdom" */))
const _188c02eb = () => interopDefault(import('..\\pages\\help\\fuwu.vue' /* webpackChunkName: "pages_help_fuwu" */))
const _bc809c0a = () => interopDefault(import('..\\pages\\help\\show.vue' /* webpackChunkName: "pages_help_show" */))
const _98ce9c0a = () => interopDefault(import('..\\pages\\help\\wisdombank.vue' /* webpackChunkName: "pages_help_wisdombank" */))
const _007a4cfc = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _2ef06e89 = () => interopDefault(import('..\\pages\\messageComp.vue' /* webpackChunkName: "pages_messageComp" */))
const _5695da60 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _5d697976 = () => interopDefault(import('..\\pages\\releaseDemand.vue' /* webpackChunkName: "pages_releaseDemand" */))
const _40d5d03c = () => interopDefault(import('..\\pages\\reset.vue' /* webpackChunkName: "pages_reset" */))
const _06e139ce = () => interopDefault(import('..\\pages\\submitheads.vue' /* webpackChunkName: "pages_submitheads" */))
const _4a611c62 = () => interopDefault(import('..\\pages\\submitMessage.vue' /* webpackChunkName: "pages_submitMessage" */))
const _2f5fb448 = () => interopDefault(import('..\\pages\\submitnbhg.vue' /* webpackChunkName: "pages_submitnbhg" */))
const _49c76dce = () => interopDefault(import('..\\pages\\submitxq.vue' /* webpackChunkName: "pages_submitxq" */))
const _4a2a1255 = () => interopDefault(import('..\\pages\\submitxx.vue' /* webpackChunkName: "pages_submitxx" */))
const _2cab40e5 = () => interopDefault(import('..\\pages\\cloud\\cloudhead\\index.vue' /* webpackChunkName: "pages_cloud_cloudhead_index" */))
const _7483fd57 = () => interopDefault(import('..\\pages\\cloud\\cloudinfo\\index.vue' /* webpackChunkName: "pages_cloud_cloudinfo_index" */))
const _1f6e388d = () => interopDefault(import('..\\pages\\cloud\\cloudhead\\_id.vue' /* webpackChunkName: "pages_cloud_cloudhead__id" */))
const _8a612d02 = () => interopDefault(import('..\\pages\\cloud\\cloudinfo\\_id.vue' /* webpackChunkName: "pages_cloud_cloudinfo__id" */))
const _694a5cb4 = () => interopDefault(import('..\\pages\\myqzone\\_id.vue' /* webpackChunkName: "pages_myqzone__id" */))
const _6c3e1b2c = () => interopDefault(import('..\\pages\\myqzone\\_id\\active.vue' /* webpackChunkName: "pages_myqzone__id_active" */))
const _2238bdd6 = () => interopDefault(import('..\\pages\\myqzone\\_id\\case.vue' /* webpackChunkName: "pages_myqzone__id_case" */))
const _6503e004 = () => interopDefault(import('..\\pages\\myqzone\\_id\\helpcando.vue' /* webpackChunkName: "pages_myqzone__id_helpcando" */))
const _66afab3f = () => interopDefault(import('..\\pages\\myqzone\\_id\\helpme.vue' /* webpackChunkName: "pages_myqzone__id_helpme" */))
const _70f3e29c = () => interopDefault(import('..\\pages\\myqzone\\_id\\myhead.vue' /* webpackChunkName: "pages_myqzone__id_myhead" */))
const _14a28e80 = () => interopDefault(import('..\\pages\\myqzone\\_id\\myinfo.vue' /* webpackChunkName: "pages_myqzone__id_myinfo" */))
const _5803e7cc = () => interopDefault(import('..\\pages\\myqzone\\_id\\pingjia.vue' /* webpackChunkName: "pages_myqzone__id_pingjia" */))
const _8501b2fa = () => interopDefault(import('..\\pages\\myqzone\\_id\\team.vue' /* webpackChunkName: "pages_myqzone__id_team" */))
const _7cd6649f = () => interopDefault(import('..\\pages\\myqzone\\_id\\team\\index.vue' /* webpackChunkName: "pages_myqzone__id_team_index" */))
const _3c68519c = () => interopDefault(import('..\\pages\\myqzone\\_id\\team\\_td.vue' /* webpackChunkName: "pages_myqzone__id_team__td" */))
const _49a7fed1 = () => interopDefault(import('..\\pages\\myqzone\\_id\\zonghe.vue' /* webpackChunkName: "pages_myqzone__id_zonghe" */))
const _72ccab15 = () => interopDefault(import('..\\pages\\myself\\_id.vue' /* webpackChunkName: "pages_myself__id" */))
const _48271b35 = () => interopDefault(import('..\\pages\\myself\\_id\\helpcando.vue' /* webpackChunkName: "pages_myself__id_helpcando" */))
const _ced59df2 = () => interopDefault(import('..\\pages\\myself\\_id\\myactive.vue' /* webpackChunkName: "pages_myself__id_myactive" */))
const _28715a96 = () => interopDefault(import('..\\pages\\myself\\_id\\myactive\\canyu.vue' /* webpackChunkName: "pages_myself__id_myactive_canyu" */))
const _8eb7d0ae = () => interopDefault(import('..\\pages\\myself\\_id\\myactive\\zuzhi.vue' /* webpackChunkName: "pages_myself__id_myactive_zuzhi" */))
const _81d1e160 = () => interopDefault(import('..\\pages\\myself\\_id\\myjy.vue' /* webpackChunkName: "pages_myself__id_myjy" */))
const _00648576 = () => interopDefault(import('..\\pages\\myself\\_id\\myjy\\fwwendang.vue' /* webpackChunkName: "pages_myself__id_myjy_fwwendang" */))
const _d24b5bc6 = () => interopDefault(import('..\\pages\\myself\\_id\\myjy\\xqwendang.vue' /* webpackChunkName: "pages_myself__id_myjy_xqwendang" */))
const _6efe7b0a = () => interopDefault(import('..\\pages\\myself\\_id\\mypj.vue' /* webpackChunkName: "pages_myself__id_mypj" */))
const _d28eea44 = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish.vue' /* webpackChunkName: "pages_myself__id_mypublish" */))
const _2704ad0e = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\case.vue' /* webpackChunkName: "pages_myself__id_mypublish_case" */))
const _6dd9e02c = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\myhead.vue' /* webpackChunkName: "pages_myself__id_mypublish_myhead" */))
const _162f8fb8 = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\myinfo.vue' /* webpackChunkName: "pages_myself__id_mypublish_myinfo" */))
const _3a4d7ce8 = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\wendang.vue' /* webpackChunkName: "pages_myself__id_mypublish_wendang" */))
const _bcd7655c = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\xuqiu.vue' /* webpackChunkName: "pages_myself__id_mypublish_xuqiu" */))
const _8b4c80b8 = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\index.vue' /* webpackChunkName: "pages_myself__id_myteam_index" */))
const _30db55e2 = () => interopDefault(import('..\\pages\\myself\\_id\\safe.vue' /* webpackChunkName: "pages_myself__id_safe" */))
const _dcb3c72c = () => interopDefault(import('..\\pages\\myself\\_id\\zhsz.vue' /* webpackChunkName: "pages_myself__id_zhsz" */))
const _22290062 = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\mt\\_teamid.vue' /* webpackChunkName: "pages_myself__id_myteam_mt__teamid" */))
const _a0851530 = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\mt\\_teamid\\jianjie.vue' /* webpackChunkName: "pages_myself__id_myteam_mt__teamid_jianjie" */))
const _797aef7c = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\mt\\_teamid\\member.vue' /* webpackChunkName: "pages_myself__id_myteam_mt__teamid_member" */))
const _9a110f1e = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\mt\\_teamid\\shenqing.vue' /* webpackChunkName: "pages_myself__id_myteam_mt__teamid_shenqing" */))
const _081329e0 = () => interopDefault(import('..\\pages\\ruledetail\\_id.vue' /* webpackChunkName: "pages_ruledetail__id" */))
const _36d2a9e5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: '',
    scrollBehavior,

    routes: [{
      path: "/authentication",
      component: _2e244bf5,
      name: "authentication"
    }, {
      path: "/callme",
      component: _03c657f3,
      name: "callme"
    }, {
      path: "/discont",
      component: _dfe9b7da,
      name: "discont",
      children: [{
        path: "active",
        component: _e4c09ece,
        name: "discont-active"
      }, {
        path: "help",
        component: _2c9767ee,
        name: "discont-help"
      }, {
        path: "helpcando",
        component: _4842992b,
        name: "discont-helpcando"
      }, {
        path: "help/:id?",
        component: _4dcae454,
        name: "discont-help-id"
      }, {
        path: "helpcando/:id?",
        component: _476aea53,
        name: "discont-helpcando-id"
      }]
    }, {
      path: "/help",
      component: _fccbd304,
      name: "help",
      children: [{
        path: "cloudwisdom",
        component: _bac4dbb0,
        name: "help-cloudwisdom"
      }, {
        path: "fuwu",
        component: _188c02eb,
        name: "help-fuwu"
      }, {
        path: "show",
        component: _bc809c0a,
        name: "help-show"
      }, {
        path: "wisdombank",
        component: _98ce9c0a,
        name: "help-wisdombank"
      }]
    }, {
      path: "/login",
      component: _007a4cfc,
      name: "login"
    }, {
      path: "/messageComp",
      component: _2ef06e89,
      name: "messageComp"
    }, {
      path: "/register",
      component: _5695da60,
      name: "register"
    }, {
      path: "/releaseDemand",
      component: _5d697976,
      name: "releaseDemand"
    }, {
      path: "/reset",
      component: _40d5d03c,
      name: "reset"
    }, {
      path: "/submitheads",
      component: _06e139ce,
      name: "submitheads"
    }, {
      path: "/submitMessage",
      component: _4a611c62,
      name: "submitMessage"
    }, {
      path: "/submitnbhg",
      component: _2f5fb448,
      name: "submitnbhg"
    }, {
      path: "/submitxq",
      component: _49c76dce,
      name: "submitxq"
    }, {
      path: "/submitxx",
      component: _4a2a1255,
      name: "submitxx"
    }, {
      path: "/cloud/cloudhead",
      component: _2cab40e5,
      name: "cloud-cloudhead"
    }, {
      path: "/cloud/cloudinfo",
      component: _7483fd57,
      name: "cloud-cloudinfo"
    }, {
      path: "/cloud/cloudhead/:id",
      component: _1f6e388d,
      name: "cloud-cloudhead-id"
    }, {
      path: "/cloud/cloudinfo/:id",
      component: _8a612d02,
      name: "cloud-cloudinfo-id"
    }, {
      path: "/myqzone/:id?",
      component: _694a5cb4,
      name: "myqzone-id",
      children: [{
        path: "active",
        component: _6c3e1b2c,
        name: "myqzone-id-active"
      }, {
        path: "case",
        component: _2238bdd6,
        name: "myqzone-id-case"
      }, {
        path: "helpcando",
        component: _6503e004,
        name: "myqzone-id-helpcando"
      }, {
        path: "helpme",
        component: _66afab3f,
        name: "myqzone-id-helpme"
      }, {
        path: "myhead",
        component: _70f3e29c,
        name: "myqzone-id-myhead"
      }, {
        path: "myinfo",
        component: _14a28e80,
        name: "myqzone-id-myinfo"
      }, {
        path: "pingjia",
        component: _5803e7cc,
        name: "myqzone-id-pingjia"
      }, {
        path: "team",
        component: _8501b2fa,
        children: [{
          path: "",
          component: _7cd6649f,
          name: "myqzone-id-team"
        }, {
          path: ":td",
          component: _3c68519c,
          name: "myqzone-id-team-td"
        }]
      }, {
        path: "zonghe",
        component: _49a7fed1,
        name: "myqzone-id-zonghe"
      }]
    }, {
      path: "/myself/:id?",
      component: _72ccab15,
      name: "myself-id",
      children: [{
        path: "helpcando",
        component: _48271b35,
        name: "myself-id-helpcando"
      }, {
        path: "myactive",
        component: _ced59df2,
        name: "myself-id-myactive",
        children: [{
          path: "canyu",
          component: _28715a96,
          name: "myself-id-myactive-canyu"
        }, {
          path: "zuzhi",
          component: _8eb7d0ae,
          name: "myself-id-myactive-zuzhi"
        }]
      }, {
        path: "myjy",
        component: _81d1e160,
        name: "myself-id-myjy",
        children: [{
          path: "fwwendang",
          component: _00648576,
          name: "myself-id-myjy-fwwendang"
        }, {
          path: "xqwendang",
          component: _d24b5bc6,
          name: "myself-id-myjy-xqwendang"
        }]
      }, {
        path: "mypj",
        component: _6efe7b0a,
        name: "myself-id-mypj"
      }, {
        path: "mypublish",
        component: _d28eea44,
        name: "myself-id-mypublish",
        children: [{
          path: "case",
          component: _2704ad0e,
          name: "myself-id-mypublish-case"
        }, {
          path: "myhead",
          component: _6dd9e02c,
          name: "myself-id-mypublish-myhead"
        }, {
          path: "myinfo",
          component: _162f8fb8,
          name: "myself-id-mypublish-myinfo"
        }, {
          path: "wendang",
          component: _3a4d7ce8,
          name: "myself-id-mypublish-wendang"
        }, {
          path: "xuqiu",
          component: _bcd7655c,
          name: "myself-id-mypublish-xuqiu"
        }]
      }, {
        path: "myteam",
        component: _8b4c80b8,
        name: "myself-id-myteam"
      }, {
        path: "safe",
        component: _30db55e2,
        name: "myself-id-safe"
      }, {
        path: "zhsz",
        component: _dcb3c72c,
        name: "myself-id-zhsz"
      }, {
        path: "myteam/mt/:teamid?",
        component: _22290062,
        name: "myself-id-myteam-mt-teamid",
        children: [{
          path: "jianjie",
          component: _a0851530,
          name: "myself-id-myteam-mt-teamid-jianjie"
        }, {
          path: "member",
          component: _797aef7c,
          name: "myself-id-myteam-mt-teamid-member"
        }, {
          path: "shenqing",
          component: _9a110f1e,
          name: "myself-id-myteam-mt-teamid-shenqing"
        }]
      }]
    }, {
      path: "/ruledetail/:id?",
      component: _081329e0,
      name: "ruledetail-id"
    }, {
      path: "/",
      component: _36d2a9e5,
      name: "index"
    }],

    fallback: false
  })
}
