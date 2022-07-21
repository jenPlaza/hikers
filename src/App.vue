<!-- <template>
  <div id="app">
      <Header /> 
   <router-view></router-view>
        <Footer />
  </div>
</template> -->
<template>
<div id="app">
<div :style="cssProps" class="homePage">
    <nav>
      <span>
        <a href="index.html"
          ><img alt=" logo" class="logo" src="./assets/images/hikersGuide.png"
        /></a>
      </span>
      <div>
        <div>
          <router-link class="nav" to="/">Home</router-link>
      <router-link class="nav" to="/events">Events</router-link>
      <router-link class="nav" to="/blog">Blog</router-link>
        </div>
        <button onclick="function hi(){alert('Hi!')};hi()">
          Contact
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a>1-904-378-9087</a>
          <a
            href="mailto:jennyp.plaza%40gmail%2ecom?subject=Reference from JP_Portfolio/Hikers: "
          >
            Email
          </a>
        </div>
      </div>
    </nav>
  </div>
  <Footer />
</div>
</template>

<script>
// import Header from './components/header_menu';
import Footer from './components/footer';
import router from './router';

export default {
  name: 'App',
  components: { 
    // Header,
 Footer,
 }, 
  router, 
 data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/images/hiking3.png")})`,
      },
    };
  },
}
</script>

<style>
body{
    margin:0;
}
#app {
  width:100%;
      height:100%;
      margin:0;
      padding:0;
    background-image: url('./assets/images/pattern28.png');
    font: 1em 'Program OT Book', Georgia, serif;
}
   .body {
      font: 1em 'Program OT Book', Georgia, serif;
         overflow: hidden;
        height:100%;
        display: flex;
      flex-direction: column;
      align-items: center;
        padding:0;
    }
    .homePage {
  overflow: hidden;
  background: url("./assets/images/hiking3.png") no-repeat -594px -176px;
  height: 475px;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.3);
  white-space: nowrap;
  height:6vh;
}
nav .logo {
  width: 100%;
  margin: 3%;
  display: flex;
  align-self: end;
}
nav > span {
  width: 10vw;
  padding-right: 2%;
      margin-top: 3%;
}
nav > div {
  width: 90vw;
  display: flex;
  justify-content: end;
  white-space: nowrap;
  padding-right:1%;
}

nav > div .nav {
  width: 50vw;
  display: flex;
  justify-content: space-between;
}
nav > div .nav a {
  padding: 15px 5px;
  color: white;
  text-decoration: none;
}

nav > div .nav a:hover,
nav > div > button:hover,
.dropdown-content a:hover {
  background-color: #333333;
}

nav > div > button {
    padding: 0 1%;
  background-color: transparent;
  outline: none;
  border: none;
  color: white;
  font-size: 17px;
  font: 1em 'Program OT Book', Georgia, serif;
}

.dropdown-content {
  display: none;
  background-color: #333333;
  position: absolute;
  color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 55px;
  right: 0;
}
nav > div > button:hover + .dropdown-content {
  display: block;
}
.dropdown-content a {
  display: block;
  text-align: right;
  color: white;
  text-decoration: none;
}
.dropdown-content a:hover {
  background-color: #ffffff;
}

/* BREAKPOINTS*
  / *====================================== */
@media screen and (min-width: 768px) {
  .homePage {
    height: 400px;
  }
  nav > div .nav {
    width: 35vw;
  }
  nav > div .nav a {
    padding: 15px 19px;
  }
  nav .logo {
    width: 80%;
  }
  .homePage {
    background: url(./assets/images/hiking3.png) no-repeat -462px -243px;
  }
}

@media (min-width: 992px) {
nav {
  height:4vh;
}
  nav > div .nav a {
    padding: 15px 35px;
  }
  .homePage {
    background: url(./assets/images/hiking3.png) no-repeat -443px -245px;
  }
}

@media (min-width: 1200px) {
  nav > div .nav {
    width: 25vw;
  }
  nav > div .nav a {
    padding: 15px 29px;
  }
  nav .logo {
    width: 60%;
  }
}
@media (min-width: 1500px){
  .homePage {
    height: 650px;
      background: url(./assets/images/hiking3.png)no-repeat 0px 0px;
        background-size:100% 100%;
  }
nav > div .nav {
    width: 19vw;
}

}
@media (min-width: 2000px) {
nav > div .nav {
    width: 14vw;
}
}
</style>
