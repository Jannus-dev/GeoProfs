import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth.ts';
import LogInView from "@/views/LogInView.vue";
import dashboard from "@/views/DashboardView.vue";
import DashboardView from "@/views/DashboardView.vue";
import CreateView from "@/views/admin/employee/CreateView.vue";

const routes = [
    {
        path: "/",
        name: "login",
        component: LogInView,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardView,
    },
    {
        path: "/admin/employee/create",
        name: "employeecreate",
        component: CreateView,
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Controleer authenticatie bij routewijziging
router.beforeEach(async (to, from, next) => {
  const { isAuth, checkAuth } = useAuthStore();

  await checkAuth(); // Controleer of de gebruiker ingelogd is

  // Als de gebruiker ingelogd is en naar de loginpagina wil, stuur door naar dashboard
  if (to.name === 'login' && isAuth.value) {
    next({ name: 'Dashboard' });
  }
  // Als de route authenticatie vereist en de gebruiker niet is ingelogd, stuur naar loginpagina
  else if (to.meta.requiresAuth && !isAuth.value) {
    next({ name: 'login' });
  }
  // Sta navigatie toe voor alle andere gevallen
  else {
    next();
  }
});

export default router;
