<template>
    <div>
      <div class="row mt-2 justify-content-center">
        <button class="btn btn-settings btn-dark"
                @click="showSettings = !showSettings"
                ref="openSettingsBtn">
          <font-awesome-icon icon="cogs"></font-awesome-icon> SETTINGS
        </button>

        <!-- Settings modal -->
        <transition name="slideDown">
          <app-settings
            v-show="showSettings"
            @close="showSettings = false"
          />
        </transition>
        <!-- Random player output -->
        <app-players-container></app-players-container>

        <!-- Random song output -->
        <app-random-song></app-random-song>

      </div>


    </div>
</template>

<script>
    import Settings from './Settings/Settings';
    import PlayersContainer from './RandomGenerator/PlayersContainer';
    import RandomSong from './RandomGenerator/Song';

    export default {
        data(){
            return{
                showSettings: false
            }
        },
        components: {
            'app-settings': Settings,
            'app-players-container': PlayersContainer,
            'app-random-song': RandomSong,
        }
    }
</script>

<style lang="scss">
  .btn-settings{
    position: absolute;
    top: 30px;
    right: 4%;
    z-index: 2;
  }
</style>
