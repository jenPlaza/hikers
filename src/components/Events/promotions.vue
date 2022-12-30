<template>
  <div id="promos">
    <!-- OFFERINGS -->
    <section id="misc">
      <!-- VOUCHERS-->
      <article>
        <img src="../../assets/images/gift.png" alt="Alternate Text" />
        <header>
          <h5>Gift vouchers</h5>
        </header>
        <body>
          <p>
            Enim sed faucibus turpis in eu mi bibendum neque egestas. Tempor
            commodo ullamcorper a lacus vestibulum sed arcu non odio. Nunc sed
            velit dignissim sodales ut eu sem integer. Enim sed faucibus turpis
            in eu mi bibendum neque egestas. Tempor commodo ullamcorper a lacus
            vestibulum sed arcu non odio. Nunc sed velit dignissim sodales ut eu
            sem integer.
          </p>
        </body>
        <footer class="vouchers">
          <button type="submit" class="btnBuy" onclick="location.href = '#';">
            Buy a Gift Voucher
          </button>
        </footer>
      </article>
      <!-- SPECIAL OFFERS -->
      <article>
        <img src="../../assets/images/tag-3.png" alt="Alternate Text" />
        <header>
          <h5>Special offers</h5>
        </header>
        <body>
          <p>
            Enim sed faucibus turpis in eu mi bibendum neque egestas. Tempor
            commodo ullamcorper a lacus vestibulum sed arcu non odio. Nunc sed
            velit dignissim sodales ut eu sem integer. Enim sed faucibus turpis
            in eu mi bibendum neque egestas. Tempor commodo ullamcorper a lacus
            vestibulum sed arcu non odio. Nunc sed velit dignissim sodales ut eu
            sem integer.
          </p>
          <p style="text-align: center; margin-left: -8%">
            Subscribe to our newsletter
          </p>
          <br />
        </body>
        <footer class="newsletter">
          <button type="submit" class="btnL" onclick="location.href = '#';">
            Enter your email here<img
              src="../../assets/images/envelope.png"
              alt="Alternate Text"
            />
          </button>
        </footer>
      </article>
      <!-- MOBILE APP -->
      <article>
        <img src="../../assets/images/iphone.png" alt="Alternate Text" />
        <header>
          <h5>Mobile app</h5>
        </header>
        <body>
          <p>
            Enim sed faucibus turpis in eu mi bibendum neque egestas. Tempor
            commodo ullamcorper a lacus vestibulum sed arcu non odio. Nunc sed
            velit dignissim sodales ut eu sem integer. #Enim sed faucibus turpis
            in eu mi bibendum neque egestas. Tempor commodo ullamcorper a lacus
            vestibulum sed arcu non odio. Nunc sed velit dignissim sodales ut eu
            sem integer.
          </p>
        </body>
        <footer class="btns">
          <button type="submit" class="appStore" onclick="location.href = '#';">
            <img src="../../assets/images/appstore.png" alt="Alternate Text" />
          </button>
          <button
            type="submit"
            class="googlePlay"
            onclick="location.href = '#';"
          >
            <img
              src="../../assets/images/googleplay.png"
              alt="Alternate Text"
            />
          </button>
        </footer>
      </article>
    </section>
    <EFilter class="efilter" />
  </div>
</template>

<script>
import EFilter from './event_filter';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'promotions',
  components: {
    EFilter,
  },
};
</script>
<style>
#promos {
  align-items: center;
  display: flex;
  flex-direction: column;
}
#misc,
.efilter {
  display: flex;
  flex-direction: column;
}
#misc article {
  position: relative;
  float: left;
  height: auto;
  width: 74vw;
  padding: 0 15px 10% 15px;
}
#misc article header {
  margin: -6% 0px 5% 8%;
}
#misc article body {
  margin: -3% 0px 0% 8%;
  width: 65vw;
  height: auto;
}
#misc article footer {
  height: auto;
  color: #cccccc;
}
#misc article h5 {
  margin: 0;
}
#misc article p,
#events article section p {
  position: relative;
  color: #8a7300;
  margin-bottom: -3px;
}

