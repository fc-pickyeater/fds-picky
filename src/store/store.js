import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export default new Vuex.Store({
  // strict mode
  strict: process.env.NODE_ENV !== 'production',

  state: {
    user_create_api: 'http://pickycookbook.co.kr/api/member/create/',
    user_login_api: 'http://pickycookbook.co.kr/api/member/login/',
    user_fb_api: 'http://pickycookbook.co.kr/api/member/facebook-login/',
    user_detail_api: 'http://pickycookbook.co.kr/api/member/detail/',
    user_update_api: 'http://pickycookbook.co.kr/api/member/update/',

    isLogIn: !!localStorage.getItem('login_token'),
    token: `Token  + ${localStorage.getItem('login_token')}`,
    userPk: localStorage.getItem('user_pk'),
  },
  mutations: {
    [LOGIN](state, payload) {
      state.isLogIn = true;
      state.userPk = payload.userpk;
    },
    [LOGOUT](state) { state.isLogIn = false; },
  },
  actions: {
    login({ commit }, payload) {
      localStorage.setItem('login_token', payload.token);
      localStorage.setItem('user_pk', payload.userpk);
      commit(LOGIN, payload);
    },
    logout({ commit }) {
      localStorage.removeItem('login_token');
      commit(LOGOUT);
    },
  },
  getters: {
    isLogIn: state => state.isLogIn,
    token: state => state.token,
    userPk: state => state.userPk,
  },
});

