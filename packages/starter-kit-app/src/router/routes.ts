import { LocalStorage } from 'quasar'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/login', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/callback',
    redirect: (to) => {
      console.log('we are logged in via keycloak')
      LocalStorage.set('login-token', to.query.code)
      return { path: '/login', query: to.query }
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
