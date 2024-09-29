import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import css global
import './assets/css/styleGlobal.css'

// import slick
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


// import bootstrap 
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// use bootstrap 
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// Importer les éléments de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'; // Exemple d'icône
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Ajouter des icônes à la bibliothèque
library.add(faUserSecret);

// Enregistrer le composant FontAwesomeIcon globalement
Vue.component('font-awesome-icon', FontAwesomeIcon);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
