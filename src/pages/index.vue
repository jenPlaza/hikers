<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="body">
    <RecentPosts />
    <PostsSec1 style="display: none" />
    <Join />
    <SignUp />
    <UpcomingMembersAbout />
  </section>
</template>

<script>
import RecentPosts from '../components/Home/recent_posts';
import PostsSec1 from '../components/Blog/posts_sec1';
import Join from '../components/Home/join';
import SignUp from '../components/Home/signup';
import UpcomingMembersAbout from '../components/Home/upcoming_member_about';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'index',
  components: {
    RecentPosts,
    PostsSec1,
    Join,
    SignUp,
    UpcomingMembersAbout,
  },
};
</script>
