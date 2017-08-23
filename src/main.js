import Vue from 'vue';

import axiosInstance from './axios_instance';

// 컴포넌트 로드
import App from './App';
import router from './router/router';
import store from './store/store';

Vue.config.productionTip = false;

Vue.prototype.$http = axiosInstance;

// Vue 루트 인스턴스 생성 및 설정
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  store.dispatch('setIsLogined');
  store.dispatch('setUserDetail');
  next();
});
router.afterEach((to, from) => {
  store.dispatch('setCurrentRoutePath', router.currentRoute.path);
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  render: h => h(App),
});
