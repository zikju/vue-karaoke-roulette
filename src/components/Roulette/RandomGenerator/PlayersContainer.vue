<template>
<div class="col-4 mr-3" v-if="(GameMode === 'Solo' || GameMode === 'Duet') ">

  <div class="row px-2 py-4 section__wrap rounded">
    <template v-if="TotalPlayersList.length > 0">
      <div class="col-12">
        <button @click="ResetPlayersGenerator"
                class="btn btn-sm btn-outline-light btn-reset"
                v-if="SelectedPlayer"
        >Reset</button>
        <h3 class="block-title">Who will sing?</h3>

      </div>
      <div
        class="col-12 p-3"
        v-for="index in playersNumber"
        :key="index">


        <app-player
          :playerNumber="index"
          :FilteredPlayersList="FilteredPlayersList"
          @SelectedPlayer="FilterSelectedPlayer"
          :key="componentKey"
        />
      </div>
    </template>
    <template v-else>
      <div class="col text-center">
        <p class="alert alert-warning">
          Sorry, no players in the list.<br/>
          Please add names or play in "Only Songs" mode.
        </p>
      </div>
    </template>

  </div>

</div>


</template>

<script>
    import {EventBus} from '@/plugins/event-bus';
    import Player from './Player';

    export default {
        data() {
            return {
                GameMode: EventBus.GameMode,
                TotalPlayersList: EventBus.TotalPlayersList,
                EliminationMode: EventBus.EliminationMode,
                SelectedPlayer: '',
                componentKey: 0
            }
        },
        components: {
            'app-player': Player
        },
        mounted() {
            EventBus.$on('GameMode', data => {
                this.GameMode = data;
            });
            EventBus.$on('EliminationMode', data => {
                this.EliminationMode = data;
            });
            EventBus.$on('TotalPlayersList', data => {
                this.TotalPlayersList = data;
            });
        },
        methods: {
            FilterSelectedPlayer(value) {
                this.SelectedPlayer = value;
            },
            ResetPlayersGenerator() {
                this.componentKey += 1;
                this.SelectedPlayer = ''
            },
        },
        computed: {
            playersNumber() {
                switch (this.GameMode) {
                    case 'Solo':
                        return 1
                    case 'Duet':
                        return 2
                    default:
                        return 0
                }
            },

            FilteredPlayersList() {
                let PlayersList = this.TotalPlayersList;
                let SelectedPlayerName = this.SelectedPlayer.Name;

                if (this.SelectedPlayer) {
                    PlayersList = PlayersList.filter(function (player) {
                        return player.Name !== SelectedPlayerName;
                    });
                    console.log(this.SelectedPlayer.Name);
                }


                if (this.EliminationMode) {
                    return PlayersList.filter(function (player) {
                        return player.Used === false;
                    });
                }

                return PlayersList
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
