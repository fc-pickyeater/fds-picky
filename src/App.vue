<template lang="pug">
  #app(v-cloak)
    router-view(name="header")
    router-view

</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="sass">
  @import "~stylesheet"
  [v-cloak]
    display: none 
</style>