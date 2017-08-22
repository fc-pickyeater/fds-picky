import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);

export default new Vuex.Store({
  // strict mode
  state: {
    isLogined: false,
    loginedEmail: '',
    loginedProfileImg: null,
  },
  getters: {
    getIsLogined(state) {
      return state.isLogined;
    },
    getLoginedEmail(state) {
      return state.loginedEmail;
    },
    getLoginedProfileImg(state) {
      return state.loginedProfileImg;
    },
  },
  mutations: {

  },
});

