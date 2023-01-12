import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import BrowsePage from "../views/BrowsePage.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import AddReviewPage from "../views/AddReviewPage.vue";
import ReviewPage from "../views/ReviewPage.vue";
import ShowDetailPage from "../views/ShowDetailPage.vue";
import ListPage from "../views/ListPage.vue";
import DonatePage from "../views/DonatePage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/list",
      name: "list",
      component: ListPage,
    },
    {
      path: "/browse",
      name: "browse",
      component: BrowsePage,
    },
    {
      path: "/shows/:id/add-review",
      name: "add-review",
      component: AddReviewPage,
    },
    {
      path: "/shows/:id",
      name: "show-detail",
      component: ShowDetailPage,
    },
    {
      path: "/shows/:id/review",
      name: "show-review",
      component: ReviewPage,
    },
    {
      path: "/donate",
      name: "donate",
      component: DonatePage
    }
  ],
});

export default router;
