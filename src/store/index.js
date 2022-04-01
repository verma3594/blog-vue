import Vue from 'vue'
import Vuex from 'vuex'
import Item from "./modules/Item/index"

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    Item
  }
})
