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
          <b-col cols="6">
            <!-- <div class="form-group">
              <label>Enter URL</label>
              <input
                type="text"
                v-model="path"
                class="form-control"
                placeholder="Enter URL"
              />
            </div> -->
            <div class="form-group">
              <label for="exampleFormControlFile1">Upload Image</label><br />
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                required
              />
            </div>
          </b-col>
          <!-- <b-col cols="6">
          
  <h2>File Upload</h2>
    <input type="file" @change="uploadFile" ref="file">
    <button @click="submitFile">Upload!</button>
          </b-col> -->
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
      console.log("first");
    },

    uploadFile() {
      console.log("uploadFile called");
      console.log(this.$refs.file);
      console.log(this.$refs.file.files[0]);
      this.Images = this.$refs.file.files[0];
    },
    submitFile() {
      const formData = new FormData();
      formData.append("file", this.Images);
      const urlToImage = { "Content-Type": "multipart/form-data" };
      axios
        .post("http://localhost:3000/products", formData, { urlToImage })
        .then((res) => {
          console.log(res);
          console.log(res.data.files);
          res.data.files; // binary representation of the file
          res.status; // HTTP status
        });
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