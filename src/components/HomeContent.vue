<template>
  <b-container>
    <h3 class="mt-4 mb-3">Recent Posts</h3>
    <b-row class="custom-card">
      <b-col lg="4" v-for="product in allProducts" :key="product.id">
        <div>
          <b-card
            :img-src="product.urlToImage"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-4"
          >
            <h4>{{ product.title }}</h4>
            <b-card-text>
              {{ product.description }}
            </b-card-text>

            <b-button :href="product.url" target="blank" variant="primary"
              >Read More</b-button
            >
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "HomeContent",
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
.custom-card img.card-img-top {
  max-height: 300px;
  object-fit: cover;
  min-height: 300px;
}
.custom-card h4 {
  font-size: 20px;
}
.custom-card .card-text {
  font-size: 14px;
}
</style>
