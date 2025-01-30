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

  if (to.meta.requiresAuth && !isAuth.value) {
    next({ name: 'login' }); // Als niet ingelogd, stuur naar loginpagina
  } else {
    next(); // Anders sta navigatie toe
  }
});

export default router;
