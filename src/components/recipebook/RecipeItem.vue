<template lang="pug">
  .recipe-book
    p {{ search }}
</template>

<script>
export default {
  name: 'RecipeBook',
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