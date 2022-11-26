<template>
  <div class="home">
    <GreetingComp/>
  </div>
</template>

<script>
import GreetingComp from "@/components/GreetingComp";

export default {
  name: 'HomeView',
  components: {
    GreetingComp
  }
}
</script>
