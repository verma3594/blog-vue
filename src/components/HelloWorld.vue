<template>
  <div class="hello">
    <ul>
      <li v-for="product in allProducts" :key="product.id">
        {{product.title}} | {{product.price}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
  name: 'HelloWorld',
  methods:{
    ...mapActions(["getProducts"])
  },
    computed: mapGetters(["allProducts"]), 
    created(){
      this.getProducts();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
