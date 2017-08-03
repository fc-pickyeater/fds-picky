<template lang="pug">
  .home
    h1 main
    p 
      router-link(to="/recipebook") 검색 인풋
      | |
    p 인기 검색어
    ul
      li 
        router-link(to="/recipebook") 검색어0
      li 
        router-link(to="/recipebook") 검색어1
      li 
        router-link(to="/recipebook") 검색어2
      li 
        router-link(to="/recipebook") 검색어3
      li 
        router-link(to="/recipebook") 검색어4
      li 
        router-link(to="/recipebook") 검색어5
      li 
        router-link(to="/recipebook") 검색어6
      li 
        router-link(to="/recipebook") 검색어7
      li 
        router-link(to="/recipebook") 검색어8
      li 
        router-link(to="/recipebook") 검색어9 |
    p 인기 레시피 | 
      router-link(to="/recipebook") 더보기
    ul
      li
        router-link(to="/recipe") 레시피 아이템 0
      li
        router-link(to="/recipe") 레시피 아이템 1
      li
        router-link(to="/recipe") 레시피 아이템 2
      li
        router-link(to="/recipe") 레시피 아이템 3
      li
        router-link(to="/recipe") 레시피 아이템 4
      li
        router-link(to="/recipe") 레시피 아이템 5
      li
        router-link(to="/recipe") 레시피 아이템 6
      li
        router-link(to="/recipe") 레시피 아이템 7
      li
        router-link(to="/recipe") 레시피 아이템 8
      li
        router-link(to="/recipe") 레시피 아이템 9
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
