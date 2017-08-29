<template lang="pug">
div
  header(role="banner" v-show="this.$store.getters.getIsHome")    
    .container
      .grid
        logo.logo.col.col-d-4.col-d-push-4.col-t-4.col-t-push-2.col-m-2.col-m-push-1.mt-1
        navigation.col.col-d-1.col-d-pull-4.col-t-1.col-t-1.col-t-pull-4.col-m-1.col-m-pull-2.mt-1.zindex
        auth-buttons.col.col-d-2.col-d-push-4.col-t-2.col-t-push-1.col-m-1.mt-1
        search-form.col.col-d-8.col-d-pull-2d.search-form
      div.video-bg
      video.main-video(autoplay="autoplay" loop="loop")
        source(src="../../assets/video/cookbook2.webm" type="video/webm")
        source(src="../../assets/video/cookbook2.mp4" type="video/mp4")
  header.header(role="banner" v-show="!this.$store.getters.getIsHome")
    .container
      .grid
        logo.col.col-d-2.col-d-push-1.col-t-2.col-t-push-3.col-m-2.col-m-push-1
        navigation.col.col-d-1.col-d-pull-2.col-t-1.col-t-pull-2.col-m-1.col-m-pull-2.mt-1.zindex
        auth-buttons.col.col-d-2.col-d-push-7.col-t-2.col-t-push-3.col-m-1.mt-1
        search-form.col.col-d-7.col-d-pull-2.mt-1

</template>

<script>
import Logo from '@/components/header/Logo';
import Navigation from '@/components/header/Navigation';
import AuthButtons from '@/components/header/AuthButtons';
import SearchForm from '@/components/header/SearchForm';

export default {
  name: 'header',
  components: {
    Logo, Navigation, AuthButtons, SearchForm,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="sass" scoped>
@import "../../sass/stylesheet" 

header
  position: relative
  z-index: 9
.search-form
  @include breakpoint(desktop)
    top: 300px
    left: -225px
  @include breakpoint(tablet)
    top: 50px
    // left: -225px
  @include breakpoint(mobile)
    top: 50px
    // left: -225px
.header
  padding-bottom: 10px
  background: #1d192c
  @include breakpoint(mobile)
    text-align: center
  @include breakpoint(tablet)
    text-align: center
.zindex
  z-index: 9
.video-bg
  width: auto
  height: 100vh
  min-width: 100%
  min-height: 100%
  background: url('../../assets/main/movie_dim.png') center center fixed
  z-index: -99
  position: absolute
  top: 0
  left: 0

.main-video
  z-index: -999
  position: fixed
  top: 0
  left: 0 
  width: auto
  height: auto
  min-width: 100%
  min-height: 100%
  overflow: hidden

.main-bg
  height: 100vh
  background: #fff url('../../assets/main/main_bg.jpg') no-repeat center center fixed
  background-size: cover

</style>