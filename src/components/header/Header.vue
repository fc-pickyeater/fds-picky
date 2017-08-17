<template lang="pug">
  .home
    h1 head
    p 햄버거 메뉴
    ul.hamburger
      li
        router-link(to="/") home
      li 인기검색어: home으로 이동 후 인기검색어 리스트로 스크롤
      li 인기레시피: home으로 이동 후 인기레시피 리스트로 스크롤
      li(style="list-style:none") if logined then {
      ul
        li
          router-link(to="/mypage") mypage
        li
          router-link(to="/recipe_edit") 내recipe작성
        li 
          router-link(to="/recipebook") 최근 열람한 recipe book
        li
          router-link(to="/recipebook") 내가 작성한 recipe book
        li
          router-link(to="/recipebook") 북마크 한 recipe book
        li
          router-link(to="/recipebook") 댓글 단 recipe book
        li
          router-link(to="/recipebook") 점수 준 recipe book
      li(style="list-style:none") } |
    search-input
    p(v-show="isLogined")
      button(type="button" @click="logOut") 로그아웃 링크
      | |
      router-link(to="/mypage").link(aria-label="asdf") 마이페이지 링크
    p(v-show="!isLogined")
      router-link(to="/login").link(aria-label="asdf") 로그인 링크
      | |
      router-link(to="/join").link(aria-label="asdf") 회원가입 링크

    p {{getCurrentRouteName}}
</template>

<script>
import SearchInput from '@/components/header/SearchInput';
import firebase from 'firebase';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'head',
  components: {
    SearchInput,
  },
  data() {
    return {
    };
  },
  computed: {
    getCurrentRouteName() {
      return this.$route.name;
    },
    isLogined() {
      this.checkSession();
      return this.getCurrentUser;
    },
    ...mapGetters('userData', [
      'getCurrentUser',
    ]),
  },
  methods: {
    logOut() {
      this.logout();
    },
    ...mapActions('userData', [
      'checkSession', 'logout',
    ]),
  },
};
</script>

<style scoped lang="sass">
</style>
