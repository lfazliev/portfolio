<template>
  <div class="greeting">
      <div>
        <h4>Hi, I'm Masha</h4>
        <h1>Let's raise your profit via Social Media</h1>
        <button>
          See my projects
        </button>
      </div>
      <img src="@/assets/portfolio/photoProfile.png" alt="photoProfile">
  </div>
</template>

<script>
export default {
  name: "GreetingComp"
}
</script>

<style scoped lang="scss">
  .greeting{
    height: 600px;
    background-color: #eec2b3;
  }
  img{
    width: 300px;
  }
</style>