import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import( '@/views/Detail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
