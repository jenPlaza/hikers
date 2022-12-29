<template>
  <section id="articlesPart4">
    <!--  article 1 -->

    <ul>
      <article>
        <img
          src="../../assets/images/forest-grass-lawn-1826.jpg"
          alt="Alternate Text"
        />
        <div>
          <header>
            <p><strong>Lorem Ipsum</strong></p>
          </header>
          <h3>
            Dessert gingerbread lollipop pudding cheesecake gummies
            marshmellows.
          </h3>
          <p>
            Enim sed faucibus turpis in eu mi bibendum neque egestas. Tempor
            commodo ullamcorper a lacus vestibulum sed arcu non odio. Nunc sed
            velit dignissim sodales ut eu sem integer.
          </p>
        </div>
      </article>
    </ul>
    <!--  article 2 -->
    <article>
      <img
        src="../../assets/images/fall-background-photo.jpg"
        alt="Alternate Text"
      />;
      <div>
        <header>
          <p><strong>Lorem Ipsum</strong></p>
        </header>
        <h3>Dessert gingerbread lollipop pudding cheesecake gummies.</h3>
        <p>
          Enim sed faucibus turpis in eu mi bibendum neque egestas. Tempor
          commodo ullamcorper a lacus vestibulum sed arcu non odio. Nunc sed
          velit dignissim sodales ut eu sem integer.
        </p>
      </div>
    </article>

    <!--  section -->
    <section>
      <div>
        <header>
          <h3>Lorem Ipsum</h3>
        </header>
        <p>
          Dessert gingerbread lollipop pudding cheesecake gummies sesame snaps
          jelly wafer.
        </p>
      </div>
    </section>
    <!--  end -->
  </section>
</template>

<script>
export default {
  name: 'posts_sec4',
};
</script>
<script>
var pSec4 = new XMLHttpRequest();
pSec4.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');

pSec4.onload = function () {
  var jsonPosts = JSON.parse(pSec4.responseText);
  articles4(jsonPosts);
};
function articles4(dataPosts4) {
  //var htmlArticle4 = "<ul>";

  var imageArray3 = [
    require('@/assets/images/File_005.png'),
    require('@/assets/images/crystalsaltlake.png'),
    require('@/assets/images/forest-grass-lawn-1826.jpg'),
    require('@/assets/images/fall-background-photo.jpg'),
  ];

  var htmlArticle4 = '';

  for (var i = 2; i < dataPosts4.locations.length - 1; i++) {
    htmlArticle4 += '<article>';
    htmlArticle4 += '<img src="' + imageArray3[i] + '"';
    htmlArticle4 += 'alt="' + dataPosts4.locations[i].title + '"/>';

    htmlArticle4 +=
      '<div><header><h3>' + dataPosts4.locations[i].title + '</h3></header>';
    htmlArticle4 +=
      '<p><strong>' + dataPosts4.locations[i].text + '</strong></p>';
    htmlArticle4 += '<p>' + dataPosts4.posts[i].text + '</p>';
    htmlArticle4 += '</div>';
    htmlArticle4 += '</article>';
  }

  /* htmlArticle4 += "</ul>";*/

  htmlArticle4 += '<section>';
  htmlArticle4 += '<img src="' + imageArray3[1] + '"';
  htmlArticle4 += 'alt="' + dataPosts4.locations[4].title + '"/>';
  htmlArticle4 += '<div>';
  htmlArticle4 +=
    '<header><h3>' + dataPosts4.locations[4].title + '</h3></header>';

  htmlArticle4 += '<p>' + dataPosts4.locations[4].text + '</p>';
  htmlArticle4 +=
    '<p>' +
    dataPosts4.locations[4].city +
    ' | ' +
    dataPosts4.locations[4].state +
    '</p>';

  /* htmlArticle4 += "<p>" + dataPosts4.locations[4].text + "<br />";
htmlArticle4 +=" " + dataPosts4.locations[4].city + " | " + dataPosts4.locations[4].state + "</p>"; */

  htmlArticle4 += '</div>';
  htmlArticle4 += '</section>';

  var articleBlog = document.getElementById('articlesPart4');
  articleBlog.innerHTML = htmlArticle4;
}

