<template>
 <section
      class="body"
      >
     <RecentPosts />
         <Join />
          <SignUp />
           <UpcomingMembersAbout />
   </section>
</template>

<script>
import RecentPosts from '../components/Home/recent_posts';
import Join from '../components/Home/join';
import SignUp from '../components/Home/signup';
import UpcomingMembersAbout from '../components/Home/upcoming_member_about';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
  name: 'index',
  components: {
  RecentPosts,
  Join,
  SignUp,
  UpcomingMembersAbout,
  }
}
</script>