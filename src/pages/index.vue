<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="body">
    <RecentPosts />
    <PostsSec1 style="display: none" />
    <Join />
    <SignUp />
    <Banner />
    <Tabs style="display: none" />
    <UpcomingMembersAbout />
  </section>
</template>

<script>
import Banner from '../components/Events/banner';
import Tabs from '../components/Events/tabs';
import RecentPosts from '../components/Home/recent_posts';
import PostsSec1 from '../components/Blog/posts_sec1';
import Join from '../components/Home/join';
import SignUp from '../components/Home/signup';
import UpcomingMembersAbout from '../components/Home/upcoming_member_about';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'index',
  components: {
    Tabs,
    Banner,
    RecentPosts,
    PostsSec1,
    Join,
    SignUp,
    UpcomingMembersAbout,
  },
};
</script>
