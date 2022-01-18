import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AvgleCategoryView from '../views/AvgleCategoryView.vue'
import AvgleSearchView from '../views/AvgleSearchView.vue'
import ForeClosureListView from '../views/ForeClosureListView.vue'
import HotVideoListView from '../views/HotVideoListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/avgle-category',
    name: 'Avgle 影片列表',
    component: AvgleCategoryView
  },
  {
    path: '/avgle-search',
    name: 'Avgle 影片搜尋',
    component: AvgleSearchView
  },
  {
    path: '/foreclosure-search',
    name: '法拍搜尋',
    component: ForeClosureListView 
  },
  {
    path: '/hotvideo-search',
    name: '熱門影片',
    component: HotVideoListView 
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
