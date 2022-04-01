<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="light" variant="light">
        <b-container>
          <b-navbar-brand>
            <img alt="Vue logo" width="40" src="./assets/logo.png" />
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <div>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
          </div>
        </b-container>
      </b-navbar>
      <router-view />
    </div>
  </div>
</template>

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
  margin: 0 15px;
}
</style>

