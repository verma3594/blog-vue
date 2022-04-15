<template>
  <b-container>
    <b-row class="custom-card">
      <b-col lg="4" v-for="product in allProducts" :key="product.id">
        <div>
          <b-card
            :img-src="
              product.urlToImage
                ? product.urlToImage
                : 'https://www.messagetech.com/wp-content/themes/ml_mti/images/no-image.jpg'
            "
            img-alt="Image"
            img-top
            tag="article"
            class="mb-4"
          >
            <p class="author">{{ product.author }}</p>

            <h4>{{ product.title }}</h4>
            <b-card-text v-html="product.description"> </b-card-text>

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
  mounted() {
    let user = localStorage.getItem("user-info");
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
.author {
  color: #777474;
  font-size: 12px;
  margin-bottom: 10px;
}
</style>
