<template lang="pug">
  form.search(action="javascript:alert('검색이 완료되었습니다.')" id="search-form" role="search")
    fieldset
      legend 검색 폼
      input(type="search" id="search-kyewrod" aria-label="검색어 입력상자" required="" placeholder="검색어를 입력하세요") 
      button.btn-search(type="button") 검색
    .rank-links(v-if="this.$store.getters.getIsHome")
      h2.a11y-hidden 인기검색어, 레시피 순위
      ul.search-word(role="hot-keyword")
        li
          a(href="") 인기 검색어순위
        li
          a(href="") 레시피 검색어순위
</template>

<script>
export default {
  name: 'search-form',
};
</script>

<style lang="sass" scoped>
@import "~stylesheet"

.search
  // margin-top:  $leading * 2
  input
    width: 100%
    border: 6px solid $base-color
    background: none
    line-height: 40px
    color: #fff
    padding-left: 10px
  fieldset
    position: relative

.search-word
  @include clearfix
  li
    float: left
    margin-top: $leading
    padding-left: 15px  
  a
    padding: 8px 7px
    color: #fff

.btn-search
  position: absolute
  top: 15px
  right: 25px
  width: 27px
  height: 25px
  border: 0
  text-indent: -999em
  background: url('../../assets/header/btn_search.png') no-repeat 0 0
</style>
