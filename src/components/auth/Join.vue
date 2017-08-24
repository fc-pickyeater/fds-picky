<template lang="pug"> 
main.mt-2(role="main")
  .container
    .grid
      .col.col-d-6.col-d-push-3.col-t-6.col-t-push-1.login-wrap
        h2.h2-title 회원가입
        form
          fieldset
            legend.a11y-hidden 회원가입 입력 폼
            .user-email
              input(type="email" name="user-email" placeholder="이메일을 입력해주세요." v-model="user_join.email" required)
              span(v-show="") 올바른 이메일 형식이 아닙니다.
            .user-nickname
              input(type="text" name="user-name" placeholder="닉네임을 입력해주세요." v-model="user_join.nickname"   required)
              span 6글자 이상, 12글자 이하로 작성해주세요.
            .user-psssword
              input(type="password" name="user-password1" placeholder="비밀번호를 입력해주세요." minlength="6" maxlength ="20"  v-model="user_join.password1" required)
              span 비밀번호는 6자 이상입니다.
            .user-psssword-confirm
              input(type="password" name="user-password2" placeholder="비밀번호 확인" v-model="user_join.password2" required)
              span(v-show="") 비밀번호가 동일하지 않습니다.
            .user-comment
              textarea(name="user-comment" placeholder="하고싶은 말을 여기에 작성해 주세요~" v-model="user_join.content")
            .user-img
              div(v-if="!user_join.img_profile")
                input(type="file" name="user-img" accept="image/*" @change="onFileChange")
              div(v-else)
                img(:src="profileImgSrc")
                button(@click="removeImage") Remove image
            button.btn-login(type="button" value="로그인 전송" @click="joinSubmit") 가입하기
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      user_join: {
        email: '',
        nickname: '',
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
      this.user_join.img_profile = files[0];
      this.createImage();
    },
    createImage() {
      const image = new Image();
      const reader = new FileReader();

      reader.onload = (e) => {
        this.profileImgSrc = e.target.result;
      };
      reader.readAsDataURL(this.user_join.img_profile);
    },
    removeImage(e) {
      this.user_join.img_profile = null;
    },
    joinSubmit() {
      this.$http.join(this.user_join)
      .then((response) => {
        window.localStorage.setItem('PCBAuth', JSON.stringify(response.data));
        console.log('회원가입이 완료되었습니다.');
        console.log('자동 로그인 되었습니다.');

        this.$http.userDetail(response.data)
        .then((res) => {
          window.localStorage.setItem('PCBDetail', JSON.stringify(res.data));
          this.$store.dispatch('setIsLogined');
          this.$store.dispatch('updateReadBuffer');
          console.log('유저 정보 불러오기에 성공했습니다.');
        })
        .catch((error) => {
          console.log('유저 정보 불러오기에 실패했습니다.');
          console.log(error.response);
        });

        this.$router.back();
      })
      .catch((error) => {
        console.log('회원가입에 실패했습니다.');
        console.log(error);
      });
    },
  },
};
</script>

<style lang="sass">
@import "../../sass/stylesheet" 

.login-wrap
  min-height: 300px
  border: 1px solid #ddd
  padding: 21px 68px
  background:  #fff
  @include breakpoint(mobile)
    padding: 21px 50px
  
.btn-login
  width: 100%
  height: 48px
  margin-top: $leading
  border: none
  background: $base-color
  color: #fff
  @extend %border-radius;
.user-email span, .user-nickname span, .user-psssword span, .user-psssword-confirm span
  display: block
  margin-top: 5px
  margin-left: 5px
  color: #f66b54
  font-size: 1.2rem
  
textarea
  width: 100%

.user-img img
  width: 50%
  height: 50%
</style>
