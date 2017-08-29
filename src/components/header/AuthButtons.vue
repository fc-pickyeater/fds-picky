<template lang="pug">
  .login-join-btns(v-if="!this.$store.getters.getIsLogined" title="로그인, 회원가입")
    h2.a11y-hidden 로그인, 회원가입
    ul
      li
        router-link(to="login" role="button" aria-label="로그인 버튼") 
          i.fa.fa-key(aria-hidden="true")
          span.a11y-hidden 로그인
      li
        router-link(to="join" role="button" aria-label="회원가입 버튼")
          i.fa.fa-user-plus(aria-hidden="true")
          span.a11y-hidden 회원가입
  //- .logout-mypage-btn(v-show="this.$store.getters.getIsLogined")
  .logout-mypage-btns(v-else title="로그아웃, 내 정보")
    h2.a11y-hidden 로그아웃, 내 정보
    ul
      li
        button(type="button" @click="logout" aria-label="로그아웃 버튼") 
          i.fa.fa-sign-out(aria-hidden="true")
          span.a11y-hidden 로그아웃
      li
        router-link(to="mypage" role="button" aria-label="마이페이지 버튼") 
          i.fa.fa-user-circle(aria-hidden="true")
          span.a11y-hidden 내 정보
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
@import "../../sass/stylesheet" 
.login-join-btns, .logout-mypage-btns
  text-align: right
  ul
    margin-top: 17px

.login-join-btns li, .logout-mypage-btns li
  display: inline-block
  
  @include breakpoint(desktop)
    [class^="fa"]:before
      content: ' '
  &:after    
    content: '|'
    display: inline-block
    position: relative
    top: -2px
    margin: 0 15px
    color: #fff
    font-size: 1.2rem
    @include breakpoint(tablet)
      content: ''
      margin-left: 15px
      
    @include breakpoint(mobile)
      content: ''
      margin-left: 8px     
  &:last-child:after
    content: ''
    display: inline-block
    margin-left: 0
  a, button
    color: #fff
  .fa
    font: normal normal normal 24px/1 FontAwesome
  span
    @include breakpoint(desktop)
      position: static
      text-indent: 0

  button
    padding: 0
    border: 0
    background-color: rgba(0,0,0,0)
</style>
