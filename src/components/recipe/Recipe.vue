<template lang="pug">
  .recipe
    h1 레시피
    p if ( logined AND NOT isEditing ) then { 북마크 | 좋아요 }
    p if ( logined AND isMine ) then { 이 레시피 수정 | 이 레시피 삭제 }
    ul
      li if ( logtined AND isMine AND isEditing ) then { 스텝 추가 버튼 }
      li 스텝0
      li if ( logtined AND isMine AND isEditing ) then { 스텝 추가 버튼 }
      li 스텝1
      li if ( logtined AND isMine AND isEditing ) then { 스텝 추가 버튼 }
      li 스텝2
      li if ( logtined AND isMine AND isEditing ) then { 스텝 추가 버튼 }
      li 스텝3
      li if ( logtined AND isMine AND isEditing ) then { 스텝 추가 버튼 }
      li 스텝4
      li if ( logtined AND isMine AND isEditing ) then { 스텝 추가 버튼 }
      li if ( logined AND NOT isEditing ) then { review | 평점 }
</template>


<script>
export default {
  name: 'Recipe',
};
</script>

<style lang="sass">
</style>