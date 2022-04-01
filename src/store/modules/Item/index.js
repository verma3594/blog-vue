// import state from "./state";
// import getters from "./getters";
// import action from "./action";
// import mutations from "./mutations";

// export default {
//   state,
//   getters,
//   action,
//   mutations,
//   namespaced: true,
// };
const state = {
  items: [
      {
          id:1,
          title:"name",
      },
      {
          id:2,
          title:"xyz",
      },
  ]
};

const getters = {
  allItems: state => state.items
};

const actions = {};
const mutations = {};

export default {
state,
getters,
actions,
mutations,
};
