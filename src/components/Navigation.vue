<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <router-link
      @click="window.open()"
      class="nav"
      v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`"
      >{{ routes.text }}</router-link
    >
    <!-- <router-link to="/" target=”_blank”>Home</router-link>
      <router-link to="/events" target=”_blank”>Events</router-link>
      <router-link to="/blog" target=”_blank”>Blog</router-link> -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/',
        },
        {
          id: 1,
          text: 'Events',
          page: '/events',
        },
        {
          id: 2,
          text: 'Blog',
          page: '/blog',
        },
      ],
    };
  },
};
</script>
