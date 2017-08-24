<template lang="pug">
ul(:name="this.bookName" :class="this.bookClass")
  recipe-item(v-for="(item, index) in this.recipeBook" :index="index" :recipeItem="item" :key="index")
</template>

<script>
import RecipeItem from '@/components/recipe/RecipeItem';

export default {
  name: 'recipe-book',
  mounted() {
    this.recipeBook = this.$store.getters.getMyRecipeList.slice();
    const currentPath = this.$router.currentRoute.path;
    if (currentPath === '/mypage') {
      this.bookName = 'my-recipe-book';
      this.bookClass = 'my-recipe-book';
    }
  },
  components: {
    RecipeItem,
  },
  data() {
    return {
      recipeBook: [],
      bookClass: '',
      bookName: '',
    };
  },
};
</script>

<style lang="sass" scoped>

</style>