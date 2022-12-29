<template>
 <section
      class="body"
      >
     <Articles />
   </section>
</template>

<script>
import Articles from '../components/Blog/articles';
export default {
  name: 'blog',
  components: {
  Articles,
  }
}
</script>