<template lang="pug">
.search-input
  input(type="text" :value="search_text" @input="typing" placeholder="검색할 식재료 이름을 입력해 주세요.")
  //- 이 버튼 눌렀을 때 input의 value.trim()이 ''가 아니도록 검사하려면 어떻게?
  //- :to의 값을 data(){} 안으로 옮길 때 search_text를 참조하려면 어떻게?
  router-link(tag="button" type="button" :to="{name: 'RecipeBook', query: { search: search_text } }") 검색
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      search_text: '',
    };
  },
  methods: {
    typing(e) {
      this.search_text = e.target.value;
    },
  },
};
</script>

<style lang="sass">
</style>
