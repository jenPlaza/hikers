import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/index.vue';
import Events from '@/views/events.vue';
import Blog from '@/views/blog.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
];

const router = createRouter({
  history: createWebHistory('/hikers/'),
  routes,
});

export default router;
