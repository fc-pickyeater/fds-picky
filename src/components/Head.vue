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
      msg: 'head',
      dscrpt: '햄버거 메뉴 | 로그인-아웃 링크 | 회원가입-마이페이지 링크',
    };
  },
};
</script>

<style scoped  lang="sass">

</style>
