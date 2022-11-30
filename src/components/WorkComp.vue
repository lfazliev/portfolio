<template>
  <div class="work">
    <h1>Work Experience</h1>
    <img src="@/assets/portfolio/gif/main.gif" alt="gif">
    <button>Take a look at projects</button>
  </div>
  <div class="content">
    <div id="bon_she">
      <div class="text">
        <h3>What Is It?</h3>
        <h5>Korean Cosmetics Brand</h5>
        <h3>What is The Goal?</h3>
        <h5>Increase the Brand Awareness in the Russian Market</h5>
        <div class="bon_she_border">
          <h2>RESULT</h2>
          <ul class="first_list">
            <li>+1000 followers without using paid methods of promotion</li>
            <li>acquaintance with the product of more than 10,000 people</li>
            <li>monthly sales were increased by 5 times</li>
          </ul>
        </div>
        <h3>My tasks:</h3>
        <ul class="second_list">
          <li>Instagram (Content Creating)</li>
          <li>Connection With Potential Customers</li>
          <li>Production Of Filming</li>
          <li>Copy-writing</li>
          <li>Working With Marketplaces</li>
        </ul>
      </div>
      <div class="my_carousel">
        <Carousel :autoplay="2000" :wrap-around="true">
          <Slide></Slide>
        </Carousel>
      </div>
      <div class="logo">
        <img src="@/assets/portfolio/bonshes/bonshe.png" alt="logo">
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel,Slide } from "vue3-carousel";
import 'vue3-carousel/dist/carousel.css'
export default{
  name: "WorkComp",
  components:{
    Carousel,
    Slide
  }
}
</script>

<style lang="scss">
  .work {
    height: 800px;
    position: relative;

    h1 {
      color: white;
      margin: 0;
      text-align: center;
      width: 100%;
      position: relative;
      top: 50px;
      font-size: 45px;
      text-transform: uppercase;
    }

    img {
      position: absolute;
      top: 0;
      z-index: -1;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    button {
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      padding: 20px;
      border: none;
      border-radius: 30px;
      background-color: antiquewhite;
      font-size: 22px;

      &:hover {
        background-color: black;
        color: white;
        cursor: pointer;
      }
    }
  }

  #bon_she {
    height: 800px;
    background-color: #1c1c1cff;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    .text{
      align-self: center;
      color: white;
      text-align: center;
      font-family: $mainFont;
      width: 50%;
      h3, h5, h2{
        font-weight: 500;
        margin:  0 auto 20px;
      }
      .bon_she_border{
        padding: 10px 30px;
        border: 1px solid white;
        border-radius: 100px;
        .first_list{
          list-style-type: '\2713\ ';
        }
      }
      .second_list{
        list-style: none;
        padding: 0;
        columns:2;
        li{
          display: inline-block;
          padding: 10px;
        }
      }
    }
    .my_carousel{
      width: 20%;
    }
    .logo{
      position: absolute;
      top: -35px;
      left: -50px;
      width: 300px;
      img{
        width: 100%;
      }
    }
  }
</style>