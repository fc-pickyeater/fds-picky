import Vue from 'vue';

// import VueResource from 'vue-resource';
import axios from 'axios';

// 컴포넌트 로드
import App from './App';
import router from './router/router';
import store from './store/store';

Vue.config.productionTip = false;

// Vue.use(VueResource);
Vue.prototype.$http = axios;

// Vue 루트 인스턴스 생성 및 설정
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App),
});
