<template lang="pug">
   header.header(role="banner")
    .container
        .grid
          .col.col-d-2.col-d-push-1.col-t-2.col-t-push-3.col-m-2.col-m-push-1
            h1.small-logo
              a(href="/" title="pickycookbok" aria-label="pickcookbook")
                img(src="../../assets/header/small_logo.png")
          .col.col-d-1.col-d-pull-2.col-t-1.col-t-pull-2.col-m-1.col-m-pull-2.mt-1
            .hamburger-btn(role="menu-button")
              a.hamburger-menu(@click="hamburgerToggle" role="group")
                span.line(aria-label="메인메뉴")
            nav.gnb(v-show="hamburgerVisible" role="navigation")
              .profile
              ul
                li

          .col.col-d-2.col-d-push-7.col-t-2.col-t-push-3.col-m-1.mt-1
            h2.a11y-hidden 로그인, 회원가입
            ul.utill-login
              li
                a(href="" role="button" aria-label="로그인 하기 버튼") 로그인 
              li
                a(href="" role="button" aria-label="회원가입 하기 버튼") 회원가입         
                
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

<style scoped lang="sass">
  
  .gnb
    z-index: 999
    position: fixed
    top: 0
    left: 0
    width: 300px
    height: 100%
    background: #fff
    box-shadow: 0 0 10px rgba(0,0,0,0.2)
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1)
    transform: translate(0, 0)
  .gnb.open
    transform: translate(0, 0)
</style>
