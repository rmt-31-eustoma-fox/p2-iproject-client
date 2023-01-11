import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from "../views/LoginPage.vue"
import HomePage from '../views/HomePage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import DetailPage from '../views/DetailPage.vue'
import FavoritePage from '../views/FavoritePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailPage
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: FavoritePage
    },

  ]
})

export default router
