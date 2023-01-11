import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MyBook from '../views/MyBook.vue'
import Portal from '../views/Portal.vue'

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
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/mybook',
      name: 'mybook',
      component: MyBook
    },
    {
      path: '/portal',
      name: 'portal',
      component: Portal
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = localStorage.access_token
  if(auth && to.name == "login" || auth && to.name == "register") next("/")
  else if( !auth && to.name != "login") next("/login")
  else next()
})

export default router
