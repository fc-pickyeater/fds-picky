<template lang="pug">
  #app
    .main-bg
      header(role="banner")
        .container
          .grid
            .col.col-d-4.col-d-push-4.col-t-4.col-t-push-2.col-m-2.col-m-push-1.mt-1
              h1.logo
                a(href="/" title="pickycookbok" aria-label="pickcookbook")
                  img(src="./assets/header/logo.png")
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
                    a(href="") 레시피 검색어순위header.header(role="banner")
      .container
        .grid
          .col.col-d-2.col-d-push-1.col-t-2.col-t-push-3.col-m-2.col-m-push-1
            h1.small-logo
              a(href="/" title="pickycookbok" aria-label="pickcookbook")
                img(src="./assets/header/small_logo.png")
          .col.col-d-1.col-d-pull-2.col-t-1.col-t-pull-2.col-m-1.col-m-pull-2.mt-1
            nav.gnb(role="navigation")
              a.hamburger-menu(href="" role="group")
                span.line(aria-label="메인메뉴")
          .col.col-d-2.col-d-push-7.col-t-2.col-t-push-3.col-m-1.mt-1
            h2.a11y-hidden 로그인, 회원가입
            ul.utill-login
              li
                a(href="") 로그인 
              li
                a(href="") 회원가입         
                
          .col.col-d-6.col-d-pull-1.mt-1
            h2.a11y-hidden 검색 폼
            form.head-search(action="javascript:alert('검색이 완료되었습니다.')" id="search_form" role="search")
              fieldset
                  legend 검색 폼
                  input(type="search" id="search_kyewrod" aria-label="검색어 입력상자" required="" placeholder="검색어를 입력하세요") 
                  button.btn-search(type="submit") 검색
    main.mt-2(role="main")
      .container
        .grid.title-line
          .col.col-d-10.col-t-6
            h2.h2-title 감자 조건에 맞는 레시피가 <em>225개</em> 있습니다.
          .col.col-d-2.col-t-2.col-m-4
            form.filter(id="filter")
              fieldset
                legend 정렬 순서
                select.sort-selector
                  option(value="") 최신순 정렬
                  option(value="1") 인기순 정렬
        .grid
          .col.col-d-12(role="group")
            h2.a11y-hidden 검색결과 리스트
            .col.col-d-12.col-t-8.col-m-4.alpha.omega
              .col.col-d-3.col-t-2.col-m-4
                figure
                  img(src="./assets/recipe/list_img.png" alt="감자구이"  width="100%")
                  figcaption
                    em 감자구이
                    span 초간단 감자구이
                .etc.mt-1
                  span
                  input.like(type="checkbox")    
              .col.col-d-3.col-t-2.col-m-4
                figure
                  img(src="./assets/recipe/list_img.png" alt="감자구이"  width="100%")
                  figcaption
                    em 감자구이
                    span 초간단 감자구이
                .etc.mt-1
                  span
                  input.like(type="checkbox")    
              .col.col-d-3.col-t-2.col-m-4
                figure
                  img(src="./assets/recipe/list_img.png" alt="감자구이"  width="100%")
                  figcaption
                    em 감자구이
                    span 초간단 감자구이
                .etc.mt-1
                  span
                  input.like(type="checkbox")    
              .col.col-d-3.col-t-2.col-m-4
                figure
                  img(src="./assets/recipe/list_img.png" alt="감자구이"  width="100%")
                  figcaption
                    em 감자구이
                    span 초간단 감자구이
                .etc.mt-1
                  span
                  input.like(type="checkbox")    




              //- ul.cookbook-list
              //-   li.cookbook-items
              //-     div.cookbook-item
              //-       figure
              //-           img(src="./assets/recipe/list_img.png" alt="감자구이")
              //-           figcaption
              //-             em 감자구이
              //-             span 초간단 감자구이
              //-       .etc.mt-1
              //-         span
              //-         input.like(type="checkbox")    
              //-   li.cookbook-items
              //-     div.cookbook-item
              //-       figure
              //-           img(src="./assets/recipe/list_img.png" alt="감자구이")
              //-           figcaption
              //-             em 감자구이
              //-             span 초간단 감자구이
              //-       .etc.mt-1
              //-         span
              //-         input.like(type="checkbox")    
              //-   li.cookbook-items
              //-     div.cookbook-item
              //-       figure
              //-           img(src="./assets/recipe/list_img.png" alt="감자구이")
              //-           figcaption
              //-             em 감자구이
              //-             span 초간단 감자구이
              //-       .etc.mt-1
              //-         span
              //-         input.like(type="checkbox")    
              //-   li.cookbook-items
              //-     div.cookbook-item
              //-       figure
              //-           img(src="./assets/recipe/list_img.png" alt="감자구이")
              //-           figcaption
              //-             em 감자구이
              //-             span 초간단 감자구이
              //-       .etc.mt-1
              //-         span
              //-         input.like(type="checkbox")    
              //-   li.cookbook-items
              //-     div.cookbook-item
              //-       figure
              //-           img(src="./assets/recipe/list_img.png" alt="감자구이")
              //-           figcaption
              //-             em 감자구이
              //-             span 초간단 감자구이
              //-       .etc.mt-1
              //-         span
              //-         input.like(type="checkbox")


</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="sass">
  @import "./sass/stylesheet.scss"
</style>
