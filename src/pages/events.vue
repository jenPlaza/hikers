<template>
  <section class="body">
    <Banner />
    <Tabs style="display: block" />
    <Promotions />
  </section>
</template>

<script>
import Banner from '../components/Events/banner';
import Tabs from '../components/Events/tabs';
import Promotions from '../components/Events/promotions';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'events',
  components: {
    Banner,
    Tabs,
    Promotions,
  },
};
</script>
