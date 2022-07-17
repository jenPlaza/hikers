<template>
  <div>
    <header>
      <h2 d="id03">Events</h2>
    </header>
    <section id="tab">
      <button class="tablinks active" @click="openTab(event, 'Today')">
        Today
      </button>
       <button class="tablinks" @click="openTab(event, 'Weekend')">Weekend</button>
         <button class="tablinks" @click="openTab(event, 'ThisMonth')">This Month</button>
    </section>

    <section id="events">
      <!-- Today -->
      <section id="Today" class="tabContent" style="display:block">
        <article>
          <img src="../../assets/images/sunnytrees.png" alt="Alternate Text" />
          <section>
            <h3>Lorem Ipsum</h3>
            <p>May 4</p>
            <p>
              <strong
                >Dessert gingerbread lollipop pudding cheesecake gummies.
              </strong>
            </p>
            <p><strong>State</strong></p>
          </section>
        </article>
      </section>
      <!-- Weekend -->
      <section id="Weekend" class="tabContent">
        <article>
          <img src="../../assets/images/File_014.png" alt="Alternate Text" />
          <section>
            <h3>Weekday Wanderer - Caledon State Park</h3>
            <p>2016-11-10</p>
            <p><strong>3401 Courthouse Road North Chesterfield </strong></p>
            <p><strong>VA</strong></p>
          </section>
        </article>
        <article>
          <img src="../../assets/images/File_005.png" alt="Alternate Text" />
          <section>
            <h3>Veterans Appreciation Walk and Reception</h3>
            <p>2016-11-05</p>
            <p><strong>7030 Garrison St. Arvada </strong></p>
            <p><strong>CO</strong></p>
          </section>
        </article>
        <article>
          <img src="../../assets/images/File_015.png" alt="Alternate Text" />
          <section>
            <h3>Turkey Trek 5K Family Hike</h3>
            <p>2016-11-19</p>
            <p><strong>2100 East Centerville-Station Centerville </strong></p>
            <p><strong>OH</strong></p>
          </section>
        </article>
      </section>
      <!-- This Month -->
      <section id="ThisMonth" class="tabContent">
        <article>
          <img src="../../assets/images/File_019.png" alt="Alternate Text" />
          <section>
            <h3>Bear Mountain State Park</h3>
            <p>2019-11-04</p>
            <p><strong>Route 9W North, Bear Mountain </strong></p>
            <p><strong>NY</strong></p>
          </section>
        </article>
        <article>
          <img src="../../assets/images/File_012.png" alt="Alternate Text" />
          <section>
            <h3>The Race Against Extinction</h3>
            <p>2018-09-22</p>
            <p><strong>Any Place Washington Central Park</strong></p>
            <p><strong>DC</strong></p>
          </section>
        </article>
        <article>
          <img src="../../assets/images/File_018.png" alt="Alternate Text" />
          <section>
            <h3>Weekday Wanderer - Harriman State Park</h3>
            <p>2017-06-10</p>
            <p><strong>Harriman State Park </strong></p>
            <p><strong>NY</strong></p>
          </section>
        </article>
      </section>
    </section>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
  name: "tabs",
  methods: {
     openTab: function (tabId, tabName) {
        var x = document.getElementsByClassName("tabContent");
       for (var i = 0; i < x.length; i++) {
         x[i].style.display = "none";
       }
       document.getElementById(tabName).style.display = "block";
      
      // toggle buttons
        var y  = document.getElementsByClassName("tablinks");
        for (var p = 0; p < y.length; p++) {
            // remove active class
       y[p].className = y[p].className.replace(" active", "");
        }
      // get recent target and assign active
       tabId.currentTarget.className += " active";
      }
  },
};

var myEvents = new XMLHttpRequest();
myEvents.open("GET", "https://joshbloom.github.io/dws1/data/hikersguide.json");

myEvents.onload = function() {
  var jsonEvents = JSON.parse(myEvents.responseText);
  secToday(jsonEvents);
  secWeekend(jsonEvents);
  secThisMonth(jsonEvents);
};

