<template lang="pug">
  .main-bg
    header(role="banner")
      .container
        .grid
          .col.col-d-4.col-d-push-4.col-t-4.col-t-push-2.col-m-2.col-m-push-1.mt-1
            h1.logo
              a(href="/" title="pickycookbok" aria-label="pickcookbook")
                img(src="../assets/header/logo.png")
          .col.col-d-1.col-d-pull-4.col-t-1.col-t-1.col-t-pull-4.col-m-1.col-m-pull-2.mt-1
            nav.gnb(role="navigation")
              a.hamburger-menu(href="" role="gorup")
                span.line(aria-label="메인메뉴")
          .col.col-d-2.col-d-push-4.col-t-2.col-t-push-1.col-m-1.mt-1
            h2.a11y-hidden 로그인, 회원가입
            ul.utill-login
              li
                a(href="") 로그인 
              li
                a(href="") 회원가입 
    main(role="main")
      .container
        .grid
            .col.col-d-8.col-d-push-2
              form.search(action="javascript:alert('검색이 완료되었습니다.')" id="search-form" role="search")
                  fieldset
                      legend 검색 폼
                      input(type="search" id="search-kyewrod" aria-label="검색어 입력상자" required="" placeholder="검색어를 입력하세요") 
                      button.btn-search(type="submit") 검색
              h2.a11y-hidden 인기검색어, 레시피 순위
              ul.search-word(role="hot-keyword")
                li
                  a(href="") 인기 검색어순위
                li
                  a(href="") 레시피 검색어순위
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
    };
  },
};
</script>

<style scoped  lang="sass">
</style>
