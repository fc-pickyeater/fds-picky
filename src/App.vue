<template lang="pug">
  #app
    router-view(name="header")
    hr
    router-view
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="sass">
html
  font-size: 100%
  background: #fff
body
  margin: 0
    left: 50px
#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin-top: 60px
  text-align: left
  color: #2c3e50
  ul
    text-align: left
</style>