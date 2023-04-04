import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/homePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
];
const router = createRouter({
  history: createWebHistory("/news-parser/"),
  routes,
});

export default router;
