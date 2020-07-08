import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Indonesia from '../views/Indonesia.vue'
import World from '../views/World.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/indonesia',
    name: 'Indonesia',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Indonesia
  },
  {
    path: '/dunia',
    name: 'World',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: World
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
