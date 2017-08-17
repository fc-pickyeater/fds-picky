import Vue from 'vue';
import Vuex from 'vuex';
import userData from './modules/user/userData';
import recipeData from './modules/recipe/recipeData';

Vue.use(Vuex);

export default new Vuex.Store({
  // strict mode
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    userData, recipeData,
  },
});

