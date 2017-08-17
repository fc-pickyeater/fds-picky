import firebase from 'firebase';

export default {
  namespaced: true,
  state: {
    currentUser: null,
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
  },
  mutations: {
    loginWithEmailAndPassword(state, obj) {
      state.currentUser = obj;
    },
    logout(state, obj) {
      state.currentUser = obj;
    },
    checkSession(state, obj) {
      state.currentUser = obj;
    },
    injectUser(state, obj) {
      state.currentUser = obj;
    },
    loginWithGoogleAccount(state, obj) {
      state.currentUser = obj;
    },
  },
  actions: {
    loginWithEmailAndPassword({ commit }, obj) {
      firebase.auth().signInWithEmailAndPassword(obj.email, obj.password).then((user) => {
        commit('loginWithEmailAndPassword', user);
      }, (err) => {
        console.log('error:', err.message);
      });
    },
    logout({ commit }) {
      firebase.auth().signOut().then((user) => {
        commit('logout', user);
      }, (err) => {
        console.log('error:', err.message);
      });
    },
    checkSession({ commit }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          commit('checkSession', user);
        } else {
          commit('checkSession', null);
        }
      });
    },
    injectUser({ commit }, user) {
      commit('injectUser', user);
    },
    loginWithGoogleAccount({ commit }) {
      const provider = firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      firebase.auth().signInWithPopup(provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        commit('loginWithGoogleAccount', result.user);
      }).catch((err) => {
        console.log('error:', err.message);
      });
    },
  },
};
