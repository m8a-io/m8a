import { LocalStorage } from 'quasar'
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index/Index.vue') },
      { path: '/login', component: () => import('pages/login/Login.vue') }
    ]
  },
  {
    path: '/callback',
    redirect: (to) => {
      console.log('token ', to.query.code)
      return { path: '/login', query: to.query }
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/error/Error404.vue')
  }
]

export default routes
