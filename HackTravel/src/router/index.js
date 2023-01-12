import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Transaction from "../views/Transaction.vue"
import Accomodation from "../views/Accomodation.vue"
import AccomodationDetail from "../views/AccomodationDetail.vue"
import NotFound from "../views/NotFound.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/transactions",
      name: "transaction",
      component: Transaction,
    },
    {
      path: "/accomodations/:CityId",
      name: "accomodations",
      component: Accomodation
    },
    {
      path: "/accomodation-detail/:id",
      name: "accomodationDetail",
      component: AccomodationDetail
    },
    {
      path: "/:pathMatch(.*)",
      name: "notfound",
      component: NotFound,
    }
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "transaction" && !localStorage.access_token) {
    next({ name: "login" })
  } else if ((to.name === "register" || to.name === "login") && localStorage.access_token) {
    next({ name: "home" });
  } else {
    next()
  }
})

export default router;
