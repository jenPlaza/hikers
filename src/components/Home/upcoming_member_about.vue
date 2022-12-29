<template>
  <!--Upcoming Events block-->
  <section id="UpcomingEvents">
    <section id="mEvents">
      <h3>Upcoming Events</h3>
      <ul>
        <li>
          <h5>Date</h5>
          <p><strong>Event Title</strong></p>
          <p>
            Event Description
          </p>
        </li>
      </ul>
    </section>

    <!--Members block-->
    <section id="members">
      <h3>New Hikers</h3>
      <ul>
        <li>
<<<<<<< HEAD
          <img src="images/user.png" alt="Alternate Text" />
=======
          <img src="../../assets/images/user.png" alt="Alternate Text" />
>>>>>>> 4880d4685353d76121b3559c899b5cb5bc40fe35
          <p>
            <strong>jen Plaza</strong>
            <br />
            City, ST
          </p>
        </li>
      </ul>
    </section>

    <!--About block-->
    <section id="about">
      <h3>About</h3>
      <div>
        <h5>Title</h5>
        <p>
          Enim sed faucibus turpis in eu mi bibendum neque egestas. Tempor
          commodo ullamcorper a lacus vestibulum sed arcu non odio. Nunc sed
          velit dignissim sodales ut eu sem integer. Enim sed faucibus turpis in
          eu mi bibendum neque egestas. Tempor commodo ullamcorper a lacus
          vestibulum sed arcu non odio. Nunc sed velit dignissim sodales ut eu
          sem integer.
        </p>
      </div>
    </section>
  </section>
</template>

<script>
export default {
<<<<<<< HEAD
  name: "section",
};
</script>
<script>
=======
    // eslint-disable-next-line vue/multi-word-component-names
  name: "section",
};

>>>>>>> 4880d4685353d76121b3559c899b5cb5bc40fe35
var myHome = new XMLHttpRequest();
myHome.open("GET", "https://joshbloom.github.io/dws1/data/hikersguide.json");

myHome.onload = function() {
  var jsonHome = JSON.parse(myHome.responseText);
  secMiscMEvents(jsonHome);
  secMiscMem(jsonHome);
  secMiscAbout(jsonHome);
};
function secMiscMEvents(dataHomeMEvents) {
  var htmlHome4 = "";
  htmlHome4 += "<h3>Upcoming Events</h3>";
  htmlHome4 += "<ul>";
<<<<<<< HEAD
  for (i = 0; i < dataHomeMEvents.events.length; i++) {
=======
  for (var i = 0; i < dataHomeMEvents.events.length; i++) {
>>>>>>> 4880d4685353d76121b3559c899b5cb5bc40fe35
    htmlHome4 +=
      "<li><header><h5>" + dataHomeMEvents.events[i].date + "</h5></header>";
    htmlHome4 += "<p><strong>" + dataHomeMEvents.events[i].title + "</strong>";
    htmlHome4 += "<br/ >" + dataHomeMEvents.events[i].state + "</p></li>";
  }
  htmlHome4 += "</ul>";
  var articleBlog = document.getElementById("mEvents");
  articleBlog.innerHTML = htmlHome4;
}
function secMiscMem(dataHomeMembers) {
  var htmlHome3 = "<h3>New Hikers</h3>";
  htmlHome3 += "<ul>";
  for (var i = 0; i < dataHomeMembers.hikers.length; i++) {
    htmlHome3 +=
      '<li><span><img src="' + dataHomeMembers.hikers[i].imageURL + '"';
    htmlHome3 += 'alt="' + dataHomeMembers.hikers[i].subtitle + '"/></span>';
    htmlHome3 +=
      "<p><strong>" +
      dataHomeMembers.hikers[i].firstname +
      " " +
      dataHomeMembers.hikers[i].lastname +
      "</strong>";
    htmlHome3 +=
      "<br/ >  A member since " +
      dataHomeMembers.hikers[0].joinDate +
      ". A member from" +
      dataHomeMembers.hikers[i].city +
      ", " +
      dataHomeMembers.hikers[i].state +
      ".";
    htmlHome3 += "</p></li>";
  }
  htmlHome3 += "</ul>";
  var articleBlog = document.getElementById("members");
  articleBlog.innerHTML = htmlHome3;
}
function secMiscAbout(dataHomeAbout) {
  var htmlHome5 = "<h3>About</h3>";
  htmlHome5 += "<p><strong>" + dataHomeAbout.about.title + "</strong></p>";
  htmlHome5 += "<p>" + dataHomeAbout.about.text + "</p>";
  htmlHome5 += "</section>";
  var articleBlog = document.getElementById("about");
  articleBlog.innerHTML = htmlHome5;
}
myHome.send();
</script>
<style>
#UpcomingEvents {
  display: block;
  color: #888888;
  margin: auto;
  margin: 10% 0% -10% 0%;
  width: 100vw;
}
#mEvents {
  padding: 0 0 8% 0;
}
#members {
  background-color: #292828;
  padding: 4% 0% 4% 0%;
}

