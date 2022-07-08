
import { createWebHistory, createRouter } from "vue-router";
import Home from '@/pages/index.vue';
import Events from '@/pages/events.vue';
import Blog from '@/pages/blog.vue';

const routes= [
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
  }
];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
