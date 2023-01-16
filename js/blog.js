/*
 * Use AJAX to load the JSON and manipulate the HTML
 * https://joshbloom.github.io/dws1/data/hikersguide.json
 */

console.log('blog');

var myBlog = new XMLHttpRequest();
myBlog.open('GET', 'https://joshbloom.github.io/dws1/data/hikersguide.json');
myBlog.onload = function () {
  var request = JSON.parse(myBlog.responseText);
  secALevel1(request);
  secALevel2(request);
  secALevel3(request);
  secALevel4(request);
};

function secALevel1(data1) {
  var htmlBlog = '<ul>';
  var imageArray = [
    require('@/assets/images/File_005.png'),
    require('@/assets/images/File_010.png'),
    require('@/assets/images/File_015.png'),
    require('@/assets/images/File_012.png'),
    require('@/assets/images/File_013.png'),
    require('@/assets/images/File_014.png'),
    require('@/assets/images/File_018.png'),
  ];

  for (var i = 0; i < data1.locations.length; i++) {
    htmlBlog += '<li><article>';
    htmlBlog += '<div><img src="' + imageArray[i] + '"';
    htmlBlog += 'alt="' + data1.locations[i].title + '"/>';
    htmlBlog +=
      '<header><h4>' + data1.locations[i].title + '</h4></header></div>';
    htmlBlog += '<div><strong>' + data1.locations[i].text + '</strong></div>';
    htmlBlog += '<footer>';
    htmlBlog += '<p>by ' + data1.posts[i].author + '</p>';
    htmlBlog += '<p>' + data1.posts[i].postDate + '</p>';
    htmlBlog += '<p>' + data1.posts[i].moreLink + '</p></footer>';

    htmlBlog += '<span';
    htmlBlog +=
      '<input type="button" value="View More" class="seeMore" onclick="location.href=#" />';
    htmlBlog += '</span>';

    htmlBlog += '</article></li>';
  }
  htmlBlog += '</ul>';

  var articleBlog = document.getElementById('articlesPart1');
  articleBlog.innerHTML = htmlBlog;
}

function secALevel2(data2) {
  var htmlArticle2 = '';

  for (var i = 0; i < data2.posts.length; i++) {
    htmlArticle2 += '<article>';
    htmlArticle2 += '<img src="' + data2.posts[i].imageURL + '"';
    htmlArticle2 += 'alt="' + data2.posts[i].subtitle + '"/>';
    htmlArticle2 += '<p>' + data2.posts[i].subtitle + '</p>';
    htmlArticle2 += '<h3>' + data2.posts[i].title + '</h3>';
    htmlArticle2 += '<dl>';
    htmlArticle2 += '<dt>by ' + data2.posts[i].author + '</dt>';
    htmlArticle2 += '<dt>' + data2.posts[i].postDate + '</dt>';
    htmlArticle2 += '<dt>' + data2.posts[i].moreLink + '</dt>';
    htmlArticle2 += '</dl>';
    htmlArticle2 += '</article>';
  }

  var articleBlog = document.getElementById('aLevel2');
  articleBlog.innerHTML = htmlArticle2;
}
function secALevel3(data3) {
  var htmlArticle3 = '<section>';
  htmlArticle3 +=
    '<img src="/HikersGuide/design/white.jpg" alt="Alternate Text" />';
  htmlArticle3 += '<section>';
  htmlArticle3 += '<p><strong>' + data3.locations[0].title + '</strong></p>';
  htmlArticle3 += '<h3>' + data3.locations[0].text + '</h3>';
  htmlArticle3 += '</section>';
  htmlArticle3 += '<dl>';
  htmlArticle3 += '<dt><strong>by ' + data3.posts[0].author + '</strong></dt>';
  htmlArticle3 += '<dt><strong>' + data3.posts[0].postDate + '</strong></dt>';
  htmlArticle3 += '<dt><strong>' + data3.posts[0].moreLink + '</strong></dt>';
  htmlArticle3 += '</dl>';
  htmlArticle3 += '</section>';
  htmlArticle3 += '<article>';
  htmlArticle3 +=
    '<img src="/HikersGuide/design/File_001.png" alt="Alternate Text" />';
  htmlArticle3 += '<article>';
  htmlArticle3 += '<p><strong>' + data3.posts[1].title + '</strong></p>';

  htmlArticle3 += '<h3>' + data3.posts[1].subtitle + '</h3>';
  htmlArticle3 += '<p>' + data3.posts[1].text + '</p>';
  htmlArticle3 += '</article>';
  htmlArticle3 += '<dl>';
  htmlArticle3 += '<dt>by ' + data3.posts[1].author + '</dt>';
  htmlArticle3 += '<dt>' + data3.posts[1].postDate + '</dt>';
  htmlArticle3 += '<dt>' + data3.posts[1].moreLink + '</dt>';
  htmlArticle3 += '</dl>';
  htmlArticle3 += '</article>';

  var articleBlog = document.getElementById('aLevel3');
  articleBlog.innerHTML = htmlArticle3;
}
function secALevel4(data4) {
  var htmlArticle4 = '';
  htmlArticle4 += '<article>';
  htmlArticle4 +=
    '<img src="/HikersGuide/design/forest-grass-lawn-1826.jpg" alt="Alternate Text" />';
  htmlArticle4 += '<article>';
  htmlArticle4 += '<p><strong>' + data4.locations[2].title + '</strong></p>';
  htmlArticle4 += '<h3>' + data4.locations[2].text + '</h3>';
  htmlArticle4 += '<p>' + data4.posts[1].text + '</p>';
  htmlArticle4 += '</article>';
  htmlArticle4 += '</article>';
  htmlArticle4 += '<article>';
  htmlArticle4 +=
    '<img src="/HikersGuide/design/fall-background-photo.jpg" alt="Alternate Text" />';
  htmlArticle4 += '<article>';
  htmlArticle4 += '<p><strong>' + data4.locations[3].title + '</strong></p>';
  htmlArticle4 += '<h3>' + data4.locations[3].text + '</h3>';
  htmlArticle4 += '<p>' + data4.posts[1].text + '</p>';
  htmlArticle4 += '</article>';
  htmlArticle4 += '</article>';
  htmlArticle4 += '<section>';
  htmlArticle4 += '<section>';
  htmlArticle4 += '<h3>' + data4.locations[4].title + '</h3>';
  htmlArticle4 += '<p>' + data4.locations[4].text + '</p>';
  htmlArticle4 +=
    '<p>' + data4.locations[4].city + ' | ' + data4.locations[4].state + '</p>';
  htmlArticle4 += '</section>';
  htmlArticle4 += '</section>';

  var articleBlog = document.getElementById('aLevel4');
  articleBlog.innerHTML = htmlArticle4;
}
myBlog.send();
