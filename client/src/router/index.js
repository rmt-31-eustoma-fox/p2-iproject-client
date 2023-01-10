import { createRouter, createWebHistory } from 'vue-router'
import homePage from "../views/HomePage.vue"
import LandingPage from "../views/LandingPage.vue"
import LoginPage from "../views/LoginPage.vue"
import RegisterPage from "../views/RegisterPage.vue"
import SinglePlayer from "../views/SinglePlayer.vue"
import LobbyRoom from "../views/LobbyRoom.vue"
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
      path: '/mode',
      name: 'mode',
      component: homePage
    },
    {
      path: '/singleplayer',
      name: 'singleplayer',
      component: SinglePlayer
    },
    {
      path: '/multiplayer',
      name: 'multiplayer',
      component: LobbyRoom
    },
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token
  if (isAuthenticated && to.name === "login" || isAuthenticated && to.name === "register" || isAuthenticated && to.name === "landing") next("/mode")
  else if(!isAuthenticated && to.name === "mode" || !isAuthenticated && to.name === "singleplayer" || !isAuthenticated && to.name === "multiplayer") next("/login")
  else next()
})

export default router
