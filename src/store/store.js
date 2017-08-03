import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // strict mode
  strict: process.env.NODE_ENV !== 'production',
});
