import Vue from "vue";
import Vuex from "vuex";
import Products from "./modules/products/index";
import Login from "./modules/login/index";
import Posts from "./modules/posts/index";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Products,
    Login,
    Posts
  },
});
