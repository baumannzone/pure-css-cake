<template>
  <div class="birthday-cake">
    <div class="cake"></div>
    <div class="base">
      <div class="base-1"></div>
      <div class="base-2"></div>
      <div class="base-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssCake"
};
</script>

<style lang="stylus">
.birthday-cake
  .base
    .base-1
      width 450px
      height 30px
      background-color black
      border-bottom-left-radius 30px
      border-bottom-right-radius 30px

    .base-2
      width 100px
      height 50px
      margin 0 auto
      background-color black

    .base-3
      width 200px
      height 30px
      margin 0 auto
      border-top-left-radius 10px
      border-top-right-radius 10px
      background-color black
</style>
