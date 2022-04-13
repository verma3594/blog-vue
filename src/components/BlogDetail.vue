<template>
  <b-container>
    <div v-for="product in allProducts" :key="product.id">
      <p class="author">{{ product.content }}</p>
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BlogDetail",
  methods: {
    ...mapActions(["getProducts"]),
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
</style>
