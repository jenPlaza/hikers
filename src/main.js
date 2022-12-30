import { createApp } from 'vue';
import App from './App';
import Home from '@/pages/index.vue';
import Events from '@/pages/events.vue';
import Blog from '@/pages/blog.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/events',
    name: 'events',
    component: Events,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
createApp(App).use(router).mount('#app');
