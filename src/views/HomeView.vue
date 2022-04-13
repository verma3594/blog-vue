<template>
  <div>
    <b-container>
      <h3 class="mt-4 mb-3">Latest Posts</h3>

      <HomeContent />
    </b-container>
    <!-- welcome to home page  -->
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
