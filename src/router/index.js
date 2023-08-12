import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import RecordUserView from '../views/RecordUsersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  },
  {
    path: '/recordUsers',
    component: RecordUserView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
