<template>
  <section class="body">
    <Articles />
  </section>
</template>

<script>
import Articles from '../components/Blog/articles';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'blog',
  components: {
    Articles,
  },
};
</script>
