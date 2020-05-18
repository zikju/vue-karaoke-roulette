<template>
  <div>
    <h3>Players List:</h3>
    <form class="form-inline" v-on:submit.prevent="addNewPlayer">
      <div class="form-group mr-3 mb-2 text-center">
        <label for="inputNewPlayer" class="sr-only">Player name</label>
        <input type="text"
               class="form-control newPlayer__input"
               id="inputNewPlayer"
               placeholder="Insert player name"
               v-model="NewPlayerName"
               v-bind:maxlength="NewPlayerNameLength"
               autocomplete="off"
        >
      </div>
      <button type="submit" class="btn btn-primary mb-2" :disabled="!NewPlayerName">Add Player</button>

      <div class="form-group">
        <div class="small ml-2">
          <span v-if="NewPlayerName">{{NewPlayerName.length}}</span>
          <span v-else>0</span> / {{ NewPlayerNameLength }}
        </div>
      </div>
    </form>

    <div v-if="TotalPlayersList.length > 0">
      <h5>Players: {{TotalPlayersList.length}}</h5>
      <transition-group name="fade">
        <app-chip v-for="(player, n) in TotalPlayersList" :key="n" :class="{used:  player.Used === true}">
          <span> {{ player.Name }} </span>
          <button type="button" class="md-chip-remove" @click="deletePlayer(n)">
          </button>
        </app-chip>
      </transition-group>
    </div>
  </div>
</template>

<script>
    import {EventBus} from '@/plugins/event-bus';
    import swal from 'sweetalert2';
    import Chip from '@/components/Shared/Chip';

    export default {
        components: {
            appChip: Chip
        },
        data() {
            return {
                NewPlayerName: '',
                NewPlayerNameLength: 15,
                TotalPlayersList: EventBus.TotalPlayersList,
                EliminationMode: false
            }
        },
        methods: {

            /* Add new player */
            addNewPlayer() {

                // Check if input value not empty
                if (this.NewPlayerName) {

                    // Check if Player Name already exist
                    if (!this.validatePlayerName(this.NewPlayerName)) {
                        return;
                    }

                    // Add new Player Name to Total players list
                    this.TotalPlayersList.push(
                        {
                            Name: this.NewPlayerName,
                            Used: false
                        }
                    );

                    // Clear Input
                    this.NewPlayerName = null;

                }
            },
            /* Check if Player Name already in list */
            validatePlayerName(name) {
                if (this.TotalPlayersList.length > 0) {
                    let ind = this.TotalPlayersList.map((el) => el.Name).indexOf(name);
                    if (ind >= 0) {
                        // Show alert with error
                        swal.fire({
                            title: 'Ooops..',
                            text: 'Player ' + name + ' is already in list',
                            type: 'error',
                            confirmButtonText: 'Got it'
                        });
                        return false;
                    }
                    return true;
                }
                return true;

            },

            /* Delete Player (by index id) from the Game */
            deletePlayer(n) {
                // Remove from Total players list
                this.TotalPlayersList.splice(n, 1);
            }
        },
        watch: {
            TotalPlayersList: function (newVal) {
                this.$localStorage.set('TotalPlayersList', JSON.stringify(newVal));
                EventBus.$emit('TotalPlayersList', newVal);
            }
        }
    }
</script>

<style lang="scss" scoped>
  $input-placeholder-color: rgba(248, 249, 250, 0.24);
  $input-placeholder-text-transform: initial;
  .newPlayer__input {
    border: 1px solid rgba(248, 249, 250, 0.24);
    background: transparent;
    color: #fafafa;
    text-transform: uppercase;
    letter-spacing: 1px;

    &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: $input-placeholder-color;
      text-transform: $input-placeholder-text-transform;
    }

    &::-moz-placeholder { /* Firefox 19+ */
      color: $input-placeholder-color;
      text-transform: $input-placeholder-text-transform;
    }

    &:-ms-input-placeholder { /* IE 10+ */
      color: $input-placeholder-color;
      text-transform: $input-placeholder-text-transform;
    }

    &:-moz-placeholder { /* Firefox 18- */
      color: $input-placeholder-color;
      text-transform: $input-placeholder-text-transform;
    }
  }
</style>
