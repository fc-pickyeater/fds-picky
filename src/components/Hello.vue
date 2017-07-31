<template lang="pug">
  .hello
    h1 {{ msg }}
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'template 설치 완료',
    };
  },
};
</script>

<style scoped  lang="sass">

</style>
