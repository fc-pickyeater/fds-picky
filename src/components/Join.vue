<template lang="pug">
  #app
    header.header(role="banner")
      .container
        .grid
          .col.col-d-2.col-d-push-1.col-t-2.col-t-push-3.col-m-2.col-m-push-1
            h1.small-logo
              a(href="/" title="pickycookbok" aria-label="pickcookbook")
                img(src="./assets/header/small_logo.png")
          .col.col-d-1.col-d-pull-2.col-t-1.col-t-pull-2.col-m-1.col-m-pull-2.mt-1
            nav.gnb(role="navigation")
              a.hamburger-menu(href="" role="group")
                span.line(aria-label="메인메뉴")
          .col.col-d-2.col-d-push-7.col-t-2.col-t-push-3.col-m-1.mt-1
            h2.a11y-hidden 로그인, 회원가입
            ul.utill-login
              li
                a(href="" role="button" aria-label="로그인 하기 버튼") 로그인 
              li
                a(href="" role="button" aria-label="회원가입 하기 버튼") 회원가입         
                
          .col.col-d-6.col-d-pull-1.mt-1
            h2.a11y-hidden 검색 폼
            form.head-search(action="javascript:alert('검색이 완료되었습니다.')" id="search_form" role="search")
              fieldset
                  legend 검색 폼
                  input(type="search" id="search_kyewrod" aria-label="검색어 입력상자" required="" placeholder="검색어를 입력하세요") 
                  button.btn-search(type="submit") 검색
    main.mt-2(role="main")
      .container
        .grid
          .col.col-d-6.col-d-push-3.col-t-6.col-t-push-1.login-wrap
            h2.h2-title 회원가입
            form
              fieldset
                legend.a11y-hidden 회원가입 입력 폼
                .user-email
                  input(type="email" name="user-email" placeholder="이메일을 입력해주세요." required)
                  span 이메일주소를 정확하게 입력해주세요.
                .user-psssword
                  input(type="password" name="user-password" placeholder="비밀번호를 입력해주세요." required)
                  span 비밀번호는 4자 이상입니다.
                .user-psssword-confirm
                  input(type="password" name="user-password-confirm" placeholder="비밀번호 확인" required)
                  span 비밀번호가 동일하지 않습니다.
                button.btn-login(type="submit" value="로그인 전송") 가입하기               

              
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="sass">
  @import "./sass/stylesheet.scss"

  .login-wrap
    min-height: 300px
    border: 1px solid #ddd
    padding: 21px 68px
    background:  #fff
    @include breakpoint(mobile)
      padding: 21px 50px
    
  .btn-login
    width: 100%
    height: 48px
    margin-top: $leading
    border: none
    background: $base-color
    color: #fff
    @extend %border-radius;
  .user-email span, .user-psssword span, .user-psssword-confirm span
    display: block
    margin-top: 5px
    margin-left: 5px
    color: $base-ponint-color
    font-size: 1.2rem



</style>
