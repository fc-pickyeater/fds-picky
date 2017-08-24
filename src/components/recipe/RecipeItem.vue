<template lang="pug">
li
  p 레시피 제목: {{recipeItem.title}}
  p 좋아요 수: {{recipeItem.like_count}}
  p 총평점: {{recipeItem.rate_sum}}
  p 태그: {{recipeItem.tag}}
  img(:src="recipeItem.img_recipe")
  hr
</template>

<script>
export default {
  name: 'recipe-item',
  props: [
    'index', 'recipeItem',
  ],
};
</script>

<style lang="sass" scoped>
img
  width: 100%
  max-width: 200px
</style>
