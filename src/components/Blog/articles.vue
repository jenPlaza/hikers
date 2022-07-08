<template>
  <div id="blog">
    <section>
      <header>
        <h2>Posts</h2>
      </header>
        <PostsSec1></PostsSec1>
        </section>
        <section>
        <RecentPosts id="recent"></RecentPosts>
        <PostsSec3> </PostsSec3>
        <PostsSec4> </PostsSec4>
      </section>
  </div>
</template>

<script>
import PostsSec1 from "./posts_sec1";
import RecentPosts from "../Home/recent_posts";
import PostsSec3 from "./posts_sec3";
import PostsSec4 from "./posts_sec4";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
  name: "articles",
  components: {
    PostsSec1,
    RecentPosts,
    PostsSec3,
    PostsSec4,
  },
};
</script>
<style>
#blog> section{
width: 100vw;
}
#blog h2 {

  padding: 2% 0px 5px 3%;
  color: #f0ae35;
}
/* BREAKPOINTS*
  / *====================================== */
@media screen and (min-width: 768px) {
  #blog>section>header {
    margin-top: 3%;
  }
}
@media screen and (min-width: 1200px) {
  #blog>section>header {
    margin-top: 3%;
  }
  #blog> section {
    width: 97vw;
    margin-bottom: 4%;
}
#blog header h2 {
    padding: 2% 0px 25px 3%;
}}
@media screen and (min-width: 1500px) {
#blog header h2 {
    padding: 2% 0px 67px 3%;
}
}
@media screen and (min-width: 2000px) {
#blog> section {
    margin-bottom: 2%;
}
#blog header h2 {
    padding: 2% 0px 15px 3%;
}
}
</style>
