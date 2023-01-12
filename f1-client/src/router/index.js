import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Driver from '../views/Driver.vue'
import Constructor from '../views/Constructors.vue'
import EventDetails from '../views/EventDetails.vue'
import BookTicket from '../views/BookTicket.vue'
import Map from '../views/MapView.vue'
import DriverDetails from '../views/DriverDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: Driver
    },
    {
      path: '/constructors',
      name: 'constructors',
      component: Constructor
    },
    {
      path: '/event/:id',
      name: 'event',
      component: EventDetails
    },
    {
      path: '/ticket',
      name: 'ticket',
      component: BookTicket
    },
    {
      path: '/map',
      name: 'map',
      component: Map
    },
    {
      path: '/drivers/:id',
      name: 'driver details',
      component: DriverDetails
    }
  ]
})

export default router
