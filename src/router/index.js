import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/component',
    name: 'Component',
    component: () => import( '../views/Component.vue'),
    children: [
      { path: "", redirect: '/component/install' },
      { path: "quickstart", component: () => import( '../views/modules/started.vue')},
      { path: "install", component: () => import( '../views/modules/install.vue') }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
