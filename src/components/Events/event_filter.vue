<template>
  <!--FILTERS -->
  <section id="filter">
    <article>
      <h2>Tropical</h2>
      <a href="#">Rainforests</a>
      <a href="#">Dry Rainforests</a>
    </article>

    <article>
      <h2>Temperate</h2>
      <a href="#">Temperate</a>
      <a class="placeholder">placeholder</a>
    </article>

    <article>
      <h2>Boreal</h2>
      <a href="#">Boreal</a>
      <a class="placeholder">placeholder</a>
    </article>
  </section>
</template>

<script>
export default {
  name: 'event_filter',
};
</script>
<style>
h3 {
  color: #f0ae35;
}
#filter {
  width: 90%;
  padding: 0% 1% 5% 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#filter article {
  border: 5px solid #292828;
  height: auto;
  width: 79vw;
  float: left;
  margin: 3% 0%;
  padding: 2% 0% 10% 0%;
}
#filter article a {
  color: dimgrey;
  text-align: center;
  display: block;
}
#filter article .placeholder {
  color: transparent;
}
#filter article h2 {
  color: #cccccc;
  text-align: center;
  margin: 15px 0;
}
/* BREAKPOINTS*
  / *====================================== */
@media screen and (min-width: 768px) {
  #filter {
    width: 100%;
  }
  #filter article {
    border: 5px solid #292828;
    height: auto;
    width: 83vw;
  }
  #filter footer {
    height: 90vh;
  }
}
@media screen and (min-width: 992px) {
  #promos section:last-of-type {
    width: 95%;
    height: 152px;
    margin: auto;
  }
  #filter {
    padding: 0 1%;
  }
  #filter article {
    width: calc(100% / 3.2);
    margin: 0;
    padding: 0;
    height: 10vh;
    margin: 0% 0 3% 0;
  }
  #filter article:nth-child(1) {
    margin: 0;
    padding: 0;
  }
  #filter article:nth-child(2) {
    width: 39.5%;
    margin: 0 2%;
  }
}
@media screen and (min-width: 1200px) {
  #filter article {
    width: calc(100% / 3.1);
    float: left;
    height: 140px;
  }
}
</style>
