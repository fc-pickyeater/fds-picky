<template lang="pug">
  .recipe-book
    recipe-page
  //-
    h1 레시피북
    p if ( logined AND isMine ) then { 전체선택 체크박스 | 작성 버튼 | 삭제 버튼 }
    ul
      li
        router-link(to="/recipe") 레시피 아이템 0~10
</template>

<script>
import RecipePage from '@/components/recipebook/RecipePage';

export default {
  name: 'RecipeBook',
  components: {
    RecipePage,
  },
  mounted() {
    this.$http.get(`recipe/search/?search=${this.search}`)
    .then((response) => {
      console.log(response);
    });
  },
  // http://pickycookbook.co.kr/recipe/search/?search=%EB%8F%BC%EC%A7%80%EB%B6%88%EA%B3%A0%EA%B8%B0
  // search변수의 값을 props: ['search'], 로 받고 싶은데 먹히지가 않는다. 왜?
  data() {
    return {
      search: this.$route.query.search,
    };
  },
};

</script>

<style lang="sass">
</style>