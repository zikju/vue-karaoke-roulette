<template>
  <div>
    <div class="randomOutput__wrap text-center">
        <span v-if="playerSelected"
              v-model="playerSelected">
         {{ playerSelected.Name }}
        </span>
      <span v-else
            class="placeholder">
         Pick Player
        </span>

      <button v-if="!generatorStarted"
              class="btn btn-primary"
              @click="StartPlayerGenerator"
              :disabled="FilteredPlayersList.length < 1">
        <font-awesome-icon icon="play"></font-awesome-icon>
        Spin
      </button>

      <button v-else
              class="btn btn-light"
              @click="StopPlayerGenerator"
              :disabled="FilteredPlayersList.length < 1">
        <font-awesome-icon icon="stop"></font-awesome-icon>
        Stop
      </button>


    </div>
    <div>

    </div>
  </div>
</template>

<script>
    export default {
        props: {
            playerNumber: {
                type: Number
            },
            FilteredPlayersList: {
                type: Array, Object
            }
        },
        data() {
            return {
                playerSelected: null,
                generatorStarted: null,
            }
        },
        methods: {

            /* Start generator to pick random player name */
            StartPlayerGenerator() {
                this.generatorStarted = setInterval(() => {
                    this.playerSelected = this.FilteredPlayersList[Math.floor(Math.random() * this.FilteredPlayersList.length)];
                }, 50);
            },

            /* Stop generator */
            StopPlayerGenerator() {
                clearInterval(this.generatorStarted); // clear generator
                this.generatorStarted = null;
                this.$emit('SelectedPlayer', this.playerSelected)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
