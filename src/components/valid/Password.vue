<template lang="pug">
    main.mt-2(role="main")
      .container
        .grid
          .col.col-d-6.col-d-push-3.col-t-6.col-t-push-1.login-wrap
            h2.h2-title 비밀번호 찾기
            p.password-txt
              |  회원가입 시 등록한 이메일 주소를 입력하시면<br /> 비밀번호를 재설정 할 수 있는 링크를 전송해드립니다.
            form
              fieldset
                legend.a11y-hidden 비밀번호 찾기 입력 폼
                .user-email
                  input(type="email" name="user-email" placeholder="이메일을 입력해주세요." required)
                  span 이메일주소를 정확하게 입력해주세요.
                button.btn-login(type="submit" value="메일 전송") 전송하기

              
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="sass">
  // @import "./sass/stylesheet.scss"

  .login-wrap
    min-height: 300px
    border: 1px solid #ddd
    padding: 21px 68px
    background:  #fff
    // @include breakpoint(mobile)
      padding: 21px 50px    
  .btn-login
    width: 100%
    height: 48px
    // margin-top: $leading
    border: none
    // background: $base-color
    color: #fff
    // @extend %border-radius;
  .user-email span, .user-psssword span
    display: block
    margin-top: 5px
    margin-left: 5px
    // color: $base-ponint-color
    font-size: 1.2rem
  .password-txt
    color: #888
</style>
