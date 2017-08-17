import Vue from 'vue';
import resrc from 'vue-resource';
import firebase from 'firebase';
import { mapActions } from 'vuex';
import FirebaseConfig from './components/auth/firebaseConfig';
import App from './App';
import router from './router/router';
import store from './store/store';

Vue.config.productionTip = false;

Vue.use(resrc);
Vue.http.options.root = 'http://pickycookbook.co.kr';

firebase.initializeApp(FirebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  /* eslint-disable no-new */
  new Vue({
    created() {
      this.injectUser(user);
    },
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store,
    render: h => h(App),
    methods: {
      ...mapActions('userData', [
        'injectUser',
      ]),
    },
  });
});

/* firebase.auth().onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router,
      store,
      created() {
        this.setCurrentUser(user);
      },
      methods: {
        ...mapMutations('userData', [
          'setCurrentUser',
        ]),
      },
    });
  }
});
 */
