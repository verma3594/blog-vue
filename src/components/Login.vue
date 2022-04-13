<template>
  <div class="login-container">
    <b-container>
      <form @submit="onLogin">
        <h4>Welcome to Blogs</h4>
        <p v-if="message" class="error">
          Your Email & Password are Invalid. Please correct it.
        </p>
        <div class="form-group">
          <label>Enter Email</label>
          <input
            type="email"
            class="form-control"
            v-model="Email"
            placeholder="Enter Email..."
            required
          />
        </div>
        <div class="form-group">
          <label>Enter Password</label>
          <input
            type="password"
            class="form-control"
            v-model="Password"
            placeholder="Enter Password..."
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">Signup</button>
        <p>
          Don't have an Account? <router-link to="/signup">Signup</router-link>
        </p>
      </form>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      Email: "",
      Password: "",
      message: false,
    };
  },
  methods: {
    async onLogin() {
      let result = await axios.get(
        `http://localhost:3000/users?Email=${this.Email}&Password=${this.Password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push("/Dashboard");
      } else {
        this.message = true;
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push("/Dashboard");
    }
  },
};
</script>

<style scoped>
.login-container {
  background: url("https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 90.6vh;
  overflow: hidden;
  text-align: center;
}
.login-container form {
  width: 500px;
  background: #fff;
  padding: 30px;
  margin: 100px auto;
  border-radius: 20px;
  text-align: left;
}
.login-container form h4 {
  text-align: center;
  font-weight: bold;
}
.login-container form label {
  font-weight: 600;
  margin: 5px 0;
}
.login-container form button {
  width: 100%;
  margin: 20px 0;
  background: #563d7c;
  border-radius: 0.25rem;
  border: none;
  height: 48px;
  font-size: 18px;
  font-weight: 600;
}
.login-container form p {
  text-align: center;
  font-weight: 600;
}
.login-container form p a {
  color: #563d7c;
  text-decoration: none;
}
.login-container form p a:hover {
  text-decoration: underline;
}
.login-container form .error {
  color: red;
  font-weight: 500;
  margin: 0;
  background: #ffdfdf;
  border: 1px solid red;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
}
</style>