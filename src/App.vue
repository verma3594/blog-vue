<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-container>
          <b-navbar-brand>
            <router-link to="/">
              <img alt="Vue logo" width="40" src="./assets/logo.png"
            /></router-link>
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <div>
            <router-link to="/">Home</router-link>
            <router-link to="/">About</router-link>
            <router-link to="/">Contact us</router-link>
            <span v-show="logged">
              <router-link class="login" to="/login">Login </router-link>
              <router-link to="/signup">Signup </router-link>
            </span>
            <!-- <a href=" " @click="logout">Logout</a> -->
          </div>
        </b-container>
      </b-navbar>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      logged: true,
    };
  },

  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");

      let user = localStorage.getItem("user-info");
      if (user) {
        this.logged = false;
      }
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #563d7c !important;
}
.navbar-light .navbar-brand {
  color: #fff;
}
.navbar a {
  color: #fff;
  text-decoration: none;
  margin: 0 20px;
  font-size: 16px;
}
.login {
  border: 1px solid #fff;
  padding: 10px 15px;
  border-radius: 8px;
  margin-left: 50px !important;
}
</style>