#about {
  width: 90%;
  margin: 10% 5% 20% 5%
}
#mEvents h3,
#members h3 {
  margin-left: 5%;
}
#mEvents h5 {
  margin-bottom: 2%;
}
  #members ul {
padding:0;
  }
#mEvents li {
  margin-left: 5%;
}
#mEvents li,
#members li {
  list-style: none;
}
#UpcomingEvents #mEvents li,
#UpcomingEvents #members li,
#UpcomingEvents #about div {
  transition: transform 0.2s;
}
#UpcomingEvents #about div {
  margin-right: 5%;
}
#UpcomingEvents #mEvents li:hover {
  transform: scale(1.1);
}
#UpcomingEvents #about div:hover {
  transform: scale(1.1);
}
#UpcomingEvents #mEvents p {
  display: table-cell;
  margin: 1%;
}
#UpcomingEvents #members img {
  display: table-cell;
  width: 100%;
  height: auto;
  margin-top: 5%;
}
#UpcomingEvents #members p strong {
  color: #f0ae35;
  margin-top: 25px;
}
#UpcomingEvents #members p {
  margin: 1% 2% 10% 4%;
}
/* BREAKPOINTS*
  / *====================================== */

@media screen and (min-width: 768px) {
  #UpcomingEvents {
    margin: 5% 0% 0% 0%;
  }
  #members ul {
    column-count: 2;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  }
  #UpcomingEvents #members img {
    width: 375px;
    height: 275px;
    margin-top: 0%;
    object-fit: cover;
  }
  #members {
    padding: 4% 0% 2% 0%;
  }
  #members li {
    height: 355px;
  }
  #about {
    width: 90%;
    margin: 8% 5%;
  }
  #foot div {
    margin: 0;
  }
}
@media screen and (min-width: 992px) {
 #members{
     display: flex;
    flex-direction:column;
    align-items:center;
    padding: 4% 0%;
  }

  #mEvents {
    padding-bottom:5%;
  }
  #mEvents ul{
    width: 100vw; 
   }
  #members ul{
    height: auto;
    column-count: 4;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    width: 95vw;
  }
  #mEvents li {
 display: inline-block;
     margin-left: 0; 
    width: 18vw; 
    }
     #members li {
    height: 221px;
  }
  #UpcomingEvents #members img {
  width: 225px;
    height: 165px;
  }
<<<<<<< HEAD
#members h3, #mEvents h3 {
=======
  #mEvents h3 {
margin-left: 5%;
  }
#members h3 {
>>>>>>> 4880d4685353d76121b3559c899b5cb5bc40fe35
  margin-left: 11%;
  width: 100vw;
}
#about {
    width: 90%;
    margin: 8% 6%;
  }
}
@media screen and (min-width: 1200px) {
  #members ul  {
    height: 270px;
    column-count: 4;
  }
  #members {
    width: 100%;
    height: 300px;
    margin: -2% 0% 0% 0%;
    padding: 1% 0% 5% 0%;
  }
  #members li {
    height: 265px;
  }
  #mEvents li{
 width: 24vw; 
      }
  #about {
    margin: 8% 0% 7% 6.5%;
  }
  #UpcomingEvents #members img {
    width: 275px;
    height: 150px;
  }
  #members h3, #mEvents h3 {
  margin-left: 12%;
}
}
@media screen and (min-width: 1500px) {
  #members {
    margin-top: -6%;
  }
   #mEvents {
    margin-bottom: 3%;
  }
     #mEvents li{
 margin-left: 2%;
 width: 21vw;
}
  #members ul {
    height: 325px;
  }
#about {
    margin: 8% 0% 7% 6%;
}
}
@media screen and (min-width: 2000px) {
  #members ul {
    height: 450px;
  }
  #members {
    height: 300px;
  }
 #mEvents h3 {
  margin-left: 5%;
}
#members h3{
  margin-left: 10%;
}
#about {
    margin: 5% 0% 7% 6%;
}
}
</style>
