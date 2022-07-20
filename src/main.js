import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

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
  var htmlEvents2 = "<ul>";
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
  var imageArray = [
    require("@/assets/images/sunnytrees.png"),
    require("@/assets/images/File_017.png"),
    require("@/assets/images/File_014.png"),
    require("@/assets/images/File_005.png"),
    require("@/assets/images/File_015.png"),
    require("@/assets/images/File_013.png"),
  ];
  var htmlEvents3 = "<ul>";
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
  var imageArray = [
    require("@/assets/images/sunnytrees.png"),
    require("@/assets/images/File_017.png"),
    require("@/assets/images/File_016.png"),
    require("@/assets/images/File_012.png"),
    require("@/assets/images/File_018.png"),
    require("@/assets/images/File_019.png"),
  ];
  var htmlEvents4 = "<ul>";
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
myEvents.send();

createApp(App).use(router).mount('#app')

