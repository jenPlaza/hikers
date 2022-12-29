import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/index.vue';
import Events from '@/pages/events.vue';
import Blog from '@/pages/blog.vue';

Vue.use(Router);

export default new Router({
  routes: [
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
  ],
});
