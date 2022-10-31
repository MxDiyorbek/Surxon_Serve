import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomeView.vue"
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/management',
    name: 'management',
    component: () => import(/* webpackChunkName: "about" */ '../views/ManagementView.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import(/* webpackChunkName: "goods" */ '../views/GoodsView.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import(/* webpackChunkName: "about" */ '../views/ServiceView.vue')
  },
  {
    path: '/branches',
    name: 'branches',
    component: () => import(/* webpackChunkName: "management" */ '../views/BranchesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
