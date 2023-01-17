<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div id="rotatorEvents">
      <img
        alt=" alternate text"
        v-bind:src="require('../../assets/images/File_011.png')"
      />
      <section>
        <h1>May 4</h1>
        <h5>Dessert gingerbread lollipop pudding cheesecake gummies.</h5>

        <span>
          <button class="left" onclick="location.href='#';">
            <img
              alt=" alternate text"
              v-bind:src="require('../../assets/images/left.png')"
            />
          </button>
        </span>
        <span>
          <button class="right" onclick="location.href='#';">
            <img
              alt=" alternate text"
              v-bind:src="require('../../assets/images/right.png')"
            />
          </button>
        </span>
      </section>
    </div>
  </div>
</template>
<script src="../../../js/events.js"></script>
<!-- <script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'banner',
};

var myHome = new XMLHttpRequest();
myHome.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');

myHome.onload = function () {
  var jsonHome = JSON.parse(myHome.responseText);
  secRotate(jsonHome);
};

function secRotate(dataEvents) {
  var htmlEvents = '';
  htmlEvents +=
    '<img alt=" alternate text" src="/assets/images/File_011.png" />';
  htmlEvents += '<section>';

  htmlEvents += '<h1>' + dataEvents.events[4].date + '</h1>';
  htmlEvents += '<h5>' + dataEvents.events[4].location + ' </h5>';

  htmlEvents += '<span>';
  htmlEvents += '<button class=left onclick=location.href="#">.</button>';
  htmlEvents += '</span>';
  htmlEvents += '<span>';
  htmlEvents += '<button class=right onclick=location.href="#">.</button>';
  htmlEvents += '</span>';
  htmlEvents += '</section>';

  var articleEvents = document.getElementById('rotatorEvents');
  articleEvents.innerHTML = htmlEvents;
}
</script> -->
<style>
#rotatorEvents {
  overflow: scroll;
  height: 400px;
  object-fit: contain;
  width: 100vw;
}
#rotatorEvents h1 {
  text-align: center;
  margin-top: -250px;
  color: #111111;
  font-size: 4em;
}
#rotatorEvents h5 {
  text-align: center;
  margin-top: -20px;
  color: #111111;
  /*font-size: 20px;*/
}
#rotatorEvents button {
  background-color: transparent;
}
span .left {
  position: absolute;
  left: 0;
  float: left;
  /* background: url(/HikersGuide/images/left.png) no-repeat; */
  width: 50px;
  height: 50px;
  border: none;
  margin-top: -100px;
}
span .right {
  position: absolute;
  right: 0;
  float: right;
  /* background: url(/HikersGuide/images/right.png) no-repeat; */
  width: 50px;
  height: 50px;
  border: none;
  margin-top: -100px;
}
@media screen and (min-width: 1200px) {
  #rotatorEvents {
    height: 350px;
  }
}
</style>