function secToday(dataEvents2) {
  var imageArray = [
    require("@/assets/images/sunnytrees.png"),
    require("@/assets/images/File_017.png"),
    require("@/assets/images/File_016.png"),
    require("@/assets/images/crystalRiver.png"),
    require("@/assets/images/photo-1507041957456-9c397ce39c97.jpg"),
    require("@/assets/images/File_013.png"),
  ];

  var htmlEvents2 = "<section>";

  for (var i = 0; i < dataEvents2.events.length; i++) {
    htmlEvents2 += "<article>";
    htmlEvents2 += '<img src="' + imageArray[i] + '"';
    htmlEvents2 += 'alt="' + dataEvents2.events[i].subtitle + '"/>';
    htmlEvents2 += "<section>";
    htmlEvents2 += "<h3>" + dataEvents2.events[i].title + "</h3>";
    htmlEvents2 += "<div><p>" + dataEvents2.events[i].date + "</p>";
    htmlEvents2 += "<p><strong>" + dataEvents2.events[i].location + "<br/ >";
    htmlEvents2 += dataEvents2.events[i].state + "</strong></p></div>";
    htmlEvents2 += "</section>";
    htmlEvents2 += "</article>";
  }

  htmlEvents2 += "<article>";
  htmlEvents2 += '<img src="' + imageArray[5] + '"';
  htmlEvents2 += 'alt="' + dataEvents2.events[3].subtitle + '"/>';
  htmlEvents2 += "<section>";
  htmlEvents2 += "<h3>" + dataEvents2.events[3].title + "</h3>";
  htmlEvents2 += "<div><p>" + dataEvents2.events[3].date + "</p>";
  htmlEvents2 += "<p><strong>" + dataEvents2.events[3].location + "<br/ >";
  htmlEvents2 += dataEvents2.events[3].state + "</strong></p></div>";
  htmlEvents2 += "</section>";
  htmlEvents2 += "</article>";

  htmlEvents2 += "</section>";

  var articleEvents = document.getElementById("Today");
  articleEvents.innerHTML = htmlEvents2;
}

function secWeekend(dataEvents3) {
  var htmlEvents3 = "<section>";

  var imageArray = [
    require("@/assets/images/sunnytrees.png"),
    require("@/assets/images/File_017.png"),
    require("@/assets/images/File_014.png"),
    require("@/assets/images/File_005.png"),
    require("@/assets/images/File_015.png"),
    require("@/assets/images/File_013.png"),
  ];

  for (var i = 2; i < dataEvents3.events.length; i++) {
    htmlEvents3 += "<article>";
    htmlEvents3 += '<img src="' + imageArray[i] + '"';
    htmlEvents3 += 'alt="' + dataEvents3.events[i].subtitle + '"/>';
    htmlEvents3 += "<section>";
    htmlEvents3 += "<h3>" + dataEvents3.events[i].title + "</h3>";
    htmlEvents3 += "<p>" + dataEvents3.events[i].date + "</p>";
    htmlEvents3 += "<p><strong>" + dataEvents3.events[i].location + "<br/ >";
    htmlEvents3 += dataEvents3.events[i].state + "</strong></p>";
    htmlEvents3 += "</section>";
    htmlEvents3 += "</article>";
  }

  htmlEvents3 += "</section>";
  var articleEvents = document.getElementById("Weekend");
  articleEvents.innerHTML = htmlEvents3;
}
function secThisMonth(dataEvents4) {
  var htmlEvents4 = "<section>";

  var imageArray = [
    require("@/assets/images/sunnytrees.png"),
    require("@/assets/images/File_017.png"),
    require("@/assets/images/File_016.png"),
    require("@/assets/images/File_012.png"),
    require("@/assets/images/File_018.png"),
    require("@/assets/images/File_019.png"),
  ];

  for (var i = 3; i < dataEvents4.events.length; i++) {
    htmlEvents4 += "<article>";
    htmlEvents4 += '<img src="' + imageArray[i] + '"';
    htmlEvents4 += 'alt="' + dataEvents4.events[i].subtitle + '"/>';
    htmlEvents4 += "<section>";
    htmlEvents4 += "<h3>" + dataEvents4.events[i].title + "</h3>";
    htmlEvents4 += "<p>" + dataEvents4.events[i].date + "</p>";
    htmlEvents4 += "<p><strong>" + dataEvents4.events[i].location + "<br/ >";
    htmlEvents4 += dataEvents4.events[i].state + "</strong></p>";
    htmlEvents4 += "</section>";
    htmlEvents4 += "</article>";
  }

  htmlEvents4 += "</section>";
  var articleEvents = document.getElementById("ThisMonth");
  articleEvents.innerHTML = htmlEvents4;
}
myEvents.send();

