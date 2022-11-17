<template>
  <nav>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="logo">
        <small>shevchenko mariia</small>
    </div>
    <div class="socials">
      <font-awesome-icon icon="fa-brands fa-twitter" />
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
    border-bottom: 1px solid green;
  }
</style>
