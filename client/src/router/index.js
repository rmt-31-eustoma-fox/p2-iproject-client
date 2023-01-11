import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Favorite from "../views/Favorite.vue";
import Detail from "../views/Detail.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/favorite",
      name: "favorite",
      component: Favorite,
    },
    {
      path: "/detail/:uuid",
      name: "detail",
      component: Detail,
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
  ],
});

// GOOD
router.beforeEach((to, from, next) => {
  if (!localStorage.access_token && to.name == "favorite") {
    next({ name: "home" });
  } else if (
    (localStorage.access_token && to.name == "login") ||
    (localStorage.access_token && to.name == "register")
  ) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
