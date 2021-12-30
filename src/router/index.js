import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AvgleCategoryView from '../views/AvgleCategoryView.vue'
import AvgleSearchView from '../views/AvgleSearchView.vue'
import DateTimePicker from '../views/DateTimePickerView.vue'

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
    path: '/date-time-picker',
    name: '時間日期選擇器',
    component: DateTimePicker
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
