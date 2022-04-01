<template>
  <div>
     <HeaderMain />
    <HomeContent />
    <FooterMain />
  </div>
</template>

<script>
import HeaderMain from "../components/Header.vue";
import FooterMain from  "../components/Footer.vue"
import HomeContent from "../components/HomeContent.vue"
export default {
  name: "HomeView",
  components: {
    HeaderMain,
    FooterMain,
    HomeContent
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
