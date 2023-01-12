import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from "../views/LandingPage.vue"
import LoginPage from "../views/LoginPage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import GetFriends from "../views/GetFriends.vue"
import Lobby from "../views/LobbyRoom.vue"
import Subscription from "../views/subscription.vue"
import AnimalsDog from "../views/AnimalsDog.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: Lobby
    },
    {
      path: '/get-friends',
      name: 'get-friends',
      component: GetFriends
    },
    {
      path: '/subscription',
      name: 'subscription',
      component: Subscription
    },
    {
      path: '/animals-dog',
      name: 'animals-dog',
      component: AnimalsDog
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (isAuthenticated && to.name === "login" || isAuthenticated && to.name === "register" || isAuthenticated && to.name === "landing") next("/lobby")
  else if(!isAuthenticated && to.name === "lobby" || 
  !isAuthenticated && to.name === "get-friends" ||
  !isAuthenticated && to.name === "subscription" ||
  !isAuthenticated && to.name === "animals-dog"
  ) next("/")
  else next()
})

export default router
