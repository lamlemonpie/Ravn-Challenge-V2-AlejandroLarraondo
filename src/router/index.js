import { createRouter, createWebHistory } from 'vue-router'
import CharactersView from '../views/CharactersView.vue'

const routes = [
  {
    path: '/',
    name: 'CharactersView',
    component: CharactersView
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
