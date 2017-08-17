import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import axios from 'axios';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.prototype.$http = axios;

export default new Vuex.Store({
  // strict mode
  strict: process.env.NODE_ENV !== 'production',

  state: {
    user_create: 'http://pickycookbook.co.kr/member/create/',
    user_login: 'http://pickycookbook.co.kr/member/login/',

  },

  getters: {
    getUrlLogin(state) {
      return state.user_login;
    },
  },

  mutations: {
    goToHome() {
      this.$router.push({ path: '/' });
    },
  },

});

