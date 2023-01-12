import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Home from '../views/Home.vue';
import Profile from '../views/Profile.vue';
import User from '../views/User.vue';
import Watchlist from '../views/Watchlist.vue';
import Movie from '../views/Movie.vue';
import ContactUs from '../views/ContactUs.vue';
import Subscription from '../views/Subscription.vue';
import SuccessFailurePage from '../views/SuccessFailurePage.vue';


function alreadyLogin(to,from,next) {
  if(localStorage.access_token) return next(from.fullPath)
  return next();
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter:[alreadyLogin]
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactUs
    },
    {
      path: "/subsinfo/:paymentInfo",
      name: "subsinfo",
      component: SuccessFailurePage
    },
    {
      path: "/subscription",
      name: "subscription",
      component: Subscription
    },
    {
      path: "/movie/:movieId",
      name: "movie",
      component: Movie
    },
    {
      path: "/user",
      name: "user",
      component: User,
      children: [
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "watchlist",
          name: "watchlist",
          component: Watchlist
        }
      ]
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      beforeEnter:[alreadyLogin]
    },
  ],
});

export default router;
