<template lang="pug">
.mypage
  user-info(v-if="!this.$store.getters.getIsUserEditMode")
  user-info-edit(v-else)
  button(type="button" @click="editUserInfo" v-if="!this.$store.getters.getIsUserEditMode") 정보 수정
</template>

<script>
import UserInfo from '@/components/user/UserInfo';
import UserInfoEdit from '@/components/user/UserInfoEdit';

export default {
  name: 'mypage',
  created() {
    const PCBAuth = JSON.parse(window.localStorage.getItem('PCBAuth'));
    this.$http.myRecipeList(PCBAuth).then((response) => {
      console.log('내 레시피 불러오기 성공!');
      this.myRecipeList = response.data;
    }).catch((error) => {
      console.log(error.response);
      console.log('내 레시피 불러오기 실패...');
    });
  },
  components: {
    UserInfo, UserInfoEdit,
  },
  data() {
    return {
      isUserInfoEditMode: false,
      myRecipeList: {},
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