<template>
  <div class="settingsModal">

    <div class="row mb-5 p-sm-5 settingsWrap rounded">
      <button class="btn btn-outline-light btn-close" @click="$emit('close')">
        <font-awesome-icon icon="times"></font-awesome-icon>
      </button>
      <div class="col">
        <app-game-options/>
      </div>
      <div class="col">
        <app-players-list/>
      </div>
    </div>
  </div>
</template>

<script>
    import GameOptions from './GameOptions';
    import PlayersList from './PlayersList';

    export default {
        components: {
            'app-game-options': GameOptions,
            'app-players-list': PlayersList
        }
    }
</script>

<style lang="scss" scoped>
  .settingsModal{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    .settingsWrap {
      position: relative;
      margin: auto;
      top:12%;
      width:85%;
      background: #200122;  /* fallback for old browsers */
      background: linear-gradient(to right, #6f0000, #200122);
      border: 1px solid white;
      .btn-close{
        position: absolute;
        top:5px;
        right: 5px;
        float: right;
      }

    }
  }
</style>
