import { createRouter, createWebHistory } from "vue-router";
import login from "../views/login.vue";
import home from "../views/home.vue";
import register from "../views/register.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/register",
      name: "register",
      component: register,
    },
    {
      path: "/todo/:id",
      name: "todo",
      component: home,
    },
    {
      path: "/form",
      name: "form",
      component: home,
    },
    {
      path: "/category",
      name: "category",
      component: home,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    (localStorage.access_token && to.name === "login") ||
    (localStorage.access_token && to.name === "register")
  ) {
    next({ name: "home" });
  } else if (!localStorage.access_token && to.name === "home") {
    next({ name: "login" });
  } else {
    next();
  }
});
export default router;
