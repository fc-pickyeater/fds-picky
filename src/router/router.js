import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Header from '@/components/header/Header';

import RecipeBook from '@/components/recipebook/RecipeBook';
// import RecipeBookList from '@/components/recipebook/RecipeBookList';

import Recipe from '@/components/recipe/Recipe';


// Mypage
import MyPage from '@/components/personal/MyPage';

// Login
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
      props: true,
      components: {
        default: RecipeBook,
        header: Header,
      },
    },
    // {
    //   path: '/recipebook',
    //   name: 'RecipeBookList',
    //   components: {
    //     default: RecipeBookList,
    //     header: Header,
    //   },
    // },
    {
      path: '/recipe',
      name: 'Recipe',
      components: {
        default: Recipe,
        header: Header,
      },
    },
    {
      path: '/recipe_edit',
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
