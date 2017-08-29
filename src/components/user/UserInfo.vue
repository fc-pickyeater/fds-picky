<template lang="pug">
  main.mt-2(role="main")
    .container
      .grid
        .col.col-d-8.col-d-push-2.col-t-6.col-t-push-1.info-wrap
          h2.h2-title 사용자 정보
          form
            fieldset
              legend 사용자 정보              
              table.user-info(border="0")
                caption.a11y-hidden 사용자 정보
                colgroup
                  col(style="width: 22%")
                  col
                tbody
                  tr
                    th(scope="row") 프로필 사진
                    td
                      div.profile_photo
                        img(:src="this.userDetail.img_profile")
                  tr
                    th 계정
                    td {{this.userDetail.email}}
                  tr
                    th 별명
                    td {{this.userDetail.nickname}}
                  tr
                    th 짤막한 글
                    td {{this.userDetail.content}}
              slot
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
@import "../../sass/stylesheet"
.info-wrap
  min-height: 300px
  border: 1px solid #ddd
  padding: 21px 48px
  background:  #fff
  @include breakpoint(mobile)
    padding: 21px 15px
  .user-info
    margin-top: $leading
</style>
