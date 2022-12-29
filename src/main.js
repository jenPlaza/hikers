import Vue from 'vue';
import App from './App';
// Import your component
import Navigation from './components/Navigation';
import RecentPosts from './components/Home/recent_posts';
// import PostsSec1 from './components/Blog/posts_sec1';
// import PostsSec3 from './components/Blog/posts_sec3';
// import PostsSec4 from './components/Blog/posts_sec4';

Vue.config.productionTip = false;

// Globally register your component
//into Header
// eslint-disable-next-line vue/multi-word-component-names
Vue.component('Navigation', Navigation);
//into Articles
Vue.component('RecentPosts', RecentPosts);
//into blog
// Vue.component('PostsSec1', PostsSec1);
// Vue.component('PostsSec3', PostsSec3);
// Vue.component('PostsSec4', PostsSec4);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
