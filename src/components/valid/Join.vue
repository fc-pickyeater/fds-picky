<template lang="pug"> 
    main.mt-2(role="main")
      .container
        .grid
          .col.col-d-6.col-d-push-3.col-t-6.col-t-push-1.login-wrap
            h2.h2-title 회원가입
            form
              fieldset
                legend.a11y-hidden 회원가입 입력 폼
                .user-email
                  input(type="email" name="user-email" placeholder="이메일을 입력해주세요." v-model="user_join.email" required)
                  span(v-show="") 올바른 이메일 형식이 아닙니다.
                .user-nickname
                  input(type="text" name="user-name" placeholder="닉네임을 입력해주세요." v-model="user_join.nickname"   required)
                  span 6글자 이상, 12글자 이하로 작성해주세요.
                .user-psssword
                  input(type="password" name="user-password1" placeholder="비밀번호를 입력해주세요." minlength="6" maxlength ="20"  v-model="user_join.password1" required)
                  span 비밀번호는 6자 이상입니다.
                .user-psssword-confirm
                  input(type="password" name="user-password2" placeholder="비밀번호 확인" v-model="user_join.password2" required)
                  span(v-show="") 비밀번호가 동일하지 않습니다.
                button.btn-login(type="button" value="로그인 전송" @click.prevent="JoinSubmit") 가입하기               

              
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      user_join: {
        email: '',
        nickname: '',
        password1: '',
        password2: '',
      },
    };
  },
  methods: {
    JoinSubmit() {
      this.$http.post(this.$store.state.user_create_api, this.user_join)
      .then((response) => {
        console.log(response);
        window.alert('회원가입이 완료되었습니다'); // eslint-disable-line no-alert
        this.$router.push({ path: '/Login' });
      })
      .catch((error) => {
        console.log(error.message);
        console.log('로그인에 실패했습니다.');
      });
    },
  },
};
</script>

<style lang="sass">
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
  .user-email span, .user-nickname span, .user-psssword span, .user-psssword-confirm span
    display: block
    margin-top: 5px
    margin-left: 5px
    color: #f66b54
    font-size: 1.2rem



</style>