</script>
<style>
div header h2 {
  padding: 5% 0px 5px 3%;
  color: #f0ae35;
}
#tab {
  overflow: hidden;
  width: 99.5%;
}
#tab button {
  float: left;
  color: #cccccc;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 14px 30px;
  transition: 0.3s;
  font-size: 22px;
  text-align: center;
}
#tab button.active {
  background-color: #292828;
}
.tabContent {
  display: none;
  border-top: none;
  background-color: transparent;
}
#events {
  background-color: #292828;
  margin-bottom: 15%;
  width: 95vw;
  text-align: center;
  padding-bottom: 1.5%;
}
#events article {
  margin: auto;
  height: 500px;
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#events article img {
  height: 300px;
  width: 95vw;
  object-fit: cover;
}
#events article section {
  height: 170px;
  width: 95vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  padding-bottom: 15px;
}
#events article section h3{
margin-bottom: 0;
}
#events article section div {
  width: 95vw;
  padding-bottom: 2%;
}
/* #events article section p strong {
            margin-top: -10px;
}*/
/* BREAKPOINTS*
  / *====================================== */
@media screen and (min-width: 768px) {
  #events {
    margin-bottom: 12%;
  }

  div header h2 {
    padding: 3% 0 0 3%;
  }

  #events article {
    margin: 5.5% auto;
    height: 575px;
  }
#events article img {
    height: 450px;
}
  #events article section {
    height: 18vh;
  }
  #events article section div {
    width: 95vw;
  }
}
@media screen and (min-width: 992px) {
  div header h2 {
    padding: 3% 0 0% 4%;
  }
  #events > section > section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    list-style-type: none;
    padding: 0;
    position: relative;
  }
  #events article {
    float: left;
    border: 1px solid #292828;
    width: calc(100% / 2.1);
    margin-bottom: -2%;
    height: 28vh;
  }
  #events article img {
    height: 17vh;
    width: 46vw;
  }
  #events article section {
    height: 155px;
    width: 46vw;
  }
  #events article section div {
    width: 46vw;
  }
  #tab {
    margin: 0;
  }
}
@media screen and (min-width: 1200px) {
  .body{
        margin-top: 5%;
  }
  div header h2 {
    margin: -2% 0% -6% 0%;
  }
  #tab {
    width: 75%;
    margin-top: 9%;
  }
  #events > section > section {
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    width: 95vw;
  }
  #events article {
    height: 353px;
  }
  #events article img {
    height: 14vh;
    width: 31vw;
  }
  #events article section {
    height: 183px;
    width: 31vw;
  }
  #events article section div {
    width: 31vw;
  }
}
@media screen and (min-width: 1500px) {
  div header h2 {
    margin: -2% 0% -7% 0%;
  }
  #events {
    margin: 0 0 0 -1%;
    width: 94vw;
    padding-bottom: 0;
    height:1028px;
  }
  #events > section > section {
    width: 94vw;
}
  #events article {
    width: calc(100% / 3.3);
    margin-top: 2%;
    height:509px;
  }
  #events article img {
    height: 310px;
     width: 23vw;
  }
  #events article section, #events article section div {
    width: 23vw;
}
#events article section {
    height: 173px;
}
}
@media screen and (min-width: 2000px) {
    #events {
    padding-bottom: 1%;
  }
  #events article img, #events article section, #events article section div {
    width: 18vw;
}
#events article section {
    height: 11vh;
}
}
</style>
