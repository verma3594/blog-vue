<template>
  <div class="blog">
    <b-container>
      <div class="d-flex justify-content-between align-items-center">
        <h4 class="mt-4 mb-3">
          Hello <b>{{ name }} </b>, Welcome to MY BLOG
        </h4>
        <div>
          <a class="logout-btn" @click="addBlog">Add New Blog</a>
          <a href=" " class="logout-btn" @click="logout">Logout</a>
        </div>
      </div>

      <form @submit="onSubmit" v-show="form">
        <h5>Please fill the following details to post a new blog</h5>
        <b-row>
          <b-col cols="6">
            <div class="form-group">
              <label>Enter Author</label>
              <input
                type="text"
                v-model="author"
                class="form-control"
                placeholder="Enter Author"
                required
              />
            </div>
          </b-col>
          <b-col cols="6">
            <div class="form-group">
              <label>Enter Title</label>
              <input
                type="text"
                v-model="title"
                class="form-control"
                placeholder="Enter Title"
                required
              />
            </div>
          </b-col>
          <b-col cols="12">
            <div class="form-group">
              <label>Enter Description</label>
              <textarea
                class="form-control"
                v-model="description"
                rows="5"
                required
              ></textarea>
            </div>
          </b-col>
       
        </b-row>

        <button type="submit" class="btn btn-primary">Post Blog</button>
      </form>

      <HomeContent />
    </b-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import HomeContent from "../components/HomeContent.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      author: "",
      title: "",
      description: "",
      path: "",
      name: "",
      form: false,
    };
  },
  components: {
    HomeContent,
  },
  methods: {
    ...mapActions(["addProducts"]),
    onSubmit() {
      this.addProducts({
        author: this.author,
        title: this.title,
        description: this.description,
        path: this.path,
      });
      this.form = false;
    },
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
    addBlog() {
      this.form = true;
    },
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).FullName;
  },
};
</script>

<style scoped>
.blog form {
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
  padding: 30px;
  background: #271c38;
  color: #fff;
  border-radius: 8px;
  margin: 10px 0 30px 0;
}
.blog form .btn {
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 10px 35px;
  margin-top: 10px;
}
.form-group {
  margin-bottom: 10px;
}
.form-group label {
  margin-bottom: 5px;
  font-weight: 600;
}
.logout-btn {
  background: #563d7c;
  color: #fff;
  padding: 10px 15px;
  border-radius: 8px;
  text-decoration: none;
  margin-left: 15px;
  cursor: pointer;
}
</style>