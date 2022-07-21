<template>
  <div id="app">
      <Header /> 
   <router-view />
        <Footer />
  </div>
</template>

<script>

import { createApp } from 'vue'
import App from './App.vue'

import { createWebHistory, createRouter } from "vue-router";
import Home from '@/views/index.vue';
import Events from '@/views/events.vue';
import Blog from '@/views/blog.vue';

import Header from './components/header_menu';
import Footer from './components/footer';
//import router from './router';


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
    history: createWebHistory('hikers'),
    routes,
  });

const hikersApp = createApp(App)
hikersApp.use(router)
  hikersApp.mount('#app')

export default {
  name: 'App',
  components: { 
    Header,
 Footer,
 }, 
 router, 
}
</script>

<style>
body{
    margin:0;
}
#app {
  width:100%;
      height:100%;
      margin:0;
      padding:0;
    background-image: url('./assets/images/pattern28.png');
    font: 1em 'Program OT Book', Georgia, serif;
}
   .body {
      font: 1em 'Program OT Book', Georgia, serif;
         overflow: hidden;
        height:100%;
        display: flex;
      flex-direction: column;
      align-items: center;
        padding:0;
    }
</style>
