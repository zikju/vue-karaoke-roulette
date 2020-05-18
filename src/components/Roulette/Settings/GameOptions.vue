<template>
    <div>
        <div class="row mb-3">
            <div class="col-12 form-group">
              <h3>Game Settings</h3>
                <label for="GameModeOptions" class="form-inline">Game Mode:</label>
                <div class="btn-group btn-group-toggle" data-toggle="buttons" aria-label="Game Mode" id="GameModeOptions">
                    <label class="form-control btn"
                           :class="[GameMode === 'Solo' ? 'btn-warning' : 'btn-secondary']"
                           data-toggle="tooltip" title="Hooray!"
                    >
                        <input type="radio" name="GameMode" value="Solo" v-model="GameMode">
                        <font-awesome-icon icon="user"></font-awesome-icon> Solo
                    </label>
                    <label class="form-control btn" :class="[GameMode === 'Duet' ? 'btn-warning' : 'btn-secondary']">
                        <input type="radio" name="GameMode" value="Duet" v-model="GameMode" @click="SelectDuet">
                        <font-awesome-icon icon="user-friends"></font-awesome-icon> Duet
                    </label>
                    <label class="form-control btn" :class="[GameMode === 'OnlySongs' ? 'btn-warning' : 'btn-secondary']">
                        <input type="radio" name="GameMode" value="OnlySongs" v-model="GameMode">
                        <font-awesome-icon icon="music"></font-awesome-icon> Only Songs
                    </label>
                </div>
            </div>

          <div class="col-12 form-group">
            <label for="SongsLanguageOptions" class="form-inline">Songs Language:</label>
            <div class="btn-group btn-group-toggle" data-toggle="buttons" aria-label="Songs language" id="SongsLanguageOptions">
              <label class="form-control btn" :class="[SongsLanguage === 'Russian' ? 'btn-warning' : 'btn-secondary']">
                <input type="radio" name="SongsLanguage" value="Russian" autocomplete="off"
                       v-model="SongsLanguage">
                <img src="@/assets/img/flag_russia.png" class="icon_flag" alt="">
                Russian
              </label>
              <label class="form-control btn" :class="[SongsLanguage === 'English' ? 'btn-warning' : 'btn-secondary']">
                <input type="radio" name="SongsLanguage" value="English" autocomplete="off"
                       v-model="SongsLanguage">
                <img src="@/assets/img/flag_usa.png" class="icon_flag" alt="">
                English
              </label>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import { EventBus } from '@/plugins/event-bus';
    import swal from 'sweetalert2';

    export default {

        data() {
            return {
                GameMode: EventBus.GameMode,
                SongsLanguage: EventBus.SongsLanguage,
                TotalPlayersList: EventBus.TotalPlayersList
            }
        },
        methods:{
            SelectDuet: function (e) {
                if (this.TotalPlayersList.length < 4) {
                    swal({
                        title: 'Ooops..',
                        text: 'To play in Duet Mode you have to add more than 3 players',
                        type: 'error',
                        confirmButtonText: 'Got it'
                    });
                    e.preventDefault()
                } else {
                    this.GameMode = e.target.checked
                }
            }
        },
        watch:{
            /* Update EventBus and LocalStorage
             (on 'GameMode', 'SongsLanguage', 'EliminationMode' change)
             */
            GameMode: function(newVal) {
                EventBus.$emit('GameMode', newVal);
                this.$localStorage.set('GameMode', newVal);
            },
            SongsLanguage: function(newVal) {
                this.$localStorage.set('SongsLanguage', newVal);
                EventBus.$emit('SongsLanguage', newVal);

            }

        }
    }
</script>

<style lang="scss" scoped>
.icon_flag{
  width: 24px;
}
</style>
