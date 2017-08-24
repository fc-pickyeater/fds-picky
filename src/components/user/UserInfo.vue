<template lang="pug">
.user-info
  h2 사용자 정보
  img(:src="this.userDetail.img_profile")
  p email : {{this.userDetail.email}}
  p nickname : {{this.userDetail.nickname}}
  p comment : {{this.userDetail.content}}
</template>

<script>
export default {
  name: 'user-info',
  computed: {
    userDetail() {
      return this.$store.getters.getReadBuffer;
    },
  },
};
</script>

<style lang="sass" scoped>
</style>
