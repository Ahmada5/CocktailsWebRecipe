import { createRouter, createWebHistory } from 'vue-router';
import Hero from "../components/HeroSection.vue";
import DrinksDetail from "../views/DrinksDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Hero },
    { path: '/DrinksDetail/:id', component: DrinksDetail }
  ],
});

export default router;