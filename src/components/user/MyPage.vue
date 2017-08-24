<template lang="pug">
.mypage
  .user-info-group
    user-info(v-if="!this.$store.getters.getIsUserEditMode")
    user-info-edit(v-else)
    button(type="button" @click="editUserInfo" v-if="!this.$store.getters.getIsUserEditMode") 정보 수정
  hr
  .my-recipe-book
    h2 My Recipe List
    recipe-book
</template>

<script>
import UserInfo from '@/components/user/UserInfo';
import UserInfoEdit from '@/components/user/UserInfoEdit';
import RecipeBook from '@/components/recipe/RecipeBook';

export default {
  name: 'mypage',
  created() {
    const PCBAuth = JSON.parse(window.localStorage.getItem('PCBAuth'));
    this.$http.myRecipeList(PCBAuth).then((response) => {
      console.log('내 레시피 불러오기 성공!');
      this.$store.commit('initMyRecipeList', response.data);
    }).catch((error) => {
      console.log(error.response);
      console.log('내 레시피 불러오기 실패...');
    });
  },
  components: {
    UserInfo, UserInfoEdit, RecipeBook,
  },
  data() {
    return {
      isUserInfoEditMode: false,
    };
  },
  methods: {
    editUserInfo() {
      this.$store.commit('toggleIsUserEditMode');
    },
  },
};
</script>

<style lang="sass">

</style>