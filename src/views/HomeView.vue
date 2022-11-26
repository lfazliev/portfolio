<template>
  <div class="home">
    <GreetingComp/>
    <OfferComp/>
  </div>
</template>

<script>
import GreetingComp from "@/components/GreetingComp";
import OfferComp from "@/components/OfferComp";
export default {
  name: 'HomeView',
  components: {
    GreetingComp,
    OfferComp
  }
}
</script>
