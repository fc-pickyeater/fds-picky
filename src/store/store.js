import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import userData from './user/user_data';

Vue.use(Vuex);
Vue.use(VueRouter);

export default new Vuex.Store({
  // strict mode
  modules: {
    userData,
  },
});

