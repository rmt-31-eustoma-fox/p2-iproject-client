import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EditDeck from '../views/EditDeck.vue'
import Login from '../views/Login.vue'
import Deck from '../views/Deck.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/editdeck',
      name: 'edit-deck',
      component: EditDeck
    },
    {
      path: '/deck',
      name: 'deck',
      component: Deck
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})

export default router
