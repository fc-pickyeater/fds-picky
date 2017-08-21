<template lang="pug">
  main.mt-2(role="main")
    .container
      .grid
        .col.col-d-6.col-d-push-3.col-t-6.col-t-push-1.login-wrap
          h2.h2-title 로그인
          form
            fieldset
              legend.a11y-hidden 로그인 입력 폼
              .user-email
                input(type="email" name="email" placeholder="이메일을 입력 해주세요." v-model.trim="user_login.email" required)
                span(v-show="") 올바른 이메일 형식이 아닙니다.
              .user-psssword
                input(type="password" name="password" placeholder="비밀번호를 입력해주세요." minlength="6" maxlength ="20"  v-model.trim="user_login.password" required)
                span(v-show="") 비밀번호는 6자 이상입니다.
              button.btn-login(type="button" @click="loginSubmit" value="로그인 전송") 로그인

              p.mt-1
                router-link(to='./Password') 비밀번호를 잊으셨나요?
          .sns-sharer(role="group")
            //- a.login-k(href="" class="kakao-login" role="button" aria-label="카카오톡으로 로그인 하기 버튼") 카카오톡으로 로그인
            a.login-f(href="#fb" class="facebook-login" role="button" @click="facebookLogin" aria-label="페이스북으로 로그인 하기 버튼") 페이스북으로 로그인
            //- a.login-n(href="" class="naver-login" role="button" aria-label="네이버로 로그인 하기 버튼") 네이버로 로그인
</template>

<script>
/* eslint-disable */
import Vue from 'vue';

const FB = window.FB;
export default {
  name: 'Login',
  data() {
    return {
      user_login: {
        email: '',
        name: '',
        password: '',
      },
    };
  },
  mounted() {
    window.fbAsyncInit = () => {
      FB.init({
        appId: '185228966508815',
        cookie: true,
        xfbml: true,
        version: 'v2.10',
      });
    };
  },
  methods: {
    loginSubmit() {
      this.$http.post(this.$store.state.user_login_api, this.user_login)
      .then((response) => {
        const token = response.data.token;
        if (!window.localStorage.getItem('token')) {
          window.localStorage.setItem('token', token);
        }
        console.log('success token:', window.localStorage.getItem('token'));
        this.$router.push({ path: '/' });
        console.log('로그인에 성공했습니다.');
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
        console.log('로그인에 실패했습니다.');
      });
    },
    facebookLogin() {
      FB.getLoginStatus((response) => {
        console.log(response);
        if (response.status === 'connected') {
          const AccessToken = response.authResponse.accessToken;
          this.$http.post(this.$store.state.user_fb_api, { AccessToken })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
        } else {
          FB.login((response) => {
            console.log(response);
          }, { scope: 'public_profile' });
        }
      });
    },
  },
};
</script>

<style lang="sass" scoped>
  @import "../../sass/stylesheet" 


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
    color: $base-point-color
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
      border: 0
      @extend %border-radius
      box-sizing: border-box
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
  
  .user-email span, .user-psssword span
    display: block
    margin-top: 5px
    margin-left: 5px
    color: #f66b54


  .login-k
    background: rgb(252,229,30)
    color: rgb(59,29,20)
    &:after
      background: url('../../assets/icon/icon_kakao.png') no-repeat 50% 50%

  .login-f
    background: rgb(59,87,158)
    color: #fff
    &:after
      background: url('../../assets/icon/icon_facebook.png') no-repeat 50% 50%
  .login-n  
    background: rgb(40,209,17)
    color: #fff
    &:after
      background: url('../../assets/icon/icon_naver.png') no-repeat 50% 50%

</style>