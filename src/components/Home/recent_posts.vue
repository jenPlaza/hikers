<template>
  <main>
    <!-- Recent Posts -->
    <section id="posts">
      <header>
        <h2 id="id02">Recent Posts</h2>
      </header>
      <ul><article>
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
      </article></ul>
    </section>
  </main>
</template>

<script>
export default {
  name: "recent_posts",
};

var myHome = new XMLHttpRequest();
myHome.open("GET", "https://joshbloom.github.io/dws1/data/hikersguide.json");

myHome.onload = function() {
  var jsonHome = JSON.parse(myHome.responseText);
  secEvents(jsonHome);
};
function secEvents(dataHome) {
  var htmlHome = "<header>";
  htmlHome += '<h2 id="id02">Recent Posts</h2>';
  htmlHome += "</header>";
  htmlHome += "<ul>";
  for (var i = 0; i < dataHome.posts.length; i++) {
    htmlHome += '<li><article style="background-image: url('+dataHome.posts[i].imageURL+')">';
     htmlHome += "<section>";
    htmlHome += "<header><h3>" + dataHome.posts[i].title + "</h3></header>";
    htmlHome += "<p><strong>" + dataHome.posts[i].subtitle + "</strong></p>";
    htmlHome += "<div>";
    htmlHome += '<input type="button" value="View More" class="seeMore" / >';
    htmlHome += "</div>";
    htmlHome += "</section>";
    htmlHome += "<footer>";
    htmlHome += "<span>";
    htmlHome += "<p>by " + dataHome.posts[i].author + "</p>";
    htmlHome += "<p>" + dataHome.posts[i].postDate + "</p>";
    htmlHome += "<p>" + dataHome.posts[i].moreLink + "</p>";
    htmlHome += "</span>";
    htmlHome += "</footer>";
    htmlHome += "</article></li>";
  }
  htmlHome += "</ul>";
  var articleBlog = document.getElementById("posts");  articleBlog.innerHTML = htmlHome;
}

var myEvents = new XMLHttpRequest();
myEvents.open("GET", "https://joshbloom.github.io/dws1/data/hikersguide.json");

myEvents.onload = function() {
  var jsonEvents = JSON.parse(myEvents.responseText);
  secToday(jsonEvents);
  secWeekend(jsonEvents);
  secThisMonth(jsonEvents);
};

function secToday(dataEvents2) {
  var htmlEvents2 = "<ul>";
   var imageArray = [
    require("@/assets/images/sunnytrees.png"),
    require("@/assets/images/File_017.png"),
    require("@/assets/images/File_016.png"),
    require("@/assets/images/crystalRiver.png"),
    require("@/assets/images/photo-1507041957456-9c397ce39c97.jpg"),
    require("@/assets/images/File_013.png"),
  ];

  for (var i = 0; i < dataEvents2.events.length; i++) {
    htmlEvents2 += "<li><article>";
    htmlEvents2 += '<img src="' + imageArray[i] + '"';
    htmlEvents2 += 'alt="' + dataEvents2.events[i].subtitle + '"/>';
    htmlEvents2 += "<section><div>";
    htmlEvents2 += "<h3>" + dataEvents2.events[i].title + "</h3>";
    htmlEvents2 += "<div><p>" + dataEvents2.events[i].date + "</p>";
    htmlEvents2 += "<p><strong>" + dataEvents2.events[i].location + ", ";
    htmlEvents2 += dataEvents2.events[i].state + "</strong></p></div>";
    htmlEvents2 += "</div></section>";
    htmlEvents2 += "</article></li>";
  }

 htmlEvents2 += "<li><article>";
  htmlEvents2 += '<img src="' + imageArray[5] + '"';
  htmlEvents2 += 'alt="' + dataEvents2.events[3].subtitle + '"/>';
  htmlEvents2 += "<section><div>";
  htmlEvents2 += "<h3>" + dataEvents2.events[3].title + "</h3>";
  htmlEvents2 += "<div><p>" + dataEvents2.events[3].date + "</p>";
  htmlEvents2 += "<p><strong>" + dataEvents2.events[3].location + ", ";
  htmlEvents2 += dataEvents2.events[3].state + "</strong></p></div>";
  htmlEvents2 += "</div></section>";
  htmlEvents2 += "</article></li>";

  htmlEvents2 += "</ul>";

  var articleEvents = document.getElementById("Today");
  articleEvents.innerHTML = htmlEvents2;
}

