import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);

export default new Vuex.Store({
  // strict mode
  strict: process.env.NODE_ENV !== 'production',

  modules: {
  },
  state: {
    user_create_api: 'http://pickycookbook.co.kr/api/member/create/',
    user_login_api: 'http://pickycookbook.co.kr/api/member/login/',
    user_fb_api: 'http://pickycookbook.co.kr/api/member/facebook-login/',

  },

  getters: {
    getUrlLogin(state) {
      return state.user_login_api;
    },
  },

  mutations: {
    goToHome() {
      this.$router.push({ path: '/' });
    },
  },

});

