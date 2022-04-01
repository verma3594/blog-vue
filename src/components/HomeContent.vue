<template>
  <div>
    <b-container class="bv-example-row">
      <ul>
        <li v-for="item in allItems" :key="item.id">
            {{item.title}}
        </li>
      </ul>

      <h3 class="mt-5 mb-3">Recent Posts</h3>
      <!-- <b-row class="text-center">
        <b-col cols="4" v-for="data in posts" :key="data.id">
          <div>
            <b-card
              v-bind:title="data.title"
              v-bind:img-src="data.urlToImage"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-4"
            >
              <b-card-text>
                {{ data.description }}
              </b-card-text>

              <b-button :href="data.url" target="blank" variant="primary"
                >Read More</b-button
              >
            </b-card>
          </div>
        </b-col>
      </b-row> -->
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import postsJson from "../assets/posts.json";
export default {
  name: "HomeContent",
  // data() {
  //   return {
  //     posts: postsJson,
  //   };
  // },
  computed: mapGetters(["allItems"])
};
</script>
<style scoped>
</style>