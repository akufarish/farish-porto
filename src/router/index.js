import { createRouter, createWebHistory } from "vue-router";

const Hero = () => import("@/views/Hero.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Hero,
    },
  ],
});

export default router;
