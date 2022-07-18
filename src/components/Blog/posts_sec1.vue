<template>
  <div id="articlesPart1">
    <article>
      <img src="../../assets/images/hikers1003.jpg" alt="hikers" />

      <header>
        <h3>Dolor Sit Amet</h3>
      </header>
      <body>
        <p><strong>May 4</strong></p>
      </body>
      <footer>
        <dl>
          <dt></dt>
          <dd><strong>by Jen Plaza</strong></dd>
          <dt></dt>
          <dd><strong>Sep 12, 2012</strong></dd>
          <dt></dt>
          <dd><strong>lollipop </strong></dd>
        </dl>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
  name: "articles",
};

var myBlog = new XMLHttpRequest();
myBlog.open("GET", "https://joshbloom.github.io/dws1/data/hikersguide.json");

myBlog.onload = function() {
  var jsonBlog = JSON.parse(myBlog.responseText);
  secarticlesPart1(jsonBlog);
};
function secarticlesPart1(data1) {
  var htmlBlog = "<ul>";

  var imageArray = [
    require("@/assets/images/File_005.png"),
    require("@/assets/images/File_010.png"),
    require("@/assets/images/File_015.png"),
    require("@/assets/images/File_012.png"),
    require("@/assets/images/File_013.png"),
    require("@/assets/images/File_014.png"),
    require("@/assets/images/File_018.png"),
  ];

  for (var i = 0; i < data1.locations.length; i++) {
    htmlBlog += "<li><article>";
    htmlBlog += '<div><img src="' + imageArray[i] + '"';
    htmlBlog += 'alt="' + data1.locations[i].title + '"/>';
    htmlBlog +=
      "<header><h4>" + data1.locations[i].title + "</h4></header></div>";
    htmlBlog += "<div><strong>" + data1.locations[i].text + "</strong></div>";
    htmlBlog += "<footer>";
    htmlBlog += "<p>by " + data1.posts[i].author + "</p>";
    htmlBlog += "<p>" + data1.posts[i].postDate + "</p>";
    htmlBlog += "<p>" + data1.posts[i].moreLink + "</p></footer>";
    htmlBlog += "<span";
    htmlBlog +=
      '<input type="button" value="View More" class="seeMore" onclick="location.href=#" />';
    htmlBlog += "</span>";
    htmlBlog += "</article></li>";
  }
  htmlBlog += "</ul>";

  var articleBlog = document.getElementById("articlesPart1");
  articleBlog.innerHTML = htmlBlog;
}

myBlog.send();
</script>
<style>

#blog header h2 {
  padding: 2% 0px 5px 3%;
  color: #f0ae35;
  position: relative;
}
#articlesPart1 {
  width: 100vw;
  height: auto;
  position: relative;
  overflow: hidden;
  margin-top: -3%;
      margin-bottom: -10%;
}
#articlesPart1 > ul {
  display: grid;
  list-style-type: none;
  padding: 0;
  position: relative;
}
#articlesPart1 article {
  margin-bottom: 5%;
  background: url("../../assets/images/abstract-luxury-leather-black-texture-260nw-570397270.jpg");
  width: auto;
  height: 218px;
  position: relative;
}
#articlesPart1 article > div {
  width: 93vw;
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 5px;
  padding: 10px 10px;
  font-size: 12px;
   color: #8a7300;
}
#articlesPart1 article > div strong{
white-space:nowrap;
overflow:hidden;
text-overflow: ellipsis;
width:89vw;
}
#articlesPart1 img {
  height: 12vh;
  width: 26vw;
  position: relative;
  grid-column: 1 / span 1;
}
#articlesPart1 article header {
  grid-column: 2 / span 2;
  text-align: center;
  display: flex;
    align-items: center;
}
#articlesPart1 article header h4 {
  margin: 0;
}
#articlesPart1 article p {
  padding: 0 10px;
  color: #8a7300;
}
#articlesPart1 footer {
  position: absolute;
  bottom: 0;
  height: 24px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 99vw;
  padding: 0;
  align-items: center;
}

/* BREAKPOINTS*
  / *====================================== */
@media (min-width: 768px) {
  #articlesPart1 {
    margin-bottom: 5%;
}
  #articlesPart1 img {
  height: 145px;
  width: 26vw;
  position: relative;
  grid-column: 1 / span 1;
}
  #articlesPart1 ul {
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    grid-gap: 10px;
  }
  #articlesPart1 article > div {
    width: 49vw;
    height: 145px;
  }
  #articlesPart1 article header {
    grid-column: 2 / span 1;
    text-align: left;
    width: 20vw;
    display: flex;
    align-items: center;
  }
  #articlesPart1 article header h4 {
    margin: 0;
    word-wrap: break-word;
    width: 20vw;
    text-align: center;
    color: #f0ae35;
  }
  #articlesPart1 article p,
  #articlesPart1 footer {
    width: 48vw;
  }
  #articlesPart1 article div:nth-child(2) strong {
    width: 47vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    color: #f0ae35;
  }
  #articlesPart1 article {
    height: 230px;
    width: 50vw;
    margin-bottom: 0%;
  }
}
@media (min-width: 992px){
  #articlesPart1 img, #articlesPart1 article > div {
    height: 6vh;
    width:100%;
}

#articlesPart1 article {
    height: 142px;
    width:100%;
}

#articlesPart1 article div:nth-child(2) strong {
    width: 100%;
}
#articlesPart1 {
    margin-bottom: 0%;
}
#articlesPart1 img {
    width: 11vw;
}
#articlesPart1 footer {
    width: 100%;
}
}
@media screen and (min-width: 1200px) {
  #articlesPart1 {
    margin: 4% 0% 0% 0%;
        width: 97vw;
  }
  
  #articlesPart1 article {
    width: 31vw;
    padding-right: 2%;
    margin: 3% 0% 0% 0%;
     height: 9vh;
  }
  #articlesPart1 article > div {
    width: 30vw;
    height: 5vh;
}
#articlesPart1 img {
    height: 5vh;
    width: 10vw;

}
#articlesPart1 article header {
    align-items: start;
}
#articlesPart1 article header h4 {
    text-align: left;
}
#articlesPart1 article div:nth-child(2) strong {
    width: 28vw;
    }
     #articlesPart1 footer {
    width: 31vw;
}
}
@media screen and (min-width: 1500px) {
  #articlesPart1 {
    margin: 4% 0% 0% 0%;
  }
  #articlesPart1 article {
    height: 140px;
  }
  #articlesPart1 img {
    width: 8vw;
}
}
@media screen and (min-width: 2000px) {
  #articlesPart1 article {
    width: auto;
    height: 8vh;
  }
  #articlesPart4 article:first-of-type {
    margin-bottom: 0%;
}
#articlesPart4 article:first-of-type img {
    width: 100vw;
}
  #articlesPart1 article header h4 {
    width: 9vw;
}

#articlesPart1 {
    margin: 7% 0% 0% 0%;
  }
  /* #posts article {
    height: 20.5vh;
    width: 31.5vw;
}
#posts > ul > li > article > section {
    width: 30vw;
    height: 18vh;
}
#posts > ul > li > article > section header {
margin-top: 30px;
} */
#articlesPart1 article div:nth-child(2) strong {
    width: 17vw;
}
}
</style>
