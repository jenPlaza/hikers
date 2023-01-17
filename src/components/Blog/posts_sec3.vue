<template>
  <section id="articlesPart3">
    <ul>
      <article>
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
      </article>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'posts_sec3',
};
</script>
<style>
#articlesPart3 {
  width: 100vw;
  height: auto;
  margin-bottom: 1%;
}

#articlesPart3 ul {
  padding: 0;
}

#articlesPart3 article {
  width: 100vw;
  height: 435px;
  margin-top: 10%;
  margin-bottom: 10%;
  margin-left: 1px;
  color: #ffd503;
  text-align: left;
  position: relative;
  overflow: hidden;
  /* overflow: hidden; */
}
#articlesPart3 article div {
  height: 190px;
  width: 75%;
  float: right;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 1% 1% 1% 3%;
  bottom: 15px;
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
  background: url('../../assets/images/white.jpg');
  height: 265px;
}
#articlesPart3 article:last-of-type div {
  background: url('../../assets/images/JG-Warm-Painterly-Background@2x.jpg');
}

/* #articlesPart3 article:first-of-type img, #articlesPart3 article:last-of-type img {
  width: 100vw;
  height: 415px;
} */

#articlesPart3 article:last-of-type div footer p {
  color: #bb9d06;
}
/* BREAKPOINTS*
/ *====================================== */
@media screen and (min-width: 768px) {
  #articlesPart3 article {
    margin-top: 5%;
    margin-bottom: 5%;
  }
  #articlesPart3 {
    margin-bottom: -10%;
  }
  #articlesPart3 article:first-of-type img {
    width: 100vw;
  }
  #articlesPart3 article:first-of-type div {
    height: 7vh;
    /*  margin-bottom: 2%;
}
#articlesPart3 article:first-of-type div {
    height: 130px; */
  }
  #articlesPart3 article:last-of-type div {
    height: 230px;
  }
  #articlesPart3 article div {
    width: 65%;
  }

  #articlesPart3 footer {
    bottom: 50px;
  }
}

@media screen and (min-width: 992px) {
  #articlesPart3 {
    height: 600px;
  }
  #articlesPart3 article {
    width: 100vw;
    float: left;
    height: 500px;
    /* height: 415px; */
    margin-left: 1px;
    padding: 8px;
  }
  #articlesPart3 article:first-of-type div {
    height: 100px;
    bottom: 10px;
    right: -27px;
    /*  bottom: 20px;
  right: -70px; */
  }
  #articlesPart3 article:last-of-type div {
    height: 129px;
    width: 85%;
    border-radius: 25px;
    right: -27px;
    bottom: 10px;

    /* right: -5px;
  bottom: 20px; */
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
    margin-left: -14px;
  }
  #articlesPart3 article {
    padding: 7px;
  }

  #articlesPart3 article:first-of-type div header {
    width: 30vw;
  }
  #articlesPart3 article:first-of-type div footer {
    width: 31vw;
  }
  #articlesPart3 article:last-of-type div header {
    width: 39vw;
  }
  #articlesPart3 article:last-of-type div footer p {
    color: black;
  }
}
@media screen and (min-width: 1500px) {
  #articlesPart3 {
    margin-top: 0%;
    height: 527px;
    margin-bottom: 122px;
  }
  /* #articlesPart3 article {
    width: 49vw;
  } */
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
    bottom: 133px;
    right: -292px;
    /* bottom: -73px;
  right: -24px; */
    border-radius: 25px;
  }
  #articlesPart3 article:last-of-type div {
    right: -77px;
    bottom: 116px;
  }
}
@media screen and (min-width: 2000px) {
  #articlesPart4 article:first-of-type {
    margin-bottom: 0%;
    width: 99vw;
  }

  /*    bottom: -73px;
}
}
@media screen and (min-width: 2000px) {
/* #articlesPart4 article:first-of-type {
  margin-bottom: 0%;
  width: 99vw;
} */
  #articlesPart3 {
    /* height:48vh;
  margin-bottom: 83px;*/
  }
}
</style>
