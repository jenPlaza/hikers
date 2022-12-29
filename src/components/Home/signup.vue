<template>
  <section id="sign">
  
    <p>
      The biggest advebture of your life is right aruond the corner.
      <br />
      <button class="button" onclick="openForm()">
        <strong> Sign up Now!</strong><img src="../../assets/images/arrow.png" alt="arrow" />
      </button>
    </p>

    <!--popop form-->
    <form id="mailingList">
      <label for="email"><b>Email</b></label>

      <input type="text" placeholder="Enter Email" name="email" />

      <button id="buttonS" type="submit" class="buttonS">Submit</button>
    </form>
 </section>
</template>

<script>
export default {
<<<<<<< HEAD
  name: "section",
};
</script>
<script>
=======
    // eslint-disable-next-line vue/multi-word-component-names
  name: "section",
};

>>>>>>> 4880d4685353d76121b3559c899b5cb5bc40fe35
/*        document.getElementById("buttonS").addEventListener('click', function () {
                        alert("Thank you for submitting your request, your email has been recieved.");

                        close();

                        //document.getElementById("mailingList").style.display = "none";
                    }); */
</script>
<style>
#sign p {
margin-top: -3.5%;
  background-color: #292828;
  padding: 8% 10px;
  width: 100vw;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
}
#sign .button {
display: flex;
    justify-content: center;
    align-items: center;
<<<<<<< HEAD
  background: url(/images/right.png) no-repeat;
=======
  /* background: url(/images/right.png) no-repeat; */
  background-color: transparent;
>>>>>>> 4880d4685353d76121b3559c899b5cb5bc40fe35
  border: none;
}
#sign .button>img{
    margin-left: 10px;
}

/* popop form  */
#mailingList {
  display: none;
}
#mailingList input,
select,
option {
  color: white;
}
/* BREAKPOINTS*
  / *====================================== */
@media screen and (min-width: 992px) {
   #sign p {
    margin-top: 2%;
    padding: 6% 0 3% 0;
  }
}

@media screen and (min-width: 1500px) {
  #sign p {
    margin-top: -8%;
  }
}
@media screen and (min-width: 2000px) {
  #sign p {
    margin-top: -6%;
    padding: 4% 0;
  }
}
</style>
