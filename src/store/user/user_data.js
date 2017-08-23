export default {
  state: {
    isLogined: false,
    userDetail: {
      email: '',
      nickname: '',
      content: '',
      img_profile: '',
    },
  },
  getters: {
    getIsLogined(state) {
      return state.isLogined;
    },
    getUserDetail(state) {
      return state.userDetail;
    },
  },
  mutations: {
    setIsLogined(state, payload) {
      state.isLogined = payload;
    },
    setUserDetail(state, payload) {
      if (payload.email) state.userDetail.email = payload.email;
      if (payload.nickname) state.userDetail.nickname = payload.nickname;
      if (payload.content) state.userDetail.content = payload.content;
      if (payload.img_profile) state.userDetail.img_profile = payload.img_profile;
    },
    resetUserDetail(state) {
      state.userDetail = {
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
    setUserDetail({ commit }) {
      const PCBDetail = JSON.parse(window.localStorage.getItem('PCBDetail'));
      if (PCBDetail) {
        commit('setUserDetail', {
          email: PCBDetail.email,
          nickname: PCBDetail.nickname,
          content: PCBDetail.content,
          img_profile: PCBDetail.img_profile,
        });
      }
    },
  },
};
