<template>
  <div>
    <b-container>
      <h3 class="mt-4 mb-3">Top Posts</h3>
      <HomeContent />
    
    </b-container>
  </div>
</template>

<script>
import HomeContent from "../components/HomeContent.vue";
export default {
  name: "HomeView",
  components: {
    HomeContent,
  },
};
</script>
