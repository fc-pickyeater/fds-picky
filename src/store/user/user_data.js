export default {
  state: {
    isLogined: false,
    isUserEditMode: false,
    readBuffer: {
      email: '',
      nickname: '',
      content: '',
      img_profile: '',
    },
    /* writeBuffer: {
      email: '',
      nickname: '',
      password1: '',
      password2: '',
      content: '',
      img_profile: null,
    }, */
  },
  getters: {
    getIsLogined(state) {
      return state.isLogined;
    },
    getReadBuffer(state) {
      return state.readBuffer;
    },
    getIsUserEditMode(state) {
      return state.isUserEditMode;
    },
  },
  mutations: {
    setIsLogined(state, payload) {
      state.isLogined = payload;
    },
    toggleIsUserEditMode(state) {
      state.isUserEditMode = !state.isUserEditMode;
    },
    updateReadBuffer(state, payload) {
      if (payload.email) state.readBuffer.email = payload.email;
      if (payload.nickname) state.readBuffer.nickname = payload.nickname;
      if (payload.content) state.readBuffer.content = payload.content;
      if (payload.img_profile) state.readBuffer.img_profile = payload.img_profile;
    },
    resetReadBuffer(state) {
      state.readBuffer = {
        email: '',
        nickname: '',
        content: '',
        img_profile: '',
      };
    },
  },
  actions: {
    setIsLogined({ commit }) {
      if (window.localStorage.getItem('PCBAuth')) {
        commit('setIsLogined', true);
      } else {
        commit('setIsLogined', false);
      }
    },
    updateReadBuffer({ commit }) {
      const PCBDetail = JSON.parse(window.localStorage.getItem('PCBDetail'));
      if (PCBDetail) {
        commit('updateReadBuffer', {
          email: PCBDetail.email,
          nickname: PCBDetail.nickname,
          content: PCBDetail.content,
          img_profile: PCBDetail.img_profile,
        });
      } else {
        commit('updateReadBuffer', {
          email: '',
          nickname: '',
          content: '',
          img_profile: '',
        });
      }
    },
  },
};
