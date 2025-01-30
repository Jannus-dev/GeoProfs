import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { useAuthStore } from '@/stores/auth.ts';

const app = createApp(App);

const { checkAuth } = useAuthStore();
await checkAuth(); // Controleer token bij app-opstart

app.use(router);
app.mount('#app');
