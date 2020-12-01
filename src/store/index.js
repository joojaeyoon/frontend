import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    base_url: "http://localhost:8080/api",
    img_url: "http://localhost:8080/images",
    post: {},
    postDetail: {},
    axios: axios,
    accessToken: "",
    loggedIn:false,
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {},
});
