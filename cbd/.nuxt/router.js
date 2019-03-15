import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _568d559a = () => interopDefault(import('..\\pages\\authentication.vue' /* webpackChunkName: "pages_authentication" */))
const _7ddf7f31 = () => interopDefault(import('..\\pages\\callme.vue' /* webpackChunkName: "pages_callme" */))
const _5916e495 = () => interopDefault(import('..\\pages\\discont.vue' /* webpackChunkName: "pages_discont" */))
const _8ca861ca = () => interopDefault(import('..\\pages\\discont\\active.vue' /* webpackChunkName: "pages_discont_active" */))
const _9177eaa8 = () => interopDefault(import('..\\pages\\discont\\help\\index.vue' /* webpackChunkName: "pages_discont_help_index" */))
const _3e63fd2d = () => interopDefault(import('..\\pages\\discont\\helpcando\\index.vue' /* webpackChunkName: "pages_discont_helpcando_index" */))
const _a1266fd8 = () => interopDefault(import('..\\pages\\discont\\help\\_id.vue' /* webpackChunkName: "pages_discont_help__id" */))
const _118d3256 = () => interopDefault(import('..\\pages\\discont\\helpcando\\_id.vue' /* webpackChunkName: "pages_discont_helpcando__id" */))
const _aca01588 = () => interopDefault(import('..\\pages\\help.vue' /* webpackChunkName: "pages_help" */))
const _07c7cfac = () => interopDefault(import('..\\pages\\help\\cloudwisdom.vue' /* webpackChunkName: "pages_help_cloudwisdom" */))
const _07235b29 = () => interopDefault(import('..\\pages\\help\\fuwu.vue' /* webpackChunkName: "pages_help_fuwu" */))
const _df51eb8e = () => interopDefault(import('..\\pages\\help\\show.vue' /* webpackChunkName: "pages_help_show" */))
const _091063b9 = () => interopDefault(import('..\\pages\\help\\wisdombank.vue' /* webpackChunkName: "pages_help_wisdombank" */))
const _49bf7404 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _13441e0b = () => interopDefault(import('..\\pages\\messageComp.vue' /* webpackChunkName: "pages_messageComp" */))
const _a1fbabc4 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _211dcb72 = () => interopDefault(import('..\\pages\\releaseDemand.vue' /* webpackChunkName: "pages_releaseDemand" */))
const _8b89de38 = () => interopDefault(import('..\\pages\\reset.vue' /* webpackChunkName: "pages_reset" */))
const _29962d60 = () => interopDefault(import('..\\pages\\submitheads.vue' /* webpackChunkName: "pages_submitheads" */))
const _6886f364 = () => interopDefault(import('..\\pages\\submitMessage.vue' /* webpackChunkName: "pages_submitMessage" */))
const _1df70c86 = () => interopDefault(import('..\\pages\\submitnbhg.vue' /* webpackChunkName: "pages_submitnbhg" */))
const _bb9884e8 = () => interopDefault(import('..\\pages\\submitxq.vue' /* webpackChunkName: "pages_submitxq" */))
const _bad33bda = () => interopDefault(import('..\\pages\\submitxx.vue' /* webpackChunkName: "pages_submitxx" */))
const _470c8532 = () => interopDefault(import('..\\pages\\cloud\\cloudhead\\index.vue' /* webpackChunkName: "pages_cloud_cloudhead_index" */))
const _245279d9 = () => interopDefault(import('..\\pages\\cloud\\cloudinfo\\index.vue' /* webpackChunkName: "pages_cloud_cloudinfo_index" */))
const _2b5424e2 = () => interopDefault(import('..\\pages\\cloud\\cloudhead\\_id.vue' /* webpackChunkName: "pages_cloud_cloudhead__id" */))
const _f491c2fe = () => interopDefault(import('..\\pages\\cloud\\cloudinfo\\_id.vue' /* webpackChunkName: "pages_cloud_cloudinfo__id" */))
const _717d1264 = () => interopDefault(import('..\\pages\\myqzone\\_id.vue' /* webpackChunkName: "pages_myqzone__id" */))
const _122a842c = () => interopDefault(import('..\\pages\\myqzone\\_id\\active.vue' /* webpackChunkName: "pages_myqzone__id_active" */))
const _0eea0fd8 = () => interopDefault(import('..\\pages\\myqzone\\_id\\case.vue' /* webpackChunkName: "pages_myqzone__id_case" */))
const _14d25c86 = () => interopDefault(import('..\\pages\\myqzone\\_id\\helpcando.vue' /* webpackChunkName: "pages_myqzone__id_helpcando" */))
const _1d476406 = () => interopDefault(import('..\\pages\\myqzone\\_id\\helpme.vue' /* webpackChunkName: "pages_myqzone__id_helpme" */))
const _5232b170 = () => interopDefault(import('..\\pages\\myqzone\\_id\\myhead.vue' /* webpackChunkName: "pages_myqzone__id_myhead" */))
const _c1619d84 = () => interopDefault(import('..\\pages\\myqzone\\_id\\myinfo.vue' /* webpackChunkName: "pages_myqzone__id_myinfo" */))
const _c2347dc8 = () => interopDefault(import('..\\pages\\myqzone\\_id\\pingjia.vue' /* webpackChunkName: "pages_myqzone__id_pingjia" */))
const _d85d3e7e = () => interopDefault(import('..\\pages\\myqzone\\_id\\team.vue' /* webpackChunkName: "pages_myqzone__id_team" */))
const _72f7c8a1 = () => interopDefault(import('..\\pages\\myqzone\\_id\\team\\index.vue' /* webpackChunkName: "pages_myqzone__id_team_index" */))
const _279263c4 = () => interopDefault(import('..\\pages\\myqzone\\_id\\team\\_td.vue' /* webpackChunkName: "pages_myqzone__id_team__td" */))
const _5756bce2 = () => interopDefault(import('..\\pages\\myqzone\\_id\\zonghe.vue' /* webpackChunkName: "pages_myqzone__id_zonghe" */))
const _57205a97 = () => interopDefault(import('..\\pages\\myself\\_id.vue' /* webpackChunkName: "pages_myself__id" */))
const _4b93f31a = () => interopDefault(import('..\\pages\\myself\\_id\\helpcando.vue' /* webpackChunkName: "pages_myself__id_helpcando" */))
const _637ce609 = () => interopDefault(import('..\\pages\\myself\\_id\\myactive.vue' /* webpackChunkName: "pages_myself__id_myactive" */))
const _637c5773 = () => interopDefault(import('..\\pages\\myself\\_id\\myactive\\canyu.vue' /* webpackChunkName: "pages_myself__id_myactive_canyu" */))
const _30591c67 = () => interopDefault(import('..\\pages\\myself\\_id\\myactive\\zuzhi.vue' /* webpackChunkName: "pages_myself__id_myactive_zuzhi" */))
const _18959552 = () => interopDefault(import('..\\pages\\myself\\_id\\myjy.vue' /* webpackChunkName: "pages_myself__id_myjy" */))
const _7782c203 = () => interopDefault(import('..\\pages\\myself\\_id\\myjy\\fwwendang.vue' /* webpackChunkName: "pages_myself__id_myjy_fwwendang" */))
const _0e8f56db = () => interopDefault(import('..\\pages\\myself\\_id\\myjy\\xqwendang.vue' /* webpackChunkName: "pages_myself__id_myjy_xqwendang" */))
const _21ff487d = () => interopDefault(import('..\\pages\\myself\\_id\\mypj.vue' /* webpackChunkName: "pages_myself__id_mypj" */))
const _28c7761c = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish.vue' /* webpackChunkName: "pages_myself__id_mypublish" */))
const _c28c9c68 = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\case.vue' /* webpackChunkName: "pages_myself__id_mypublish_case" */))
const _2799dd28 = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\myhead.vue' /* webpackChunkName: "pages_myself__id_mypublish_myhead" */))
const _74b65cf6 = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\myinfo.vue' /* webpackChunkName: "pages_myself__id_mypublish_myinfo" */))
const _a6bf512c = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\wendang.vue' /* webpackChunkName: "pages_myself__id_mypublish_wendang" */))
const _207fe054 = () => interopDefault(import('..\\pages\\myself\\_id\\mypublish\\xuqiu.vue' /* webpackChunkName: "pages_myself__id_mypublish_xuqiu" */))
const _ef36483c = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\index.vue' /* webpackChunkName: "pages_myself__id_myteam_index" */))
const _eb4c4838 = () => interopDefault(import('..\\pages\\myself\\_id\\safe.vue' /* webpackChunkName: "pages_myself__id_safe" */))
const _29b6bb28 = () => interopDefault(import('..\\pages\\myself\\_id\\zhsz.vue' /* webpackChunkName: "pages_myself__id_zhsz" */))
const _0b9d13c0 = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\mt\\_teamid.vue' /* webpackChunkName: "pages_myself__id_myteam_mt__teamid" */))
const _3fea956a = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\mt\\_teamid\\jianjie.vue' /* webpackChunkName: "pages_myself__id_myteam_mt__teamid_jianjie" */))
const _1b08c73a = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\mt\\_teamid\\member.vue' /* webpackChunkName: "pages_myself__id_myteam_mt__teamid_member" */))
const _286e58af = () => interopDefault(import('..\\pages\\myself\\_id\\myteam\\mt\\_teamid\\shenqing.vue' /* webpackChunkName: "pages_myself__id_myteam_mt__teamid_shenqing" */))
const _341f4862 = () => interopDefault(import('..\\pages\\ruledetail\\_id.vue' /* webpackChunkName: "pages_ruledetail__id" */))
const _1178a2e7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      component: _568d559a,
      name: "authentication"
    }, {
      path: "/callme",
      component: _7ddf7f31,
      name: "callme"
    }, {
      path: "/discont",
      component: _5916e495,
      name: "discont",
      children: [{
        path: "active",
        component: _8ca861ca,
        name: "discont-active"
      }, {
        path: "help",
        component: _9177eaa8,
        name: "discont-help"
      }, {
        path: "helpcando",
        component: _3e63fd2d,
        name: "discont-helpcando"
      }, {
        path: "help/:id?",
        component: _a1266fd8,
        name: "discont-help-id"
      }, {
        path: "helpcando/:id?",
        component: _118d3256,
        name: "discont-helpcando-id"
      }]
    }, {
      path: "/help",
      component: _aca01588,
      name: "help",
      children: [{
        path: "cloudwisdom",
        component: _07c7cfac,
        name: "help-cloudwisdom"
      }, {
        path: "fuwu",
        component: _07235b29,
        name: "help-fuwu"
      }, {
        path: "show",
        component: _df51eb8e,
        name: "help-show"
      }, {
        path: "wisdombank",
        component: _091063b9,
        name: "help-wisdombank"
      }]
    }, {
      path: "/login",
      component: _49bf7404,
      name: "login"
    }, {
      path: "/messageComp",
      component: _13441e0b,
      name: "messageComp"
    }, {
      path: "/register",
      component: _a1fbabc4,
      name: "register"
    }, {
      path: "/releaseDemand",
      component: _211dcb72,
      name: "releaseDemand"
    }, {
      path: "/reset",
      component: _8b89de38,
      name: "reset"
    }, {
      path: "/submitheads",
      component: _29962d60,
      name: "submitheads"
    }, {
      path: "/submitMessage",
      component: _6886f364,
      name: "submitMessage"
    }, {
      path: "/submitnbhg",
      component: _1df70c86,
      name: "submitnbhg"
    }, {
      path: "/submitxq",
      component: _bb9884e8,
      name: "submitxq"
    }, {
      path: "/submitxx",
      component: _bad33bda,
      name: "submitxx"
    }, {
      path: "/cloud/cloudhead",
      component: _470c8532,
      name: "cloud-cloudhead"
    }, {
      path: "/cloud/cloudinfo",
      component: _245279d9,
      name: "cloud-cloudinfo"
    }, {
      path: "/cloud/cloudhead/:id",
      component: _2b5424e2,
      name: "cloud-cloudhead-id"
    }, {
      path: "/cloud/cloudinfo/:id",
      component: _f491c2fe,
      name: "cloud-cloudinfo-id"
    }, {
      path: "/myqzone/:id?",
      component: _717d1264,
      name: "myqzone-id",
      children: [{
        path: "active",
        component: _122a842c,
        name: "myqzone-id-active"
      }, {
        path: "case",
        component: _0eea0fd8,
        name: "myqzone-id-case"
      }, {
        path: "helpcando",
        component: _14d25c86,
        name: "myqzone-id-helpcando"
      }, {
        path: "helpme",
        component: _1d476406,
        name: "myqzone-id-helpme"
      }, {
        path: "myhead",
        component: _5232b170,
        name: "myqzone-id-myhead"
      }, {
        path: "myinfo",
        component: _c1619d84,
        name: "myqzone-id-myinfo"
      }, {
        path: "pingjia",
        component: _c2347dc8,
        name: "myqzone-id-pingjia"
      }, {
        path: "team",
        component: _d85d3e7e,
        children: [{
          path: "",
          component: _72f7c8a1,
          name: "myqzone-id-team"
        }, {
          path: ":td",
          component: _279263c4,
          name: "myqzone-id-team-td"
        }]
      }, {
        path: "zonghe",
        component: _5756bce2,
        name: "myqzone-id-zonghe"
      }]
    }, {
      path: "/myself/:id?",
      component: _57205a97,
      name: "myself-id",
      children: [{
        path: "helpcando",
        component: _4b93f31a,
        name: "myself-id-helpcando"
      }, {
        path: "myactive",
        component: _637ce609,
        name: "myself-id-myactive",
        children: [{
          path: "canyu",
          component: _637c5773,
          name: "myself-id-myactive-canyu"
        }, {
          path: "zuzhi",
          component: _30591c67,
          name: "myself-id-myactive-zuzhi"
        }]
      }, {
        path: "myjy",
        component: _18959552,
        name: "myself-id-myjy",
        children: [{
          path: "fwwendang",
          component: _7782c203,
          name: "myself-id-myjy-fwwendang"
        }, {
          path: "xqwendang",
          component: _0e8f56db,
          name: "myself-id-myjy-xqwendang"
        }]
      }, {
        path: "mypj",
        component: _21ff487d,
        name: "myself-id-mypj"
      }, {
        path: "mypublish",
        component: _28c7761c,
        name: "myself-id-mypublish",
        children: [{
          path: "case",
          component: _c28c9c68,
          name: "myself-id-mypublish-case"
        }, {
          path: "myhead",
          component: _2799dd28,
          name: "myself-id-mypublish-myhead"
        }, {
          path: "myinfo",
          component: _74b65cf6,
          name: "myself-id-mypublish-myinfo"
        }, {
          path: "wendang",
          component: _a6bf512c,
          name: "myself-id-mypublish-wendang"
        }, {
          path: "xuqiu",
          component: _207fe054,
          name: "myself-id-mypublish-xuqiu"
        }]
      }, {
        path: "myteam",
        component: _ef36483c,
        name: "myself-id-myteam"
      }, {
        path: "safe",
        component: _eb4c4838,
        name: "myself-id-safe"
      }, {
        path: "zhsz",
        component: _29b6bb28,
        name: "myself-id-zhsz"
      }, {
        path: "myteam/mt/:teamid?",
        component: _0b9d13c0,
        name: "myself-id-myteam-mt-teamid",
        children: [{
          path: "jianjie",
          component: _3fea956a,
          name: "myself-id-myteam-mt-teamid-jianjie"
        }, {
          path: "member",
          component: _1b08c73a,
          name: "myself-id-myteam-mt-teamid-member"
        }, {
          path: "shenqing",
          component: _286e58af,
          name: "myself-id-myteam-mt-teamid-shenqing"
        }]
      }]
    }, {
      path: "/ruledetail/:id?",
      component: _341f4862,
      name: "ruledetail-id"
    }, {
      path: "/",
      component: _1178a2e7,
      name: "index"
    }],

    fallback: false
  })
}
