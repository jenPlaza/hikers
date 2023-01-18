<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section>
    <div id="join">
      <h2>JOIN THE ADVENTURE</h2>
      <h3>Lorem Ipsum</h3>
      <p>Dessert gingerbread lollipop pudding cheesecake gummies.</p>
      <p>author | city, St</p>
    </div>
    <img class="climb" alt=" climbers" src="../../assets/images/climber.png" />
  </section>
</template>

<style>
#join {
  height: 350px;
  margin: 0% 0% -20% 0%;
  padding: 5%;
  background-color: #f0ae35;
  overflow: hidden;
  width: 99%;
}
#join div {
  padding: 0 5%;
}
#join h2 {
  padding: 4% 0% 0% 0%;
}
#join h3 {
  color: white;
}
.climb {
  position: relative;
  margin: -7% 0% 0% 0%;
  width: 100%;
  overflow: hidden;
}
#join section {
  padding: 4%;
  width: 85%;
  margin: 0% 3%;
  text-align: left;
  color: #eeeeee;
  z-index: 1;
}
/* BREAKPOINTS*
  / *====================================== */
@media screen and (min-width: 768px) {
  #join {
    height: 210px;
    margin: 0;
    width: 100vw;
  }

  #join p {
    position: absolute;
    z-index: 1;
  }
  .climb {
    margin: -25% 0% 0% 5%;
  }
  #join section {
    margin: -2% 2%;
    z-index: 1;
    position: relative;
  }
  #join h2 {
    padding: 0;
  }
}
@media screen and (min-width: 992px) {
  #join {
    margin: 2% 0% -20% 0%;
  }
  #join h2 {
    padding: 0%;
  }
  #join h3,
  #join p {
    padding: 0 0 0 2%;
  }

  .climb {
    width: 100%;
    margin: -5% 15%;
  }
  #join section {
    margin: 0% 0%;
    position: relative;
    z-index: 1;
  }
  #join div {
    width: 45vw;
  }
}
@media screen and (min-width: 1200px) {
  #join {
    height: 155px;
    margin: 1% 0% -20% 0%;
  }
  .climb {
    width: 90%;
    margin-top: -2%;
  }
  #join section {
    margin: 0% 0%;
    position: relative;
    z-index: 1;
  }
  #join h2 {
    margin-top: -2%;
  }
}
@media screen and (min-width: 1500px) {
  #join {
    margin: 1% 0% 7% 0%;
  }
  #join h2 {
    padding: 0%;
  }
  .climb {
    width: 75%;
    float: right;
    margin: -25% -3%;
  }
  #join section {
    margin: 0% 4%;
    position: relative;
    z-index: 1;
  }
}
@media screen and (min-width: 2000px) {
  #join {
    margin: 1% 0% 5% 0%;
  }
  .climb {
    width: 55%;
    float: right;
    margin-top: -19%;
  }
  #join section {
    margin: 0% 4%;
    position: relative;
    z-index: 1;
  }
}
</style>
