<template lang="pug">
.user-info
  img(:src="this.userDetail.img_profile")
  p email : {{this.userDetail.email}}
  p nickname : {{this.userDetail.nickname}}
  p comment : {{this.userDetail.content}}
</template>

<script>
export default {
  name: 'user-info',
  computed: {
    userDetail: {
      get() {
        return this.$store.getters.getUserDetail;
      },
      set(val) {
        this.$store.commit('setUserDetail', val);
      },
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
