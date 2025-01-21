import { createRouter, createWebHistory } from 'vue-router'
import LogInView from "@/views/LogInView.vue";
import dashboard from "@/views/DashboardView.vue";
import DashboardView from "@/views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LogInView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },

  ],
})

export default router
