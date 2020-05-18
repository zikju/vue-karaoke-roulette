import Vue from 'vue'
import App from './App.vue'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faStop, faUser, faUserFriends, faMusic, faTimes, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPlay, faStop, faUser, faUserFriends, faMusic, faTimes, faCogs);
Vue.component('font-awesome-icon', FontAwesomeIcon);

// Vue LocalStorage
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage);


const vm = new Vue({
  el: '#app',
  render: h => h(App)
});
