import './assets/main.css'

import { createApp } from 'vue';
import { createWebHistory, createRouter } from "vue-router";
import Admin from './pages/Admin.vue';

const routes = [
   { path: '/', component: Admin },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp({})
    .use(router)
    .mount('#app');
