<template lang="pug">
  header.header(role="banner")
    .container
      .grid
        .col.col-d-2.col-d-push-1.col-t-2.col-t-push-3.col-m-2.col-m-push-1
          h1.small-logo
            a(href="/" title="pickycookbok" aria-label="pickcookbook")
              img(src="../../assets/header/small_logo.png" alt="small_logo")
        .col.col-d-1.col-d-pull-2.col-t-1.col-t-pull-2.col-m-1.col-m-pull-2.mt-1.zindex
          .hamburger-btn(role="menu-button")
            button.hamburger-menu(href="#menu" @click="hamburgerToggle" role="menu")              
              span.line(aria-label="menu")
          transition(name="slide")
            nav.gnb(v-show="hamburgerVisible" role="navigation")
              .hamburger-close-btn(role="menu-button")
                button.hamburger-close(type="button" @click="hamburgerToggle" role="close")
                  span.line(aria-label="close")
              .profile(v-if="isLogin")
                .profile-img
                  a(href="")
                    img(src="../../assets/header/profile_male.png" alt="profile_img")
                .profile-info
                  a(href="")
                    strong {{email}}
                    strong {{nickname}}

              .profile(v-else)
                .profile-img
                  router-link(to='./Login' role="button")
                    img(src="../../assets/header/profile_male.png" alt="profile_img")
                .profile-info
                  router-link(to='./Login')
                    strong 로그인이 필요합니다
                
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

        .col.col-d-2.col-d-push-7.col-t-2.col-t-push-3.col-m-1.mt-1
          h2.a11y-hidden 로그인, 회원가입
          ul.utill-login(v-if="isLogin")
            li
               a(href role="button"  @click.prevent="logout" aria-label="로그아웃 하기 버튼") 로그아웃
            li
              router-link(to="./Mypage" role="button" aria-label="마에피이지") 마이페이지
          ul.utill-login(v-else)
            li
              router-link(to="./Login" role="button" aria-label="로그인 하기 버튼") 로그인
            li
              router-link(to="./Join" role="button" aria-label="회원가입 하기 버튼") 회원가입
              
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
  created() {
    this.$http.get(`${this.$store.state.user_detail_api}/${this.$store.state.userPk}`,
    { headers: { Authorization: this.$store.getters.token } })
    .then((response) => {
      const data = response.data;
      const email = this.data.email;
      const nickname = this.data.nickname;
      // this.user = response.data;
      // this.email = this.user.email;
      // this.nickname = this.user.nickname;
    })
    .catch((error) => {
      console.log(error);
    });
  },
  data() {
    return {
      hamburgerVisible: false,
      user: null,
      email: '',
      nickname: '',
      img_profile: '',
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogIn;
    },
  },
  methods: {
    hamburgerToggle() {
      this.hamburgerVisible = !this.hamburgerVisible;
    },
    logout() {
      this.$store.dispatch('logout');
      alert('성공적으로 로그아웃 하셨습니다.'); // eslint-disable-line no-alert
      this.$router.push('/');
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../../sass/stylesheet" 

.btn-search
 	background: url('../../assets/header/btn_search.png') no-repeat 0 0;

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