import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameView from '../views/GameView.vue'
import PastView from '../views/PastView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/games',
      name: 'games',
      component: GameView
    },
    {
      path: '/projects',
      name: 'projects',
      component: PastView
    }
  ]
})

export default router
