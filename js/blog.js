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

function secALevel3(dataPosts3) {
  var htmlPosts3 = '<ul>';

  var imageArray2 = [
    require('@/assets/images/union-wood-sunrise.jpg'),
    require('@/assets/images/File_001.png'),
  ];

  //var htmlPosts3 = '';
  for (var i = 0; i < dataPosts3.locations.length - 3; i++) {
    htmlPosts3 += '<article>';
    htmlPosts3 += '<img src="' + imageArray2[i] + '"';
    htmlPosts3 += 'alt="' + dataPosts3.locations[i].title + '"/>';
    htmlPosts3 += '<div><h5>' + dataPosts3.locations[i].title + '</h5>';

    htmlPosts3 +=
      '<header><p><strong>' +
      dataPosts3.locations[i].text +
      '</strong></p></header>';

    /* htmlPosts3 +="<header><p><strong>" +dataPosts3.locations[i].text +"</strong></p></header>"; */

    htmlPosts3 += '<footer>';
    htmlPosts3 += '<p>by ' + dataPosts3.locations[i].author + '</p>';
    htmlPosts3 += '<p>' + dataPosts3.locations[i].postDate + '</p>';
    htmlPosts3 += '<p>' + dataPosts3.locations[i].moreLink + '</p>';
    htmlPosts3 += '</footer></div>';
    htmlPosts3 += '</article>';
  }

  htmlPosts3 += '</ul>';

  var articleBlog = document.getElementById('articlesPart3');
  articleBlog.innerHTML = htmlPosts3;
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
