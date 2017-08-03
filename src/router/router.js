import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Head from '@/components/Head';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        header: Head,
      },
    },
  ],
});
