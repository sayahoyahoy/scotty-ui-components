import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './pages/home-view.vue'
import TestPage from './pages/test-cmps.vue'

const routes = [
  {path: '/', component: HomePage},
  {path: '/test', component: TestPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
