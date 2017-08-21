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
                span(v-show="")  비밀번호는 6자 이상입니다.
              button.btn-login(type="button" @click="loginSubmit" value="로그인 전송") 로그인

              p.mt-1
                router-link(to='./Password') 비밀번호를 잊으셨나요?
          .sns-sharer(role="group")
            a.login-k(href="" class="kakao-login" role="button" aria-label="카카오톡으로 로그인 하기 버튼") 카카오톡으로 로그인
            a.login-f(href="" class="facebook-login" role="button" aria-label="페이스북으로 로그인 하기 버튼") 페이스북으로 로그인
            a.login-n(href="" class="naver-login" role="button" aria-label="네이버로 로그인 하기 버튼") 네이버로 로그인
</template>

<script>
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
  methods: {
    loginSubmit() {
      this.$http.post(this.$store.state.user_login_api, this.user_login)
      .then((response) => {
        const token = response.data.key;
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
  },
};
</script>

<style lang="sass">
  //@import "../../sass/stylesheet"
  
  .user-email span, .user-psssword span
    display: block
    margin-top: 5px
    margin-left: 5px
    color: #f66b54

  .login-k
    background: rgb(252,229,30)
    color: rgb(59,29,20)
    &:after
      background: url('/src/assets/icon/icon_kakao.png') no-repeat 50% 50%

  .login-f
    background: rgb(59,87,158)
    color: #fff
    &:after
      background: url('/src/assets/icon/icon_facebook.png') no-repeat 50% 50%
  .login-n  
    background: rgb(40,209,17)
    color: #fff
    &:after
      background: url('/src/assets/icon/icon_naver.png') no-repeat 50% 50%

</style>