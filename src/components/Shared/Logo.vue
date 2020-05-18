<template>
  <div>
    <div class="top-logo text-center animated pulse infinite slower">
      KARAOKE-ROULETTE
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
  .top-logo {
    position: relative;
    font-size: 3em;
    font-family: 'Russo One', sans-serif;
    width: 100%;
    box-sizing: content-box;
    color: #801515;
    text-align: center;
    text-overflow: ellipsis;
    text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px #ffcc00, 0 0 70px #ff1177, 0 0 80px #ff1177, 0 0 100px #ff1177, 0 0 150px #ff1177;

    &.pulse {
      animation-duration: 15s;
    }
  }
</style>