function secWeekend(dataEvents3) {
  var htmlEvents3 = "<ul>";

  var imageArray = [
    require("@/assets/images/sunnytrees.png"),
    require("@/assets/images/File_017.png"),
    require("@/assets/images/File_014.png"),
    require("@/assets/images/File_005.png"),
    require("@/assets/images/File_015.png"),
    require("@/assets/images/File_013.png"),
  ];

  for (var i = 2; i < dataEvents3.events.length; i++) {
   htmlEvents3 += "<li><article>";
    htmlEvents3 += '<img src="' + imageArray[i] + '"';
    htmlEvents3 += 'alt="' + dataEvents3.events[i].subtitle + '"/>';
    htmlEvents3 += "<section><div>";
    htmlEvents3 += "<h3>" + dataEvents3.events[i].title + "</h3>";
    htmlEvents3 += "<p>" + dataEvents3.events[i].date + "</p>";
    htmlEvents3 += "<p><strong>" + dataEvents3.events[i].location + ", ";
    htmlEvents3 += dataEvents3.events[i].state + "</strong></p>";
    htmlEvents3 += "</div></section>";
    htmlEvents3 += "</article></li>";
  }

  htmlEvents3 += "</ul>";
  var articleEvents = document.getElementById("Weekend");
  articleEvents.innerHTML = htmlEvents3;
}
function secThisMonth(dataEvents4) {
  var htmlEvents4 = "<ul>";

  var imageArray = [
    require("@/assets/images/sunnytrees.png"),
    require("@/assets/images/File_017.png"),
    require("@/assets/images/File_016.png"),
    require("@/assets/images/File_012.png"),
    require("@/assets/images/File_018.png"),
    require("@/assets/images/File_019.png"),
  ];

  for (var i = 3; i < dataEvents4.events.length; i++) {
    htmlEvents4 += "<li><article>";
    htmlEvents4 += '<img src="' + imageArray[i] + '"';
    htmlEvents4 += 'alt="' + dataEvents4.events[i].subtitle + '"/>';
    htmlEvents4 += "<section><div>";
    htmlEvents4 += "<h3>" + dataEvents4.events[i].title + "</h3>";
    htmlEvents4 += "<p>" + dataEvents4.events[i].date + "</p>";
    htmlEvents4 += "<p><strong>" + dataEvents4.events[i].location + ", ";
    htmlEvents4 += dataEvents4.events[i].state + "</strong></p>";
    htmlEvents4 += "</div></section>";
    htmlEvents4 += "</article></li>";
  }

  htmlEvents4 += "</ul>";
  var articleEvents = document.getElementById("ThisMonth");
  articleEvents.innerHTML = htmlEvents4;
}
// myEvents.send();
myHome.send();
</script>
<style>
#posts > ul {
    padding: 0;
    width:100vw;
}
#posts article {
  background-size:     cover; 
  display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 300px;
    background-color: rgb(0, 0, 0, 0.15);
}
#posts > ul > li > article > section{
    text-align: center;
    margin-top: 6vh;
    height:168px;
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
  margin-bottom:1vh;
}

#posts footer > span {
     display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: rgba(0, 0, 0, 0.5);
}

/* BREAKPOINTS*
  / *====================================== */
@media (min-width: 768px) {
  #posts article{
   height:450px;
}
.seeMore {
  margin-bottom:0;
}
}
@media screen and (min-width: 992px) {
#posts > ul  {
    width: 100%;
    columns: 2;
  }
}
@media screen and (min-width: 1200px) {
#posts {
   width: 98vw;
   margin: 0 1%;
  }
  #posts > ul {
    margin-top: 7%;
      columns: 3;
}
}
@media screen and (min-width: 1500px) {
#posts>ul {
        grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    grid-gap: 0.5rem;
  }
  #posts article {
    height:400px
}
}
</style>
