import { route } from 'quasar/wrappers'
import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from './routes'
import { LocalStorage } from 'quasar'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store , ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach(async (to, from) => {
    console.log('userId', LocalStorage.getItem('userId'))

    if (!LocalStorage.getItem('mustLogin')) return

    if (!LocalStorage.getItem('userId') && !['/callback'].includes(to.path)) {
      console.log('redirecting to keycloak')
      window.location.replace(
        'https://auth.m8a.io/realms/m8a-team/protocol/openid-connect/auth?scope=openid&redirect_uri=https://zeus-dev.m8a.io/callback&client_id=zeus-dev&response_type=code'
      )
    }
  })

  return Router
})
