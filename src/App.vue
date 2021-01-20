<template>
  <div id="app">
    <CssCake />
  </div>
</template>

<script>
import CssCake from "./components/CssCake.vue";

export default {
  name: "App",
  components: {
    CssCake
  }
};
</script>

<style lang="stylus">
body
  background-color #a8ecc1

#app
  display flex
  justify-content center
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  margin-top 20px
</style>
