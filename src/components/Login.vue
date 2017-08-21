<template lang="pug">
  #app(v-cloak)
    header.header(role="banner")
      .container
        .grid
          .col.col-d-2.col-d-push-1.col-t-2.col-t-push-3.col-m-2.col-m-push-1
            h1.small-logo
              a(href="/" title="pickycookbok" aria-label="pickcookbook")
                img(src="./assets/header/small_logo.png")
          .col.col-d-1.col-d-pull-2.col-t-1.col-t-pull-2.col-m-1.col-m-pull-2.mt-1
            .hamburger-btn(role="menu-button")
              a.hamburger-menu(href="#menu" role="group")
                span.line(aria-label="메인메뉴")
            nav.gnb(role="navigation")
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
    main.mt-2(role="main")
      .container
        .grid
          .col.col-d-6.col-d-push-3.col-t-6.col-t-push-1.login-wrap
            h2.h2-title 로그인
            form
              fieldset
                legend.a11y-hidden 로그인 입력 폼
                .user-email
                  input(type="email" name="user-email" placeholder="이메일을 입력 해주세요." required)
                  span 이메일주소를 정확하게 입력해주세요.
                .user-psssword
                  input(type="password" name="user-password" placeholder="비밀번호를 입력해주세요." required)
                  span 비밀번호는 4자 이상입니다.
                button.btn-login(type="submit" value="로그인 전송") 로그인

                p.mt-1
                  a(href="") 비밀번호를 잊으셨나요?
            .sns-sharer(role="group")
              a.login-k(href="" class="kakao-login" role="button" aria-label="카카오톡으로 로그인 하기 버튼") 카카오톡으로 로그인
              a.login-f(href="" class="facebook-login" role="button" aria-label="페이스북으로 로그인 하기 버튼") 페이스북으로 로그인
              a.login-n(href="" class="naver-login" role="button" aria-label="네이버로 로그인 하기 버튼") 네이버로 로그인

              
</template>

<script>
  // 정규식 검증
  const emailRegex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const pwRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,16}$/;
export default {
  name: 'Login',
  data() {
    return {
      user_info: {
        email: '',
        password: '',
      },
    };
  },
  computed: {
    validation: function() {
      return {
        email: emailRegex.test(this.user_info.email),
        password: pwRegex.test(this.user_info.password),
      };
    },
  },
  methods: {
    loginSubmit() {
      this.$http.post('http://pickycookbook.co.kr/member/login/', this.user_info)
      .then(response => console.log(response))
      .catch(error => console.log.error(error.message));
    },
  },
};
</script>

<style lang="sass">
  // @import "./sass/stylesheet.scss"
  [v-cloak]
    display: none  
  .gnb
    position: fixed
    top: 0
    left: 0
    width: 300px
    height: 100%
    background: #fff
    box-shadow: 0 0 10px rgba(0,0,0,0.2)
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1)
    transform: translate(-320px, 0)
  .gnb.open
    transform: translate(0, 0)
  
  
  
  
  
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
  .user-email span, .user-psssword span
    display: block
    margin-top: 5px
    margin-left: 5px
    color: $base-ponint-color
    font-size: 1.2rem
  .sns-sharer
    margin-top: $leading
    a
      display: block
      position: relative
      height: 48px
      line-height: 48px
      margin-bottom: 10px
      padding: 0 16px 0 65px
      @extend %border-radius;
      box-sizing: border-box;
    a:after
      content: ''
      display: inline-block
      position: absolute
      top: 0
      left: 0
      width: 48px
      height: 48px
      background-size: 40px auto
      border-right: 1px solid rgba(0, 0, 0, 0.04)      

    
  .login-k
    background: rgb(252,229,30)
    color: rgb(59,29,20)
    &:after
      background: url('../src/assets/icon/icon_kakao.png') no-repeat 50% 50%

  .login-f
    background: rgb(59,87,158)
    color: #fff
    &:after
      background: url('../src/assets/icon/icon_facebook.png') no-repeat 50% 50%
  .login-n  
    background: rgb(40,209,17)
    color: #fff
    &:after
      background: url('../src/assets/icon/icon_naver.png') no-repeat 50% 50%

</style>
