import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
    axios: axios,
  },
  // Mutations : 비동기 불가능 only 동기
  mutations: {
    increment(state, amount) {
      state.count += amount;
    },
  },
  // Action : 비동기 가능
  actions: {
    increment({ commit }, payload) {
      setTimeout(() => {
        commit("increment", payload.amount);
      }, 1000);
    },
  },
  modules: {},
});
