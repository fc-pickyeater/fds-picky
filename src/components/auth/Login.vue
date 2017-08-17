<template lang="pug">
.login
  .login-form-group
    input(type="email" v-model="email")
    input(type="password" v-model="password")
    button(type="button" @click="signIn") login
    //- button(type="button" @click="googleSignIn") login via a Google account
</template>

<script>
import firebase from 'firebase';
import { mapActions } from 'vuex';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      this.loginWithEmailAndPassword({ email: this.email, password: this.password });
      this.email = '';
      this.password = '';
    },
    googleSignIn() {
      this.loginWithGoogleAccount();
    },
    ...mapActions('userData', [
      'loginWithEmailAndPassword', 'loginWithGoogleAccount',
    ]),
  },
};
</script>

<style lang="sass">

</style>
