<template>
  <div class="about">
    <h1>Add blog</h1>

    <form @submit.prevent="onSubmit">
  <div class="form-group">
    <label >Enter Title</label>
    <input type="text" v-model="title" class="form-control"  placeholder="Enter Title">
  </div>
  <div class="form-group">
    <label >Enter Description</label>
    <input type="text" v-model="description" class="form-control"  placeholder="Enter Description">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AboutView",
  data(){
    return{
      title : "",
      description: "",
    };
  },
  methods:{
    ...mapActions(["addProducts"]),
    onSubmit(){
        this.addProducts({
            title: this.title,
            description : this.price
        });
    }
  } 
};
</script>

<style scoped>
</style>