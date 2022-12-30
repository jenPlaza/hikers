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
<style>
body {
  margin: 0;
  background-image: url('./assets/images/pattern28.png') repeat;
}
#app {
  width: 100%;
  margin: 0;
  padding: 0;
  background-image: url('./assets/images/pattern28.png') repeat;
  font: 1em 'Program OT Book', Georgia, serif;
}
.body {
  font: 1em 'Program OT Book', Georgia, serif;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}
</style>
