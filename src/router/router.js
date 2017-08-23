import Vue from 'vue';
import Router from 'vue-router';

import Header from '@/components/header/Header';
import MyPage from '@/components/user/MyPage';
import Login from '@/components/auth/Login';
import Join from '@/components/auth/Join';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Header,
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: Login,
        header: Header,
      },
    },
    {
      path: '/join',
      name: 'join',
      components: {
        default: Join,
        header: Header,
      },
    },
    {
      path: '/mypage',
      name: 'mypage',
      components: {
        default: MyPage,
        header: Header,
      },
    },
  ],
});
