import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import TeamPage from "../views/TeamPage.vue";
import TeamDetailPage from "../views/TeamDetailPage.vue";
import StandingsPage from "../views/StandingsPage.vue";
import PlayersPage from "../views/PlayersPage.vue";
import PlayerDetailPage from "../views/PlayerDetailPage.vue";
import ComparePage from "../views/ComparePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/teams",
    name: "teams",
    component: TeamPage,
  },
  {
    path: "/teams/:id/:teamName",
    name: "teamDetail",
    component: TeamDetailPage,
  },
  {
    path: "/standings",
    name: "standings",
    component: StandingsPage,
  },
  {
    path: "/players",
    name: "players",
    component: PlayersPage,
  },
  {
    path: "/players/:id",
    name: "playerDetail",
    component: PlayerDetailPage,
  },
  {
    path: "/compare",
    name: "compare",
    component: ComparePage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
