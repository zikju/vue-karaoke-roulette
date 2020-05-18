import Vue from 'vue';

import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage);

export const EventBus = new Vue({


    data(){
        return {
            GameMode: 'Duet',
            PlayersNumber: 2,
            SongsLanguage: 'Russian',
            TotalPlayersList: [],
            /*RemainingPlayersList: [],*/
        }
    },

    created(){
        /* Pre-define properties from LocalStorage data (if it exist) */
        if(this.$localStorage.get('TotalPlayersList')){
            this.TotalPlayersList = JSON.parse(this.$localStorage.get('TotalPlayersList'));
        }
        if(this.$localStorage.get('GameMode')){
            this.GameMode = this.$localStorage.get('GameMode');
        }
        if(this.$localStorage.get('SongsLanguage')){
            this.SongsLanguage = this.$localStorage.get('SongsLanguage');
        }
    }
});
