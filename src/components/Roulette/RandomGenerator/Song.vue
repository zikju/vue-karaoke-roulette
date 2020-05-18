<template>
  <div class="col-7">
    <div class="row mb-3 px-2 py-4 section__wrap rounded">
      <div class="col-12">

        <h3 class="block-title">
          What song to sing?
          <button @click="ResetSongGenerator"
                  class="btn btn-sm btn-outline-light btn-reset"
                  v-if="SongItem"
          >Reset</button>
        </h3>
      </div>
      <div class="col text-center" v-if="SongsList.length > 0">
        <div class="randomOutput__wrap">
          <div v-if="SongItem"
               v-html="$options.filters.formatSongTitle(SongItem.title)"
               class="songTitle"></div>
          <div v-else class="placeholder">
            pick random song →
          </div>

          <button class="btn btn-primary" @click="StartSongGenerator" v-if="!generatorStarted">
            <font-awesome-icon icon="play"></font-awesome-icon>
            Spin
          </button>
          <button class="btn btn-light" @click="StopSongGenerator" v-else>
            <font-awesome-icon icon="stop"></font-awesome-icon>
            Stop
          </button>
        </div>
        <div class="row mt-3" v-if="SongItem && !generatorStarted">
          <div class="col-12">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" :src="'https://www.youtube.com/embed/'+SongItem.youtube_id"
                      allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          </div>
        </div>

      </div>
      <div v-else>
        <h4>List of Songs is empty...</h4>
      </div>


    </div>
  </div>

</template>

<script>

    import RUSSIAN_KARAOKE from '@/json/karaoke_russian';
    import ENGLISH_KARAOKE from '@/json/karaoke_english';
    import {EventBus} from '@/plugins/event-bus';

    export default {
        data() {
            return {
                SongItem: null,
                SongsLanguage: EventBus.SongsLanguage,
                generatorStarted: null
            }
        },
        mounted() {
            EventBus.$on('SongsLanguage', data => {
                this.SongsLanguage = data;
            });

        },
        methods: {
            StartSongGenerator() {
                this.generatorStarted = setInterval(() => {
                    this.SongItem = this.SongsList[Math.floor(Math.random() * this.SongsList.length)];
                }, 50);
            },
            StopSongGenerator() {
                clearInterval(this.generatorStarted);
                this.generatorStarted = null;
            },
            ResetSongGenerator() {
                this.generatorStarted = null;
                this.SongItem = null
            }
        },
        computed: {
            SongsList: function () {
                if (this.SongsLanguage === 'Russian') {
                    return RUSSIAN_KARAOKE
                }
                if (this.SongsLanguage === 'English') {
                    return ENGLISH_KARAOKE
                }
            },

        },
        filters: {
            // Split song title to 2 divs (artist and song name)
            formatSongTitle: function (value) {
                if (!value) return '';
                let arr = value.split(' - ');
                return '<div>'+arr[0]+ '</div> <div class="text-blue">'+ arr[1] +'</div>';
            }
        },
        beforeDestroy() {
            EventBus.$off('SongsLanguage');
        }
    }
</script>

<style lang="scss" scoped>

.songTitle{
  //display: inline-block;
  width: 100%;
  line-height: 1.5;
}

</style>
