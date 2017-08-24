<template lang="pug">
  .login-join-btns(v-if="!this.$store.getters.getIsLogined")
    h2.a11y-hidden 로그인, 회원가입
    ul
      li
        router-link(to="login" role="button" aria-label="로그인 버튼") 로그인
      li
        router-link(to="join" role="button" aria-label="회원가입 버튼") 회원가입
  //- .logout-mypage-btn(v-show="this.$store.getters.getIsLogined")
  .logout-mypage-btns(v-else)
    h2.a11y-hidden 로그아웃, 마이페이지
    ul
      li
        button(type="button" @click="logout" aria-label="로그아웃 버튼") 로그아웃
      li
        router-link(to="mypage" role="button" aria-label="마이페이지 버튼") mypage
</template>

<script>
export default {
  name: 'auth-buttons',
  data() {
    return {
    };
  },
  methods: {
    logout() {
      this.$http.logout(JSON.parse(window.localStorage.getItem('PCBAuth')))
      .then((response) => {
        console.log('logout response:', response);
        window.localStorage.clear();
        this.$store.dispatch('setIsLogined');
        this.$store.commit('resetReadBuffer');
        console.log('로그아웃 되었습니다.');
      }).catch((error) => {
        console.log('logout error response', error.response);
        console.log('로그아웃에 실패하였습니다.');
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.login-join-btns, .logout-mypage-btns
  text-align: right
  margin-top: 17px

.login-join-btns li, .logout-mypage-btns li
  display: inline-block
  margin-left: 15px
  &:after
    content: '|'
    display: inline-block
    position: relative
    top: -2px
    margin-left: 15px
    color: #fff
    font-size: 1.2rem
  &:last-child:after
    content: ''
    display: inline-block
    margin-left: 0
  a, button
    color: #fff
  button
    border: 0
    background-color: rgba(0,0,0,0)
</style>
