<template>
  <!--Social Media Icons with links-->
  <footer id="foot">
    <section id="support">
      <div>
        <h4>CUSTOMER SUPPORT</h4>
        <p>Let us help you find what you are looking for</p>
        <br /><br /><br />
        <a href="#" target="_blank">HELP</a>
        <a href="#">FAQ</a>
        <a href="#">CONTACT</a>
        <br /><br />
      </div>
    </section>
    <section id="signUp">
      <div>
        <h4>SIGN ME UP</h4>
        <p>Join The Nation</p>
        <Form>
          <input
            class="srch"
            name="q"
            placeholder="Enter Email"
            type="search"
            size="36"
          />
          <input class="submit" type="submit" />
        </Form>
      </div>
    </section>
    <section id="followUs">
      <div>
        <h4>FOLLOW US</h4>
        <a href="https://www.facebook.com" target="_blank"
          ><img src="../assets/images/facebook.png" alt="Facebook"
        /></a>
        <a href="https://twitter.com" target="_blank"
          ><img src="../assets/images/twitter.png" alt="Twitter"
        /></a>
        <a href="https://www.youtube.com" target="_blank"
          ><img src="../assets/images/youtube.png" alt="YouTube"
        /></a>
        <a href="https://www.instagram.com" target="_blank"
          ><img src="../assets/images/instagram.png" alt="Instagram"
        /></a>
        <a href="../assets/images/HikersGuide.jpg" target="_blank"
          ><img src="../assets/images/sharethis-3-256.png" alt="Share"
        /></a>
        <h4>&copy;Hikers</h4>
      </div>
    </section>
  </footer>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'bottom',
};
</script>
<style>
/* //footer:not(footer.btns):not(#posts footer){ */
footer:not(footer.btns):not(#posts footer):not(#articlesPart1 footer):not(
    #articlesPart3 footer
  ) {
  text-align: center;
  color: #eeeeee;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2%;
}
footer h4 {
  font-weight: bolder;
  color: #eeeeee;
}

#support,
#signUp,
#followUs {
  border: 1px solid dimgrey;
  background-color: #292828;
  color: #eeeeee;
  /* margin-top: 3%; */
  text-align: center;
  width: 100vw;
}
#support a {
  text-decoration: none;
  padding: 0px 6% 0px 6%;
  margin-left: 3%;
  color: #eeeeee;
}
#signUp .srch {
  height: 36px;
  width: 95%;
  background-color: rgba(66, 66, 67, 0.2);
  border: none;
  color: #eeeeee;
  transition: transform 0.2s;
}
#signUp .srch:hover {
  transform: scale(1.1);
}
#signUp .submit {
  /* //height: 36px; */
  height: 60px;
  width: 75px;
  background-color: transparent;
  border: none;
  color: #eeeeee;
}

#followUs img {
  height: 30px;
  width: 30px;
  padding: 1% 3% 0% 3%;
  margin-top: 4%;
}

/* BREAKPOINTS*
  / *====================================== */
@media screen and (min-width: 768px) {
  #support,
  #signUp,
  #followUs {
    width: 96vw;
  }

  /* //}
  //@media (min-width: 992px) {
  //footer:not(footer.btns):not(#posts footer){ */
}
@media (min-width: 992px) {
  footer:not(footer.btns):not(#posts footer):not(#articlesPart1 footer):not(
      #articlesPart3 footer
    ) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1%;
  }
  #support,
  #signUp,
  #followUs {
    display: inline-block;
    margin-top: 1%;
    width: 33.33vw;
    height: 225px;
  }
}

@media (min-width: 1500px) {
  #support,
  #signUp,
  #followUs {
    height: 265px;
  }
}
</style>
