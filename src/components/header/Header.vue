<template lang="pug">
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
</template>

<script>
export default {
  name: 'head',
  data() {
    return {
      hamburgerVisible: false,
    };
  },
  methods: {
    hamburgerToggle() {
      this.hamburgerVisible = !this.hamburgerVisible;
    },
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
