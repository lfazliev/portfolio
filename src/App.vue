<script></script>
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
    <div class="socials fullsc">
      <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest" /></a>
      <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
      <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
    </div>
    <div class=menubtn @click="(polmenu = !polmenu); rotate($event.target)" id=menubtn></div>
    <div class=mobmenu v-if='polmenu == 1'>
      <ul>
        <li>
          <router-link to="/work">Work</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <div class="socials">
          <a href="#"><font-awesome-icon icon="fa-brands fa-pinterest" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
          <a href="#"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
        </div>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      polmenu: false,
    }
  },
  methods: {
    rotate(e) {
      if (this.polmenu == false) {
        e.classList.remove("rotate");
      }
      else {
        e.classList.add("rotate");
      }
    }
  }
}

</script>

<style lang="scss">
body {
  margin: 0;
  overflow-x: hidden;
}

.rotate {
  transform: rotate(90deg);
  transition: 300ms;
}

.menubtn {
  display: none;
  background-image: url(./assets/menu-svgrepo-com.svg);
  width: 20px;
  height: 20px;
  transition: 300ms;
}

ul {
  list-style: none;
  padding: 5px;

  span {
    color: black
  }

  li {
    margin: 5px;
    padding: 10px;
    border: 1px solid $white-color;
    border-radius: 5px;
  }

  li:hover {
    cursor: pointer;
    filter: brightness(40%)
  }

  ul:hover {
    cursor: pointer;
  }
}

@keyframes anim {
  from {
    right: -40%
  }

  to {
    right: 0;
  }

}

.mobmenu {
  animation: anim 500ms;
  background-color: #fde8e1;
  position: absolute;
  right: 0px;
  width: 40%;
  top: 51px;
  z-index: 1;
}

nav {
  background-color: #fde8e1;
  height: 50px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: $darkgreen;
}

.links>*,
router-link {
  font-size: 15px;
  padding: 10px;
  font-family: $mainFont;
  text-decoration: none;
  color: $darkgreen;
  text-transform: uppercase;

  &:hover {
    color: white;
  }
}

.logo {
  &>* {
    color: $darkgreen;
    text-decoration: none;

    &:hover {
      color: white;
    }
  }

  small {
    letter-spacing: 10px;
  }
}

.socials>a {
  color: $darkgreen;
  margin: 0 10px;
  font-size: 17px;
}

@media screen and (max-width:550px) {
  .menubtn {
    display: inline
  }

  .fullsc,
  .links {
    display: none
  }

  nav {
    justify-content: space-around
  }
}

;
</style>
