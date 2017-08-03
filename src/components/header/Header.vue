<template lang="pug">
  .home
    h1 head
    p 햄버거 메뉴
    ul.hamburger
      li
        router-link(to="/") home
      li 인기검색어: home으로 이동 후 인기검색어 리스트로 스크롤
      li 인기레시피: home으로 이동 후 인기레시피 리스트로 스크롤
      li(style="list-style:none") if logined then {
      ul
        li
          router-link(to="/mypage") mypage
        li
          router-link(to="/recipe") 내recipe작성
        li 
          router-link(to="/recipebook") 최근 열람한 recipe book
        li
          router-link(to="/recipebook") 내가 작성한 recipe book
        li
          router-link(to="/recipebook") 북마크 한 recipe book
        li
          router-link(to="/recipebook") 댓글 단 recipe book
        li
          router-link(to="/recipebook") 점수 준 recipe book
      li(style="list-style:none") } |
    p if logined then { 로그아웃 링크 | 
      router-link(to="/mypage") 마이페이지 링크
      | } else { 
      router-link(to="/login") 로그인 링크
      |  | 
      router-link(to="/join") 회원가입 링크
      |  }
</template>

<script>
export default {
  name: 'head',
  data() {
    return {
    };
  },
};
</script>

<style scoped lang="sass">
</style>
