<template>
  <main>
    <!-- Recent Posts -->
    <section id="posts">
      <header>
        <h2 id="id02">Recent Posts</h2>
      </header>

      <!-- <article>
        <img src="images/hikers1003.jpg" alt="Alternate Text" /> -->

      <ul>
        <article>
          <img src="../../assets/images/hikers1003.jpg" alt="Alternate Text" />

          <header>
            <h3>Lorem Ipsum</h3>
          </header>
          <p><strong>May 4</strong></p>
          <footer>
            <dl>
              <dt></dt>
              <dd><strong>by Jen Plaza</strong></dd>
              <dt></dt>
              <dd><strong>Sep 12, 2012</strong></dd>
              <dt></dt>
              <dd><strong>lollipop </strong></dd>
            </dl>
            <button>View More</button>
          </footer>

          <!-- </article> -->
        </article>
      </ul>
    </section>
  </main>
</template>
<script src="../../../js/index.js"></script>
<style>
main {
  height: auto;
  width: 100%;
  padding: 0em 0 1em 0;
}
#posts header h2 {
  margin-left: 0%;
  padding: 0% 0px 5px 3%;
}
#posts > ul {
  padding: 0;
  width: 100%;
}
#posts article {
  background-size: cover;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 300px;
  background-color: rgb(0, 0, 0, 0.15);
}
#posts article > img {
  width: 100%;
  height: 100%;
}
#posts > ul > li > article > section {
  text-align: center;
  margin-top: 6vh;
  height: 168px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
/*Home: view more buttons*/
.seeMore {
  background-color: rgba(169, 169, 169, 0.5);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: lemonchiffon;
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  width: 125px;
  height: 40px;
  margin-bottom: 1vh;
}
#posts footer > span {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.5);
}
/* BREAKPOINTS*
  / *====================================== */
@media (min-width: 768px) {
  #posts article {
    height: 450px;
  }
  .seeMore {
    margin-bottom: 0;
  }
}
@media screen and (min-width: 992px) {
  #posts > ul {
    width: 100%;
    columns: 2;
  }
  #posts header h2 {
    margin-left: 2%;
    padding: 1.5% 0px 5px 3%;
  }
  main {
    padding: 0em 0 0 0;
  }
}
@media screen and (min-width: 1200px) {
  #posts {
    width: 100%;
  }
  #posts > ul {
    margin-top: 7%;
    columns: 3;
  }
}
@media screen and (min-width: 1500px) {
  #posts > ul {
    grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
    grid-gap: 0.5rem;
  }
  #posts article {
    height: 400px;
  }
  #posts header h2 {
    padding-top: 35px;
  }
  .body {
    margin-top: 2%;
  }
}
@media screen and (min-width: 2000px) {
  #posts header h2 {
    margin-left: 0%;
    margin-bottom: 17px;
  }
  #posts > ul {
    margin-top: 47px;
  }
  #posts header h2 {
    padding-top: 50px;
  }
}
</style>