/* Gift, Tag, App icons*/
#misc
  article
  img:not(#misc .btnL img):not(#misc .appStore img):not(#misc .googlePlay img) {
  position: relative;
  height: 20px;
  width: 20px;
  margin: 0% -10px;
}
#misc .newsletter p strong {
  position: relative;
  text-align: left;
  margin-left: -25px;
}

/* Buttons ------start*/
#misc .btns {
  display: flex;
  justify-content: space-around;
  margin: 8% 0;
  height: 50px;
}
#misc .btnL,
#misc .btnBuy,
#misc .appStore,
#misc .googlePlay {
  position: relative;
  border-color: #292828;
  background-color: transparent;
  height: 60px;
  width: 75vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
#misc .btnL,
#misc .btnBuy {
  color: #cccccc;
  /* padding: 10px 23px;
  margin-left: 10px; */
  white-space: nowrap;
}
#misc .btnBuy {
  margin-top: 5%;
}
#misc .appStore,
#misc .googlePlay {
  display: flex;
  align-items: center;
  justify-content: center;
}
#misc .btnL img {
  position: relative;
  width: 35px;
  height: 30px;
  float: right;
}
#misc .appStore img,
#misc .googlePlay img {
  width: auto;
  height: 135px;
}
/* ------ Buttons end ------*/
/*subscribe paragraph tag*/
#misc .newsletter p {
  position: relative;
  text-align: left;
  padding-left: 25px;
}

h3 {
  color: #f0ae35;
}
/* BREAKPOINTS*
  / *====================================== */

@media (min-width: 768px) {
  #misc article {
    width: 80vw;
    margin: 0 0 3% 0;
  }
  #misc article img {
    height: 50px;
    width: 50px;
  }
  #misc article body {
    width: 75vw;
  }

  #misc .btns {
    justify-content: space-evenly;
    height: 0px;
  }
  #misc .btnBuy,
  #misc .btnL {
    padding: 10px 50px;
  }
  #misc .btnL img {
    margin-top: -4px;
    padding: 0px 20px;
  }
  #misc .appStore,
  #misc .googlePlay {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 38vw;
    height: 60px;
  }
}

@media screen and (min-width: 992px) {
  #misc {
    margin: 18% 0 3% 0;
  }
  #promos {
    margin-top: -12%;
  }
  #promos section:last-of-type {
    display: flex;
    align-items: start;
    flex-direction: row;
    width: 87vw;
    margin: 0% 0 0 3%;
    height: 115px;
  }
  #misc article {
    margin: 0;
    padding: 0 15px 5% 15px;
  }
}
@media screen and (min-width: 1200px) {
  #misc {
    width: 90vw;
    height: 200px;
    margin: 0% 0 3% 0;
  }
  #misc article {
    width: 28vw;
  }
  #misc article img {
    height: 35px;
    width: 35px;
  }
  #promos {
    margin-top: -4%;
    width: 98vw;
  }
  #promos section:first-of-type {
    display: flex;
    flex-direction: row;
  }
  #promos section:last-of-type {
    width: 90vw;
    margin: 3% 0 3% 0%;
  }
  #misc article header {
    margin: -8% 0px 5% 15%;
  }
  #misc article body {
    width: 24vw;
    height: 8vh;
    margin-left: 43px;
  }
  #promos article footer {
    align-items: end;
    height: 02.3vh;
  }
  #misc .btns {
    height: 1vh;
    margin-top: 5em;
  }
  #misc .btnL {
    padding: 10px 45px;
  }
  #misc article {
    display: flex;
    flex-direction: column;
  }
  #misc .btnBuy,
  #misc .btnL {
    align-self: flex-start;
    margin-top: 2em;
  }
}
@media screen and (min-width: 1500px) {
  #promos {
    margin-top: 0%;
  }
  #misc {
    margin: 8% 0% -8% 0%;
  }
  #misc article body {
    margin-top: -4%;
  }
  #promos section:last-of-type {
    margin: 13% 0 3% 0%;
  }
  #misc article p,
  #events article section p {
    margin-bottom: 17px;
  }
}
@media screen and (min-width: 2000px) {
  #promos {
    margin-top: 3%;
  }
  #misc {
    margin: 5% 0% -8% 0%;
  }
  #misc article body {
    height: 2vh;
  }
}
</style>
