<template>
  <div class="login-container signup-container">
    <b-container>
      <form @submit="onSubmit">
        <h4>Join our Blogs</h4>
        <p>Please fill the following details.</p>

        <div class="form-group">
          <label>Enter Full Name</label>
          <input
            type="text"
            class="form-control"
            v-model="FullName"
            placeholder="Enter Full Name..."
            required
          />
        </div>
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
        <div class="form-group">
          <label>Re-enter Password</label>
          <input
            type="password"
            v-model="RePassword"
            class="form-control"
            placeholder="Re-enter Password..."
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">Signup</button>

        <p>
          Already have an account? <router-link to="/login">Login</router-link>
        </p>
      </form>
    </b-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
      FullName: "",
      Email: "",
      Password: "",
      RePassword: "",
    };
  },
  methods: {
    ...mapActions(["allUsers"]),
    onSubmit() {
      this.allUsers({
        FullName: this.FullName,
        Email: this.Email,
        Password: this.Password,
        RePassword: this.RePassword,
      });
      this.$router.push("/dashboard");
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
.login-container.signup-container form {
  margin-top: 40px;
}
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
</style>