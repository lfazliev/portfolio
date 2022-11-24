<template>
  <div class="work">
    <h1>Work Experience</h1>
    <img src="@/assets/portfolio/gif/main.gif" alt="gif">
    <button>Take a look at projects</button>
  </div>
  <div class="content">
    <div id="bon_she">
      <div>
        <h3>What Is It?</h3>
        <h5>Korean Cosmetics Brand</h5>
        <h3>What is The Goal?</h3>
        <h5>Increase the Brand Awareness in the Russian Market</h5>
        <div class="bon_she_border">
          <h2>Result</h2>
          <ul>
            <li>+1000 followers without using paid methods of promotion</li>
            <li>acquaintance with the product of more than 10,000 people</li>
            <li>monthly sales were increased by 5 times</li>
          </ul>
        </div>
        <h3>My tasks:</h3>
        <ul>
          <li>Instagram (Content Creating)</li>
          <li>Connection With Potential Customers</li>
          <li>Production Of Filming</li>
          <li>Copy-writing</li>
          <li>Working With Marketplaces</li>
        </ul>
      </div>
      <img src="@/assets/portfolio/bonshes/1.png" alt="phone" class="phone">
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComp"
}
</script>

<style lang="scss">
  .work{
    height: 800px;
    position: relative;
    h1{
      color: white;
      margin: 0;
      text-align: center;
      width: 100%;
      position: relative;
      top: 50px;
      font-size: 45px;
      text-transform: uppercase;
    }
    img{
      position: absolute;
      top: 0;
      z-index: -1;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
    button{
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
      padding: 20px;
      border: none;
      border-radius: 30px;
      background-color: antiquewhite;
      font-size: 22px;
      &:hover{
        background-color: black;
        color: white;
        cursor: pointer;
      }
    }
  }
  #bon_she{
    height: 800px;
    background-color: #1c1c1cff;
    h3{
      margin: 0 auto;
    }
  }
</style>