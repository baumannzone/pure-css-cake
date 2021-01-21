<template>
  <div>
    <h1>Happy birthday! 🎉</h1>
    <div class="birthday-cake">
      <div class="candle">
        <div class="fire">
          <div class="inner-fire"></div>
        </div>
      </div>
      <div class="extra"></div>
      <div class="cake">
        <div class="top"></div>
      </div>
      <div class="base">
        <div class="base-1"></div>
        <div class="base-2"></div>
        <div class="base-3"></div>
      </div>
    </div>
    <p>
      <a href="https://twitter.com/baumannzone">Baumannzone</a> ·
      <a href="https://github.com/baumannzone/pure-css-cake">GitHub</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "CssCake"
};
</script>

<style lang="stylus">
base-color = #607d8b
base-border-color = darken(base-color, 15%)

cake-color = #f5f1dd
cake-lines-color = #cba15f

chocolate-color = #6b46c1

candle-color = #9e9e9e

h1
  text-align center
  margin-bottom 100px

p
  margin-top 100px
  text-align center

  a
    color chocolate-color

.birthday-cake
  margin-top 50px
  .candle
    position relative
    width 20px
    height 80px
    background-color candle-color
    margin 0 auto

    &:after
      content ''
      position absolute
      top -12px
      left calc(50% - 2px)
      width 4px
      height 12px
      background-color #555

    .fire
      position absolute
      opacity .7
      background yellow
      width 40px
      height 40px
      margin-top -45px
      transform rotate(45deg)
      left calc(50% - 20px)
      border-top-right-radius 30px
      border-bottom-left-radius 30px
      border-bottom-right-radius 30px

    .inner-fire
      position relative
      opacity .5
      background orange
      width 20px
      height 20px
      top 14px
      left 14px
      border-top-right-radius 30px
      border-bottom-left-radius 30px
      border-bottom-right-radius 30px

  .extra
    margin 0 auto
    background-color chocolate-color
    width 220px
    height 50px
    border-top-left-radius 30px
    border-top-right-radius 30px

  .cake
    position relative
    width 400px
    height 180px
    margin 0 auto
    border-top-left-radius 40px
    border-top-right-radius 40px
    background-color cake-color

    &:after,
    &:before
      content ''
      position absolute
      width 400px
      height 20px
      background-color cake-lines-color
      bottom 0

    &:after
      margin-bottom 30px

    &:before
      margin-bottom 70px

    .top
      position relative
      width 400px
      height 50px
      border-top-left-radius 40px
      border-top-right-radius 40px
      background-color chocolate-color

      &:before
        content ''
        position absolute
        width 25px
        height 45px
        top 40px
        border-bottom-left-radius 40px
        border-bottom-right-radius 40px
        background-color chocolate-color
        box-shadow 50px -12px chocolate-color,
        100px -7px chocolate-color,
        150px 0 chocolate-color,
        200px 10px chocolate-color,
        250px -1px chocolate-color,
        300px -10px chocolate-color,
        350px 0px chocolate-color

      &:after
        content ''
        position absolute
        width 25px
        height 45px
        top 38px
        left 25px
        border-top-left-radius 50px
        border-top-right-radius 50px
        background-color cake-color
        box-shadow 50px -15px cake-color,
        100px -10px cake-color,
        150px -7px cake-color,
        200px -2px cake-color,
        250px -5px cake-color,
        300px -10px cake-color,
        350px 0px cake-color

  .base
    .base-1
      width 450px
      height 30px
      background-color base-color
      border-top 5px solid base-border-color
      border-bottom-left-radius 30px
      border-bottom-right-radius 30px

    .base-2
      width 100px
      height 50px
      margin 0 auto
      border-top 10px solid base-border-color
      background-color base-color

    .base-3
      width 200px
      height 30px
      margin 0 auto
      border-top-left-radius 10px
      border-top-right-radius 10px
      background-color base-color
</style>
