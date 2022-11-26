<template>
  <nav>
    <div class="links">
      <router-link to="/work">Work</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="logo">
        <router-link to="/"><small>shevchenko mariia</small></router-link>
    </div>
    <div class="socials">
      <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest" /></a>
      <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
      <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
    </div>
  </nav>
  <router-view/>
  <FooterComp/>
</template>

<script>
import FooterComp from "@/components/FooterComp";

export default {
  name: "App",
  components:{
    FooterComp
  }
}
</script>

<style lang="scss">
  body{
    margin: 0;
  }
  nav{
    background-color: #fde8e1;
    height: 50px;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items:center;
    color: $darkgreen;
  }
  .links > *{
    font-size: 15px;
    padding: 10px;
    font-family: $mainFont;
    text-decoration: none;
    color: $darkgreen;
    text-transform: uppercase;
    &:hover{
      color: white;
    }
  }
  .logo {
    & > * {
      color: $darkgreen;
      text-decoration: none;
      &:hover{
        color:white;
      }
    }
    small{
      letter-spacing: 10px;
    }
  }

  .socials > a{
    color: $darkgreen;
    margin: 0 10px;
    font-size: 17px;
  }

</style>
