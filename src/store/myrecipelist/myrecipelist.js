export default {
  state: {
    myRecipeList: [],
    MRIcursor: 0,
  },
  getters: {
    getMyRecipeList(state) {
      return state.myRecipeList;
    },
    getMRIcursor(state) {
      return state.MRIcursor;
    },
  },
  mutations: {
    initMyRecipeList(state, payload) {
      state.myRecipeList = payload;
    },
    moveCursorToNext(state) {
      state.MRIcursor += 1;
    },
    moveCursorToPrev(state) {
      state.MRIcursor -= 1;
    },
    moveCursorToN(state, payload) {
      state.MRIcursor = payload;
    },
  },
  actions: {
  },
};
