import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../components/SignUp.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
