import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GraphView from '../views/GraphView.vue'
import DummyView from '../views/DummyView.vue'
import NewsView from '../views/NewsView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name : 'home',
      component: HomeView,
      children:[
        {
          path: '',
          name : 'dummy',
          component: DummyView
        },
        {
          path: 'news',
          name : 'news',
          component: NewsView
        },
        {
          path: 'graph',
          name : 'graph',
          component: GraphView
        },
        {
          path: 'empty',
          name: 'empty',
          component: NotFoundView
        }
      ]
    },
    // {
    //   path: '/graph',
    //   name: 'plot',
    //   component: GraphView
    // }
  ]
})

export default router
