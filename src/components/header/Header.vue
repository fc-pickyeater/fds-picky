<template lang="pug">
<<<<<<< HEAD
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
=======
  header.header(role="banner")
    .container
      .grid
        .col.col-d-2.col-d-push-1.col-t-2.col-t-push-3.col-m-2.col-m-push-1
          h1.small-logo
            a(href="/" title="pickycookbok" aria-label="pickcookbook")
              img(src="../../assets/header/small_logo.png" alt="small_logo")
        .col.col-d-1.col-d-pull-2.col-t-1.col-t-pull-2.col-m-1.col-m-pull-2.mt-1.zindex
          .hamburger-btn(role="menu-button")
            button.hamburger-menu(href="#menu" @click="hamburgerToggle" role="menu")              
              span.line(aria-label="menu")
          transition(name="slide")
            nav.gnb(v-show="hamburgerVisible" role="navigation")
              .hamburger-close-btn(role="menu-button")
                button.hamburger-close(type="button" @click="hamburgerToggle" role="close")
                  span.line(aria-label="close")
              .profile
                .profile-img
                  a(href="")
                    img(src="../../assets/header/profile_male.png" alt="profile_img")
                .profile-info
                  a(href="")
                    strong yacro@hanmail.net
                    strong yacro
                
              ul.menu-link
                li 
                  a(href="") 인기 검색어
                li 
                  a(href="") 인기 레시피
                li 
                  a(href="") 마이페이지
                li 
                  a(href="") 나의 북마크
                li 
                  a(href="") 나의 레시피

        .col.col-d-2.col-d-push-7.col-t-2.col-t-push-3.col-m-1.mt-1
          h2.a11y-hidden 로그인, 회원가입
          ul.utill-login
            li
              router-link(to="./Login" role="button" aria-label="로그인 하기 버튼") 로그인
              //- a(href="" role="button" aria-label="로그인 하기 버튼") 로그인 
            li
              router-link(to="./Join" role="button" aria-label="회원가입 하기 버튼") 회원가입
              //- a(href="" role="button" aria-label="회원가입 하기 버튼") 회원가입         
              
        .col.col-d-7.col-d-pull-2.mt-1
          h2.a11y-hidden 검색 폼
          form.head-search(action="javascript:alert('검색이 완료되었습니다.')" id="search_form" role="search")
            fieldset
                legend 검색 폼
                input(type="search" id="search_kyewrod" aria-label="검색어 입력상자" required="" placeholder="검색어를 입력하세요") 
                button.btn-search(type="submit") 검색
>>>>>>> c8429e69d99019e8ff93229370915b3732fd2aa9
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
      hamburgerVisible: false,
    };
  },
<<<<<<< HEAD
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
=======
  methods: {
    hamburgerToggle() {
      this.hamburgerVisible = !this.hamburgerVisible;
    },
>>>>>>> c8429e69d99019e8ff93229370915b3732fd2aa9
  },
};
</script>

<style lang="sass" scoped>
.zindex
  z-index: 9
.gnb
  position: fixed
  top: 0
  left: 0
  width: 300px
  height: 100%
  background: #fff
  box-shadow: 0 0 10px rgba(0,0,0,0.2)
  text-align: left

.slide-enter  
  transform: translate(-320PX, 0)
  
.slide-enter-active
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1)
.slide-leave-active 
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1)
  transform: translate(-320PX, 0)

.profile
  padding: 10px
  background: #f66b54
  .profile-img
    float: left
    a
    img
      width: 45px
      height: 45px
      border-radius: 100%
  .profile-info
    float: left
    margin-left: 20px
    a
      color: #fff
    strong
      display: block
  &:after
    content: ''
    display: block
    clear: both
.menu-link
  padding: 30px 10px
  li 
    border-bottom: 1px solid #ddd
  a
    display: block
    padding: 15px 0
    font-size: 1.8rem  

</style>
