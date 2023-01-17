/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
 */

// function filter(evt, category) {
//   var tabcontent = document.getElementsByClassName('tabcontent');

//   for (var i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = 'none';
//   }

//   var tablinks = document.getElementsByClassName('tablinks');
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(' active', '');
//   }
//   document.getElementById(category).style.display = 'block';
//   evt.currentTarget.className += ' active';
// }

// function search() {
//   var input = document.getElementById('check').value;

//   if (input === 'chattahoochee') {
//     alert(
//       'November 19: Chattahoochee Challenge Adventure Race, 1036 Broadway Columbus, GA'
//     );
//   } else if (input === 'extinction') {
//     alert(
//       'April 22: The Race Against Extinction, Any place Washington MAll, Washington, DC'
//     );
//   } else if (input === 'turkey') {
//     alert(
//       'Nov 19: Turkey Trek 5K Family Hike, 2100 East Centerville-Station Centerville, OH'
//     );
//   } else if (input === 'wanderer') {
//     alert(
//       'Nov 10: Weekday Wanderer - Caledon State Park, 3401 Courthouse Road North Chesterfiel, VA'
//     );
//   } else if (input === 'veterans') {
//     alert(
//       'Nov 05: Veterans Appreciation Walk and Reception, 7030 Garrison St. Arvada, CO'
//     );
//   } else {
//     alert('There is no event with that name.');
//   }
// }

// input.addEventListener('blur', search(), false);

// function openForm() {
//   document.getElementById('mailingList').style.display = 'block';
// }

var imageArray = [
  require('@/assets/images/sunnytrees.png'),
  require('@/assets/images/File_017.png'),
  require('@/assets/images/File_016.png'),
  require('@/assets/images/crystalRiver.png'),
  require('@/assets/images/photo-1507041957456-9c397ce39c97.jpg'),
  require('@/assets/images/File_013.png'),
];

var myEvents = new XMLHttpRequest();
myEvents.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');
myEvents.onload = function () {
  var jsonEvents = JSON.parse(myEvents.responseText);
  secToday(jsonEvents);
  secWeekend(jsonEvents);
  secThisMonth(jsonEvents);
};

function secToday(dataEvents2) {
  var htmlEvents2 = '<section>';

  for (var i = 0; i < dataEvents2.events.length; i++) {
    htmlEvents2 += '<article>';
    htmlEvents2 += '<img src="' + imageArray[i] + '"';
    htmlEvents2 += 'alt="' + dataEvents2.events[i].subtitle + '"/>';
    htmlEvents2 += '<section>';
    htmlEvents2 += '<h3>' + dataEvents2.events[i].title + '</h3>';
    htmlEvents2 += '<div><p>' + dataEvents2.events[i].date + '</p>';
    htmlEvents2 += '<p><strong>' + dataEvents2.events[i].location + '<br/ >';
    htmlEvents2 += dataEvents2.events[i].state + '</strong></p></div>';
    htmlEvents2 += '</section>';
    htmlEvents2 += '</article>';
  }

  htmlEvents2 += '<article>';
  htmlEvents2 += '<img src="' + imageArray[5] + '"';
  htmlEvents2 += 'alt="' + dataEvents2.events[3].subtitle + '"/>';
  htmlEvents2 += '<section>';
  htmlEvents2 += '<h3>' + dataEvents2.events[3].title + '</h3>';
  htmlEvents2 += '<div><p>' + dataEvents2.events[3].date + '</p>';
  htmlEvents2 += '<p><strong>' + dataEvents2.events[3].location + '<br/ >';
  htmlEvents2 += dataEvents2.events[3].state + '</strong></p></div>';
  htmlEvents2 += '</section>';
  htmlEvents2 += '</article>';

  htmlEvents2 += '</section>';

  var articleEvents = document.getElementById('Today');
  articleEvents.innerHTML = htmlEvents2;
}

function secWeekend(dataEvents3) {
  var htmlEvents3 = '<section>';

  for (var i = 2; i < dataEvents3.events.length; i++) {
    htmlEvents3 += '<article>';
    htmlEvents3 += '<img src="' + imageArray[i] + '"';
    htmlEvents3 += 'alt="' + dataEvents3.events[i].subtitle + '"/>';
    htmlEvents3 += '<section>';
    htmlEvents3 += '<h3>' + dataEvents3.events[i].title + '</h3>';
    htmlEvents3 += '<p>' + dataEvents3.events[i].date + '</p>';
    htmlEvents3 += '<p><strong>' + dataEvents3.events[i].location + '<br/ >';
    htmlEvents3 += dataEvents3.events[i].state + '</strong></p>';
    htmlEvents3 += '</section>';
    htmlEvents3 += '</article>';
  }

  htmlEvents3 += '</section>';
  var articleEvents = document.getElementById('Weekend');
  articleEvents.innerHTML = htmlEvents3;
}
function secThisMonth(dataEvents4) {
  var htmlEvents4 = '<section>';

  for (var i = 3; i < dataEvents4.events.length; i++) {
    htmlEvents4 += '<article>';
    htmlEvents4 += '<img src="' + imageArray[i] + '"';
    htmlEvents4 += 'alt="' + dataEvents4.events[i].subtitle + '"/>';
    htmlEvents4 += '<section>';
    htmlEvents4 += '<h3>' + dataEvents4.events[i].title + '</h3>';
    htmlEvents4 += '<p>' + dataEvents4.events[i].date + '</p>';
    htmlEvents4 += '<p><strong>' + dataEvents4.events[i].location + '<br/ >';
    htmlEvents4 += dataEvents4.events[i].state + '</strong></p>';
    htmlEvents4 += '</section>';
    htmlEvents4 += '</article>';
  }

  htmlEvents4 += '</section>';
  var articleEvents = document.getElementById('ThisMonth');
  articleEvents.innerHTML = htmlEvents4;
}
myEvents.send();
