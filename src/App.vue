<template>
  <div :style="cssProps" id="app">
    <Header />
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/header_menu';
import Footer from './components/footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require('@/assets/images/pattern28.png')})`,
      },
    };
  },
};
</script>
