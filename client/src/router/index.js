import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EditDeck from '../views/EditDeck.vue'
import Login from '../views/Login.vue'
import Deck from '../views/Deck.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'
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
      path: '/editdeck/:deckid',
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
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

router.beforeEach((to, from, next) => {
  if ((localStorage.access_token && to.name == "login") || (localStorage.access_token && to.name == "register")) {
    next({ name: "home" })
  }
  else if ((!localStorage.access_token && to.name == "login") || (!localStorage.access_token && to.name == "register")) {
    next()
  }
  else if (!localStorage.access_token && to.name != "login") {
    next({name: "login"})
  }
  else {
    next();
  }
});

export default router
