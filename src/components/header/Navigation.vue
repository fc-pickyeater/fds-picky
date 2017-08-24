<template lang="pug">
.navigation-group
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
          router-link(:to="this.$store.getters.getIsLogined? 'mypage' : 'login'" @click="hamburgerToggle")
            img(:src="this.$store.getters.getReadBuffer.img_profile" alt="")
        .profile-info
          router-link(:to="this.$store.getters.getIsLogined? 'mypage' : 'login'" @click="hamburgerToggle")
            strong {{this.$store.getters.getReadBuffer.email || '로그인이 필요합니다.'}}
            strong {{this.$store.getters.getReadBuffer.nickname || '로그인 해 주세요.'}}
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
</template>

<script>
export default {
  name: 'navigation',
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
.gnb
  position: fixed
  top: 0
  left: 0
  width: 300px
  height: 100%
  background: #fff
  box-shadow: 0 0 10px rgba(0,0,0,0.2)
  text-align: left

.hamburger-menu
  display: block
  position: relative
  width: 52px
  height: 52px
  padding: 14px 11px
  border: 1px solid #fff
  background: none
  box-sizing: border-box
  .line
    display: block
    width: 28px
    height: 3px
    background: #fff
    margin: 6px 0
  &:after,&:before
    content: ''
    display: block
    width: 28px
    height: 3px
    background: #fff

.hamburger-close
  display: block
  position: absolute
  right: 0
  width: 52px
  height: 52px
  padding: 14px 11px
  border: 1px solid #f66b54
  background: none
  box-sizing: border-box
  .line
    display: block
    width: 28px
    height: 3px
    background: #f66b54
    margin: 6px 0
  &:after,&:before
    content: ''
    position: relative
    display: block
    width: 28px
    height: 3px
    background: #fff
  &:after
    top: -9px
    transform: rotate(-135deg)
  &:before
    top: 9px
    transform: rotate(135deg)

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
