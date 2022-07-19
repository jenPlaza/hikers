<template>
    <section id="articlesPart3">
      <ul><article>
        <img src="../../assets/images/union-wood-sunrise.jpg" alt="image" />
        <div>
          <header>
            <p><strong>Lorem Ipsum</strong></p>
          </header>
          <h3>
            Dessert gingerbread lollipop pudding cheesecake gummies sesame snaps
            jelly wafer.
          </h3>
          <footer>
            <p><strong>by Jen Plaza</strong></p>
            <p><strong>Sep 12, 2012</strong></p>
            <p><strong>lollipop </strong></p>
          </footer>
        </div>
      </article></ul>
    </section>
</template>

<script>
export default {
  name: "posts_sec3",
};

var pSec3 = new XMLHttpRequest();
pSec3.open("GET", "https://joshbloom.github.io/dws1/data/hikersguide.json");

pSec3.onload = function() {
  var jsonPosts = JSON.parse(pSec3.responseText);
  articlesPart3(jsonPosts);
};
function articlesPart3(dataPosts3) {
    var htmlPosts3 = "<ul>";
  var imageArray2 = [
    require("@/assets/images/union-wood-sunrise.jpg"),
    require("@/assets/images/File_001.png"),
  ];

  for (var i = 0; i < dataPosts3.locations.length - 3; i++) {
    htmlPosts3 += "<article>";
    htmlPosts3 += '<img src="' + imageArray2[i] + '"';
    htmlPosts3 += 'alt="' + dataPosts3.locations[i].title + '"/>';
    htmlPosts3 += "<div><h5>" + dataPosts3.locations[i].title + "</h5>";
    htmlPosts3 +="<header><p><strong>" +dataPosts3.locations[i].text +"</strong></p></header>";
    htmlPosts3 += "<footer>";
    htmlPosts3 += "<p>by " + dataPosts3.locations[i].author + "</p>";
    htmlPosts3 += "<p>" + dataPosts3.locations[i].postDate + "</p>";
    htmlPosts3 += "<p>" + dataPosts3.locations[i].moreLink + "</p>";
    htmlPosts3 += "</footer></div>";

    htmlPosts3 += "</article>";
  }
      htmlPosts3 += "</ul>";
  var articleBlog = document.getElementById("articlesPart3");
  articleBlog.innerHTML = htmlPosts3;
}
pSec3.send();
</script>
<style>
#articlesPart3 {
  width: 100vw;
  height: auto;
  margin-bottom: 1%;
}
#articlesPart3 ul{
padding:0;
}
#articlesPart3 article {
  width: 100vw;
  height: 435px;
  margin-bottom: 5%;
  margin-left: 1px;
  color: #ffd503;
  text-align: left;
  position: relative;
  /* overflow: hidden; */
}
#articlesPart3 article div {
  height: 190px;
  width: 75%;
  float: right;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 1% 1% 1% 3%;
  bottom: 40px;
  right: 0px;
  position: absolute;
}
#articlesPart3 article div h5 {
  margin: 6% 2%;
}
#articlesPart3 article p strong {
  position: relative;
  color: #8f7700;
}
#articlesPart3 footer {
  position: absolute;
  bottom: 10px;
  height: 24px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  width: 75vw;
  padding: 0;
  align-items: center;
}
#articlesPart3 footer p {
  color: #5c4d02;
}

#articlesPart3 article:first-of-type div {
  background: url("../../assets/images/white.jpg");
      height: 141px;
}
#articlesPart3 article:last-of-type div {
  background: url("../../assets/images/JG-Warm-Painterly-Background@2x.jpg");
}
#articlesPart3 article:first-of-type img, #articlesPart3 article:last-of-type img {
    width: 100vw;
    height: 415px;
  }
#articlesPart3 article:last-of-type div footer p{
color: #bb9d06;
}
/* BREAKPOINTS*
  / *====================================== */
@media screen and (min-width: 768px) {
  #articlesPart3 article{
    margin-bottom: 0%;
  }
  #articlesPart3 article:first-of-type div {
      height: 130px;
}
  #articlesPart3 article:last-of-type div {
      height: 230px;
}
  #articlesPart3 article div {
    width: 65%;
  }
  /* #articlesPart3 footer {
    bottom: 50px;
  } */
}
@media screen and (min-width: 992px) {
  #articlesPart3 {
    height: 64vh;
  }
  #articlesPart3 article {
   width: 100vw;
    float: left;
    height: 415px;
    margin-left: 1px;
    padding: 8px;
  }
  #articlesPart3 article:first-of-type div {
    height: 100px;
    bottom: 20px;
    right: -70px;
}
#articlesPart3 article:last-of-type div {
    height: 129px;
    width: 85%;
    border-radius: 25px;
    right: -5px;
    bottom: 20px;
}
#articlesPart3 footer {
    bottom: 5px;
        width: 39vw;

}
#articlesPart3 article div h5 {
  margin: 2% 61px -9px 1%;
}
}
@media screen and (min-width: 1200px) {
  #articlesPart3 {
       display: flex;
    justify-content: center;
    margin-top: -2%;
    height: 45vh;
  }
  #articlesPart3 ul {
    display: flex;
    justify-content: center;
  }
  #articlesPart3 article {
    padding: 7px;
    height: 510px;
}
#articlesPart3 article:first-of-type div {
    height: 100px;
    bottom: 10px;
    right: 9px;
    width: 29vw;
}
#articlesPart3 article:first-of-type img, #articlesPart3 article:last-of-type img  {
    height: 600px;
}

#articlesPart3 article:first-of-type div header{
    width:30vw;
}
#articlesPart3 article:first-of-type div footer{
    width:31vw;
}
#articlesPart3 article:last-of-type div header{
    width: 39vw;
}
#articlesPart3 article:last-of-type div footer p{
    color:black;
}

  }
@media screen and (min-width: 1500px) {
  #articlesPart3 {
    margin-top: 0%;
      height: 43vh;
  }
    #articlesPart3 article {
    width: 49vw;
}
  #articlesPart3 article div {
    height: 105px;
    width: 100%;
    border-radius: 0mm;
    bottom: 0;
  }
  #articlesPart3 article h3,
  #articlesPart3 article p strong,
  #articlesPart3 p {
    width: 90%;
    margin-left: 5%;
  }
  #articlesPart3 article:first-of-type div {
   bottom: -73px;
    right: -24px;
    border-radius: 25px;
  }
  #articlesPart3 article:last-of-type div {
    right: -77px;
     bottom: -73px;
}
}
@media screen and (min-width: 2000px) {
/* #articlesPart4 article:first-of-type {
    margin-bottom: 0%;
    width: 99vw;
} */
#articlesPart3 {
    height:42vh;
  }
}
</style>
