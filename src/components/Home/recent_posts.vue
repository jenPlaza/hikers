<template>
  <main>
    <!-- Recent Posts -->
    <section id="posts">
      <header>
        <h2 id="id02">Recent Posts</h2>
      </header>
      <ul>
        <article>
          <img src="../../assets/images/hikers1003.jpg" alt="Alternate Text" />
          <header>
            <h3>Lorem Ipsum</h3>
          </header>
          <p><strong>May 4</strong></p>
          <footer>
            <dl>
              <dt></dt>
              <dd><strong>by Jen Plaza</strong></dd>
              <dt></dt>
              <dd><strong>Sep 12, 2012</strong></dd>
              <dt></dt>
              <dd><strong>lollipop </strong></dd>
            </dl>
            <button>View More</button>
          </footer>
        </article>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: 'recent_posts',
};

var myHome = new XMLHttpRequest();
myHome.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');

myHome.onload = function () {
  var jsonHome = JSON.parse(myHome.responseText);
  secEvents(jsonHome);
};
function secEvents(dataHome) {
  var htmlHome = '<header>';
  htmlHome += '<h2 id="id02">Recent Posts</h2>';
  htmlHome += '</header>';
  htmlHome += '<ul>';
  for (var i = 0; i < dataHome.posts.length; i++) {
    htmlHome +=
      '<li><article style="background-image: url(' +
      dataHome.posts[i].imageURL +
      ')">';
    htmlHome += '<section>';
    htmlHome += '<header><h3>' + dataHome.posts[i].title + '</h3></header>';
    htmlHome += '<p><strong>' + dataHome.posts[i].subtitle + '</strong></p>';
    htmlHome += '<div>';
    htmlHome += '<input type="button" value="View More" class="seeMore" / >';
    htmlHome += '</div>';
    htmlHome += '</section>';
    htmlHome += '<footer>';
    htmlHome += '<span>';
    htmlHome += '<p>by ' + dataHome.posts[i].author + '</p>';
    htmlHome += '<p>' + dataHome.posts[i].postDate + '</p>';
    htmlHome += '<p>' + dataHome.posts[i].moreLink + '</p>';
    htmlHome += '</span>';
    htmlHome += '</footer>';
    htmlHome += '</article></li>';
  }
  htmlHome += '</ul>';
  var articleBlog = document.getElementById('posts');
  articleBlog.innerHTML = htmlHome;
}
myHome.send();
</script>
<style>
#posts > ul {
  padding: 0;
  display: grid;
  width: 100vw;
  grid-template: repeat(auto-fill, minmax(186px, 1fr)) / repeat(
      auto-fit,
      minmax(300px, 1fr)
    );
  grid-gap: 0.5rem;
}
#posts article {
  background-size: cover;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: rgb(0, 0, 0, 0.15);
  height: 300px;
}
#posts > ul > li > article > section {
  text-align: center;
  margin-top: 6vh;
  height: 168px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
#posts article > img {
  width: 100%;
  height: 100%;
}

/*Home: view more buttons*/
.seeMore {
  background-color: rgba(169, 169, 169, 0.5);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: lemonchiffon;
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  width: 125px;
  height: 40px;
  margin-bottom: 1vh;
}

#posts footer > span {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
