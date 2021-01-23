import Vue from 'vue'
import VueRouter from 'vue-router'
import CharactersView from '../views/CharactersView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CharactersView',
    component: CharactersView
  }
]

const router = new VueRouter({
  routes
})

export default router
