<template lang="pug">
  main.mt-2(role="main")
    .grid
      .col.col-d-8.col-d-push-2.col-t-6.col-t-push-1.info-wrap
        h2.h2-title 사용자 정보 수정
        form
          fieldset
            legend 사용자 정보 수정
            table.user-info(border="0")
              caption.a11y-hidden 사용자 정보 수정 입력
              colgroup
                col(style="width: 25%")
                col
              tbody
                tr
                  th 별명
                  td.user-nickname
                    input(type="text" name="user-name" placeholder="새 별명을 입력해주세요." v-model="user.nickname" )
                    span 2글자 이상, 12글자 이하로 작성해주세요.
                tr
                  th 비밀번호
                  td.user-psssword-current
                    input(type="password" name="user-password-current" placeholder="현재 비밀번호를 입력해주세요." minlength="6" maxlength ="20"  v-model="user.password")
                    span 6글자 이상, 12글자 이하로 작성해주세요.
                tr
                  th 비밀번호 확인
                  td.user-psssword-new
                    input(type="password" name="user-password-new-1" placeholder="새 비밀번호를 입력해주세요." minlength="6" maxlength ="20"  v-model="user.password1")
                tr
                  th 짤막한 글
                  td.user-psssword-new
                    input(type="text" name="user-comment" minlength="1" maxlength ="40"  placeholder="하고싶은 말을 여기에 작성해 주세요~" v-model="user.content")
                tr
                  th 프로필 사진
                  td.user-img
                    div(v-if="!user.img")
                      input(type="file" name="user-img" accept="image/*" @change="onFileChange")
                    div(v-else)
                      img(:src="profileImgSrc")
                      button(@click="removeImage") Remove image
            button.btn-login(type="button" value="수정 데이터 전송" @click="editSubmit") 수정완료
            button.btn-remove-account(type="button" value="계정 삭제 요청" @click="removeSubmit") 회원탈퇴

                
            //- .user-nickname
            //-   input(type="text" name="user-name" placeholder="새 별명을 입력해주세요." v-model="user.nickname"  )
            //-   span 6글자 이상, 12글자 이하로 작성해주세요.
            //- .user-psssword-current
            //-   input(type="password" name="user-password-current" placeholder="현재 비밀번호를 입력해주세요." minlength="6" maxlength ="20"  v-model="user.password")
            //-   span 비밀번호는 6자 이상입니다.
            //- .user-psssword-new
            //-   input(type="password" name="user-password-new-1" placeholder="새 비밀번호를 입력해주세요." minlength="6" maxlength ="20"  v-model="user.password1")
            //- .user-psssword-new-confirm
            //-   input(type="password" name="user-password-new-2" placeholder="새 비밀번호 확인" v-model="user.password2")
            //-   span(v-show="") 비밀번호가 동일하지 않습니다.
            //- .user-comment
            //-   input(type="text" name="user-comment" minlength="1" maxlength ="40"  placeholder="하고싶은 말을 여기에 작성해 주세요~" v-model="user.content")
            //-   //- textarea(name="user-comment" placeholder="하고싶은 말을 여기에 작성해 주세요~" v-model="user.content")
            //- .user-img
            //-   div(v-if="!user.img")
            //-     input(type="file" name="user-img" accept="image/*" @change="onFileChange")
            //-   div(v-else)
            //-     img(:src="profileImgSrc")
            //-     button(@click="removeImage") Remove image
            //- button.btn-login(type="button" value="수정 데이터 전송" @click="editSubmit") 수정완료
            //- button.btn-remove-account(type="button" value="계정 삭제 요청" @click="removeSubmit") 회원탈퇴
</template>

<script>
export default {
  name: 'user-info',
  data() {
    return {
      user: {
        nickname: '',
        password: '',
        password1: '',
        password2: '',
        content: '',
        img_profile: null,
      },
      profileImgSrc: '',
    };
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      console.log(files[0]);
      if (!files.length) {
        return;
      }
      this.user.img_profile = files[0];
      this.createImage();
    },
    createImage() {
      const image = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        this.profileImgSrc = e.target.result;
      };
      reader.readAsDataURL(this.user.img_profile);
    },
    removeImage(e) {
      this.user.img_profile = null;
    },
    editSubmit() {
      const PCBAuth = JSON.parse(window.localStorage.getItem('PCBAuth'));
      this.$http.userEdit(Object.assign(this.user, PCBAuth))
      .then((response) => {
        this.$http.userDetail(PCBAuth)
        .then((res) => {
          window.localStorage.setItem('PCBDetail', JSON.stringify(res.data));
          // this.$store.dispatch('setIsLogined');
          this.$store.dispatch('updateReadBuffer');
          console.log('유저 정보 불러오기에 성공했습니다.');
        })
        .catch((error) => {
          console.log('유저 정보 불러오기에 실패했습니다.');
          console.log(error.response);
        });

        console.log('유저 정보 수정에 성공했습니다.');
        this.$store.commit('toggleIsUserEditMode');
      })
      .catch((error) => {
        console.log('유저 정보 수정에 실패했습니다.');
        console.log(error.response);
      });
    },
    removeSubmit() {
      const PCBAuth = JSON.parse(window.localStorage.getItem('PCBAuth'));
      this.$http.removeUser(PCBAuth)
      .then((response) => {
        console.log('account remove response:', response);
        window.localStorage.clear();
        this.$store.dispatch('setIsLogined');
        this.$store.commit('resetReadBuffer');
        console.log('탈퇴에 성공했습니다.');
        this.$router.go('/');
      })
      .catch((error) => {
        console.log('탈퇴에 실패했습니다.');
        console.log(error.response);
      });
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
    input
      margin-top: 0

.user-nickname span, .user-psssword-current span
  display: block
  margin-top: 5px
  margin-left: 5px
  color: #f66b54
  font-size: 1.2rem
.user-img
  margin-top: $leading
  @extend %border-radius;
  button
    padding: 8px 9px
    @extend %border-radius;
    border: 0
    background: $base-point-color
    color: #fff
.btn-login
  width: 48%
  height: 48px
  margin-top: $leading
  margin-right: 4%
  border: none
  background: $base-color
  color: #fff
  @extend %border-radius;
.btn-remove-account
  width: 48%
  height: 48px
  margin-top: $leading
  border: none
  background: $base-point-color
  color: #fff
  @extend %border-radius;
</style>
