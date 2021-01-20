<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png" />-->
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
  background-color #946def

#app
  display flex
  justify-content center
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  margin-top 60px
</style>
