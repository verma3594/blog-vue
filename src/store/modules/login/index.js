import axios from "axios";

const state = {
  users: [],
};
const getters = {
  allUsers: (state) => state.users,
};
const actions = {
  async allUsers({ commit }, user) {
    const response = await axios.post("http://localhost:3000/users", user);
    commit("newUser", response.data);
    if (response.status == 201) {
      localStorage.setItem("user-info", JSON.stringify(response.data));
    }
  },

  async allLogin({ commit }) {
    const result = await axios.get(
      `http://localhost:3000/users?Email=${this.Email}&Password=${this.Password}`
    );
    commit("newLogin", result.data);
    console.log(result);
    if (result.status == 200 && result.data.length > 0) {
      localStorage.setItem("user-info", JSON.stringify(result.data[0]));
      this.$router.push("/Dashboard");
    } else {
      this.message = true;
    }
  },
};

const mutations = {
  newUser: (state, user) => state.users.unshift(user),
  newLogin: (state, user) => (state.users = user),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
