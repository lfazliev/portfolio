<template>
  <div class="offer">
    <h1>What I can Offer you?</h1>
    <p>{{learnMore}}}</p>

    <div class="items">
      <div class="item">
        <!--Empty blocks for design purpose-->
        <div class="square"/><div class="rectangle"/>
        <img src="@/assets/portfolio/sketches/GIRL.png" alt="sketch">
        <h1>Consulting</h1>
        <button>Learn More</button>
      </div>
      <div class="item">
        <img src="@/assets/portfolio/sketches/NOTEBOOK.png" alt="sketch">
        <h1>Content Creation</h1>
        <button>Let's do it</button>
      </div>
      <div class="item">
        <div class="square"/><div class="rectangle"/>
        <img src="@/assets/portfolio/sketches/PHONE.png" alt="sketch">
        <h1>Copywriting</h1>
        <button>I'm in</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "OfferComp",
  data(){
    return{
      learnMore: "Learn more about how you, " +
          "your team, or organization can go from beginner to industry" +
          " influencer with real strategies and customized content"
    }
  }
}
</script>

<style lang="scss">
  .offer{
    h1{

    }
    p{

    }
    .items{

      .item{
        .square{

        }
        .rectangle{

        }
        img{

        }
        h1{

        }
        button{

        }
      }
    }
  }
</style>