pSec4.send();
</script>
<style>
#articlesPart4 {
  width: 100vw;
  height: auto;
}

#articlesPart4 article {
  width: 100vw;
  margin-bottom: 5%;
  margin-left: 1px;
  color: #ffd503;
  text-align: left;
  position: relative;
  overflow: hidden;
}
#articlesPart4 article:first-of-type {
  height: 400px;
}
#articlesPart4 article:last-of-type {
  height: 500px;

  /* #articlesPart4 ul{
padding:0;
height:100%;
margin-bottom: 5%;
}
#articlesPart4 article {
/* width: 100vw;
margin-bottom: 5%;
margin-left: 1px; */
  /*color: #ffd503;
text-align: left;
position: relative;
}
#articlesPart4 article:first-of-type {
  height:37%;
   margin-bottom: 5%;
  }
#articlesPart4 article:last-of-type {
  height:52%; */
}
#articlesPart4 article img {
  width: 100vw;
  object-fit: contain;
}
#articlesPart4 article div {
  height: 275px;
  width: 100%;
  background-color: rgba(16, 24, 32, 0.4);
  position: absolute;
  /* height: 275px;
width: 100%; */
  background-color: rgba(16, 24, 32, 0.4);
  /* position: absolute;
bottom:0; */
}

#articlesPart4 article h3 {
  position: relative;
  text-align: left;
  font-weight: bolder;
  margin: 5% 2% 0% 2%;
}
#articlesPart4 article p strong {
  position: relative;
  font-size: 14px;
  font-weight: bolder;
  color: #ccaa00;
}
#articlesPart4 p {
  /* margin: 4% 2% 0% 2%;
}
#articlesPart4 section {
width: 400px;
height: 550px;
}
#articlesPart4 section img {
width: 100vw;
}
#articlesPart4 section div {
margin: -65% 0 0 0;*/

  margin: 4% 3% -1% 3%;
  text-align: justify;
}
#articlesPart4 section {
  width: 400px;
  height: 525px;
}
#articlesPart4 section img {
  width: 100vw;
  height: 500px;
}
#articlesPart4 section div {
  margin: -60% 30px 0 10px;
}

