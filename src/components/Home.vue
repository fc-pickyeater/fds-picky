<template lang="pug">
  .home
    h1 {{ msg }}
    p {{ dscrpt }}
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'main',
      dscrpt: '검색 인풋 | 인기 검색어 보기(호버) | 인기 레시피 링크',
    };
  },
};
</script>

<style scoped  lang="sass">

</style>
