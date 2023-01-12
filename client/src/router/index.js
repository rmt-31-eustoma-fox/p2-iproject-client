import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Cart from '../views/Cart.vue'
import Coba from '../views/Coba.vue'
import Location from '../views/Location.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView
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
      path: '/carts',
      name: 'cart',
      component: Cart
    },
    {
      path: '/coba',
      name: 'coba',
      component: Coba
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
    {
      path: '/:catchAll(.*)',
      name: 'not_found',
      component: NotFound
    },

  ]
})
router.beforeEach((to, from, next) => {
  if ((!localStorage.access_token && to.name == 'cart') ||
    (!localStorage.access_token && to.name == 'home')) {
    next({
      name: 'login'
    })

  } else if (
    (localStorage.access_token && to.name == "login") ||
    (localStorage.access_token && to.name == "register")
  ) {
    next({
      name: 'home'
    })
  } else {
    next()
  }
})
export default router