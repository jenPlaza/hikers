<template>
  <div :style="cssProps" id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/header_menu';
import Footer from './components/footer';
import router from './router';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  router,
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/images/pattern28.png')})`,
      },
    };
  },
};
</script>
