<template lang="pug">
div(:class="{logo: this.$store.getters.getIsHome, 'small-logo': !this.$store.getters.getIsHome}")
  h1.a11y-hidden Picky Cook Book
  a(href="/" title="pickycookbok" aria-label="pickcookbook")
    img(src="../../assets/header/logo.png" v-show="this.$store.getters.getIsHome")
    img(src="../../assets/header/small_logo.png" alt="small_logo" v-show="!this.$store.getters.getIsHome")
</template>

<script>
export default {
  name: 'logo',
};
</script>

<style lang="sass" scoped>
@import "~stylesheet"
.logo, .small-logo
  margin-top: $leading * 5
  @include breakpoint(mobile)
    text-align: center
  @include breakpoint(tablet)
    text-align: center
  img
    max-width: 100%
.small-logo
  margin-top: -4px
</style>
