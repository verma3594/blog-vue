import axios from "axios";

const state = {
  posts: [],
};
const getters = {
  allposts: (state) => state.posts,
};
const actions = {
  async getposts({ commit }) {
    const response = await axios.get("http://localhost:3000/users");
    commit("setposts", response.data);
  },
  async addposts({ commit }, product) {
    const response = await axios.post(
      "http://localhost:3000/users",
      product
    );
    commit("newProduct", response.data);
  },
};

const mutations = {
  setposts: (state, posts) => (state.posts = posts),
  newProduct: (state, product) => state.posts.unshift(product),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
