import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/auth.ts';

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/DashboardView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/LogInView.vue'),
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
