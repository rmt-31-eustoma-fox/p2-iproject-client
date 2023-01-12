import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/LoginPage.vue";
import DetailProductPage from "../views/DetailProductPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import CartPage from "../views/CartPage.vue";
import RecipePage from "../views/RecipePage.vue";
import OrderHistoryPage from "../views/OrderHistoryPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import BMIPage from "../views/BMIPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/products/:id",
      name: "DetailProductPage",
      component: DetailProductPage,
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage,
    },
    {
      path: "/cart",
      name: "CartPage",
      component: CartPage,
    },
    {
      path: "/order-history",
      name: "OrderHistoryPage",
      component: OrderHistoryPage,
    },
    {
      path: "/recipe",
      name: "RecipePage",
      component: RecipePage,
    },
    {
      path: "/bmi",
      name: "BMIPage",
      component: BMIPage,
    },
    {
      path: "/:pathMatch(.*)",
      name: "NotFoundPage",
      component: NotFoundPage,
    },
    {
      path: "/products/404-not-found",
      name: "NotFoundProduct",
      component: NotFoundPage,
    },
    {
      path: "/products/:pathMatch(.*)",
      name: "NotFoundProduct2",
      component: NotFoundPage,
    },
  ],
});

//navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.access_token;
  if (
    (to.name === "CartPage" ||
      to.name === "OrderHistoryPage" ||
      to.name === "RecipePage") &&
    !isAuthenticated
  ) {
    next({ name: "LoginPage" });
  } else if (
    (to.name === "RegisterPage" || to.name === "LoginPage") &&
    isAuthenticated
  ) {
    next({ name: "HomePage" });
  } else next();
});

export default router;
