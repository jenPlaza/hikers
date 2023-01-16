var myHome = new XMLHttpRequest();
myHome.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');

myHome.onload = function () {
  var jsonHome = JSON.parse(myHome.responseText);
  secEvents(jsonHome);
  secJoin(jsonHome);
  secMiscMem(jsonHome);
  secMiscMEvents(jsonHome);
  secMiscAbout(jsonHome);
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

function secJoin(dataHomeJoin) {
  var htmlHome2 = '<h2>JOIN THE ADVENTURE</h2>';
  htmlHome2 += '<h3>' + dataHomeJoin.locations[4].title + '</h3>';
  htmlHome2 += '<p>' + dataHomeJoin.locations[4].text + ' </p>';
  htmlHome2 +=
    '<p>' +
    dataHomeJoin.locations[4].city +
    ' | ' +
    dataHomeJoin.locations[4].state +
    ' </p>';

  var articleEvents = document.getElementById('join');
  articleEvents.innerHTML = htmlHome2;
}

function secMiscMem(dataHomeMembers) {
  var htmlHome3 = '';

  htmlHome3 += '<section>';

  for (var i = 0; i < dataHomeMembers.hikers.length; i++) {
    htmlHome3 += '<img src="' + dataHomeMembers.hikers[i].imageURL + '"';

    htmlHome3 += 'alt="' + dataHomeMembers.hikers[i].subtitle + '"/>';

    htmlHome3 +=
      '<p><strong>' +
      dataHomeMembers.hikers[i].firstname +
      ' ' +
      dataHomeMembers.hikers[i].lastname +
      '</strong>';

    htmlHome3 +=
      '<br/ >  A member since ' +
      dataHomeMembers.hikers[0].joinDate +
      '. A member from' +
      dataHomeMembers.hikers[i].city +
      ', ' +
      dataHomeMembers.hikers[i].state +
      '.';
    htmlHome3 += '</p>';
  }
  htmlHome3 += '</section>';

  var articleBlog = document.getElementById('members');
  articleBlog.innerHTML = htmlHome3;
}

function secMiscMEvents(dataHomeMEvents) {
  var htmlHome4 = '';

  htmlHome4 += '<section>';

  for (var i = 0; i < dataHomeMEvents.events.length; i++) {
    htmlHome4 +=
      '<img src="/HikersGuide/design/calendar-2.png" alt="Alternate Text" />';
    htmlHome4 += '<p><strong>' + dataHomeMEvents.events[i].title + '</strong>';
    htmlHome4 += '<br/ >' + dataHomeMEvents.events[i].state + '</p>';
  }
  htmlHome4 += '</section>';

  var articleBlog = document.getElementById('mEvents');
  articleBlog.innerHTML = htmlHome4;
}

function secMiscAbout(dataHomeAbout) {
  var htmlHome5 = '';

  htmlHome5 += '<section>';
  htmlHome5 += '<h3>About</h3>';
  htmlHome5 += '<p><strong>' + dataHomeAbout.about.title + '</strong></p>';
  htmlHome5 += '<p>' + dataHomeAbout.about.text + '</p>';
  htmlHome5 += '</section>';

  var articleBlog = document.getElementById('about');
  articleBlog.innerHTML = htmlHome5;
}
myHome.send();
