import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Header from '@/components/header/Header';
import RecipeBook from '@/components/recipebook/RecipeBook';
import Recipe from '@/components/recipe/Recipe';
import MyPage from '@/components/personal/MyPage';
import Login from '@/components/valid/Login';
import Join from '@/components/valid/Join';
import Password from '@/components/valid/Password';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/recipebook',
      name: 'RecipeBook',
      components: {
        default: RecipeBook,
        header: Header,
      },
    },
    {
      path: '/recipe',
      name: 'Recipe',
      components: {
        default: Recipe,
        header: Header,
      },
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        default: Login,
        header: Header,
      },
    },
    {
      path: '/join',
      name: 'Join',
      components: {
        default: Join,
        header: Header,
      },
    },
    {
      path: '/password',
      name: 'Password',
      components: {
        default: Password,
        header: Header,
      },
    },
    {
      path: '/mypage',
      name: 'MyPage',
      components: {
        default: MyPage,
        header: Header,
      },
    },
  ],
});