/* BREAKPOINTS*
/ *====================================== */
@media screen and (min-width: 768px) {
  #articlesPart4 ul {
    margin-bottom: 0;
  }

  #articlesPart4 article {
    margin-bottom: 0%;
    height: 29vh;
  }

  #articlesPart4 section {
    width: 100%;
    height: 1100px;
  }
  #articlesPart4 section div {
    margin: -75% 3% 0% 3%;
  }
  #articlesPart4 article div {
    bottom: -41px;
  }
  #articlesPart4 article img {
    width: 100vw;
    object-fit: contain;
  }
  #articlesPart4 article:first-of-type {
    margin-bottom: -20%;
  }
  #articlesPart4 article:first-of-type img {
    height: 100%;
  }
  #articlesPart4 article:last-of-type {
    height: 870px;
  }
  #articlesPart4 article:last-of-type img {
    height: 36vh;
  }
}
@media screen and (min-width: 992px) {
  /* #articlesPart4 {
  width: 80vw;
  height: auto;
  margin-bottom: -78%;
} */
  #articlesPart4 article {
    width: 100vw;
    float: left;
    margin-top: 5%;
  }
  #articlesPart4 article:first-of-type img {
    width: 142vw;
  }
  #articlesPart4 article:last-of-type img {
    width: 100vw;
    /* #articlesPart4 article img {
  width: 100vw;
  object-fit: cover;
}
#articlesPart4 article:first-of-type {
   margin-bottom:3%;
}
  #articlesPart4 article:first-of-type img {
   height: 100%;
}
#articlesPart4 article:first-of-type div{
bottom: 0;
  left: 0;
  position: absolute;
  padding-bottom: 3%;
}
 #articlesPart4 article:last-of-type {
  margin-bottom:3%;
}
#articlesPart4 article:last-of-type div{
bottom: 5px;
  left: 0;
  position: absolute;
  padding-bottom: 3%;
}
#articlesPart4 section {
  width: 100%;
  height: 500px;
  margin: 0;
}
#articlesPart4 section div {
  margin: -32% 3% 0% 3%;
}
}
@media screen and (min-width: 992px) {
#articlesPart4  {
  width: 100vw;
  height:100%;
  margin-top: 2%;
}
#articlesPart4 ul {
padding: 1% 0;
height:800px;
}
#articlesPart4 article {
  float: left;
}
#articlesPart4 article:first-of-type {
  height:300px;
  width:100%;
  margin-bottom: 4%;
  }
  #articlesPart4 article:last-of-type {
  height: 435px;
   width:100%;
}
#articlesPart4 article img {
  width: 100%;
  object-fit: cover;
  }
#articlesPart4 article:last-of-type img { */
    height: 40vh;
  }
  #articlesPart4 article:last-of-type div {
    position: absolute;
    bottom: 117px;
  }
  #articlesPart4 section img {
    height: 500px;
    object-fit: cover;
  }
  #articlesPart4 section {
    width: 100vw;
    position: relative;
    margin-bottom: 10%;
  }

  /*   bottom: 0px;
  left:0;
  padding: 1px 5px;
  height: 245px;
}

#articlesPart4 section {
  width: 100%;
  height: 360px;
  margin: 0;
}
#articlesPart4 section img {
  height: 350px;
  object-fit:cover;
} */
  #articlesPart4 section div {
    margin: -25% 3% 0% 3%;
  }
}
@media screen and (min-width: 1200px) {
  #articlesPart4 {
    margin-left: -13px;
  }
  #articlesPart4 section {
    text-align: center;
    height: 320px;
  }
  #articlesPart4 article img {
    height: 43vh;
  }
  #articlesPart4 article:first-of-type div {
    bottom: 19px;
  }
  #articlesPart4 article:last-of-type div {
    bottom: 15px;
  }
  #articlesPart4 section div {
    margin: -30% 3% 0% 3%;
    /*  bottom: 0;
}
#articlesPart4 article:last-of-type div {
  bottom: 5px;
  height:275px;
}
#articlesPart4 section div {
   margin: -18% 3% 0% 3%;
  text-align: left; 
}
#articlesPart4 article div {*/
    bottom: 20px;
  }
}
@media screen and (min-width: 1500px) {
  /*   #articlesPart4 {
    margin-bottom: -5%;
}
  #articlesPart4 ul {
display:flex;
height:425px;
  }*/

  #articlesPart4 article h3,
  #articlesPart4 article p strong,
  #articlesPart4 p {
    width: 90%;
    margin-left: 5%;
  }
}
@media screen and (min-width: 2000px) {
  #articlesPart4 article {
    height: 23vh;
  }
  #articlesPart4 article img {
    width: 100vw;
    height: 24vh;
    object-fit: fill;
  }
  #articlesPart4 section img {
    height: 800px;
    object-fit: cover;
  }
  #articlesPart4 section div {
    margin: -25% 3% 0% 3%;

    /* #articlesPart4 article:last-of-type {
  height: 435px;
  width: 49.5vw;
  right: 0;
  position: absolute;
}
#articlesPart4 article:first-of-type  {
  /* height: 275px; */
    /*  height: 435px;
  width: 50vw;
  left: 0;
  position: absolute;
}
#articlesPart4 article:last-of-type div {
  height: 217px;
  bottom: 0;
  padding-bottom: 3%;
}
#articlesPart4 article:last-of-type img {
  height:100%;
  }
  #articlesPart4 section div {
margin-top: -13%
}
#articlesPart4 section img {
object-position: 0 -1360px;
}
#articlesPart4 section div p{
margin:0;
}
}
@media screen and (min-width: 2000px) {
#articlesPart4  {
    height: 1000px;
}
#articlesPart4 ul {
  display: flex;
  height: 426px;
}
#articlesPart4 article {
  height: 23vh;
}
#articlesPart4 section img {
  height: 480px;
  object-fit: cover;
    object-position: 0 -2472px;
}
#articlesPart4 section div {
margin-top: -13% */
  }
  #articlesPart4 section {
    margin-bottom: -17%;
  }
}
</style>
