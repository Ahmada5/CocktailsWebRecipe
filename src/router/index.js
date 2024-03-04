import { createRouter, createWebHistory } from 'vue-router';
import DrinksMain from "../views/DrinksMain.vue";
import HeroSection from "../components/HeroSection.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: DrinksMain } // Set the correct path for DrinksMain
    //{ path: '/', component: HeroSection } // Set a unique path for HeroSection
  ],
});

export default router;