export default {
  state: {
    myRecipeList: {},
  },
  getters: {
    getMyRecipeList(state) {
      return state.myRecipeList;
    },
  },
  mutations: {
    updateMyRecipeList(state, payload) {
      state.myRecipeList = Object.assign({}, payload);
    },
  },
  actions: {
    updateMyRecipeList({ commit }) {
      window.localStorage.getItem('PCBAuth');
      commit('updateMyRecipeList');
    },
  },
};
