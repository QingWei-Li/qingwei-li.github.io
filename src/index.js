import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('./views/home.vue')
  }
]
const createRouter = () => new Router({
  mode: 'history',
  routes
})

export default {
  createRouter
}
