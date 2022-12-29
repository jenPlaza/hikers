<template>
  <div>
<<<<<<< HEAD
<router-link onClick="window.location.reload();" class="nav" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
=======
 <router-link @click="window.open();" class="nav" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
      <!-- <router-link to="/" target=”_blank”>Home</router-link>
      <router-link to="/events" target=”_blank”>Events</router-link>
      <router-link to="/blog" target=”_blank”>Blog</router-link> -->

>>>>>>> 4880d4685353d76121b3559c899b5cb5bc40fe35
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
=======
    // eslint-disable-next-line vue/multi-word-component-names
>>>>>>> 4880d4685353d76121b3559c899b5cb5bc40fe35
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'Events',
          page:'/events'
        },
        {
          id: 2,
          text: 'Blog',
          page:'/blog'
        },
      ]
    }
  }
}
</script>