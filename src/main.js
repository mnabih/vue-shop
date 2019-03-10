import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import {fb}   from './firebase'

import VueFirestore from 'vue-firestore'
require('firebase/firestore')
//Vue.use(VueFirestore)
// from package vue-firestore to call id
Vue.use(VueFirestore, {
  key: 'id',         // the name of the property. Default is '.key'.
  enumerable: true  //  whether it is enumerable or not. Default is true.
})

import Swal from 'sweetalert2'
window.Swal = Swal;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});
window.Toast = Toast;







import jQuery from "jquery";
window.$ = window.jQuery = jQuery; // make it global and define $ 

import "popper.js";
import "bootstrap";  // for bootstrab js files
import "./assets/app.scss"; // for bootstrab css files

Vue.component('navbar', require('./components/navbar.vue').default);

Vue.config.productionTip = false;

let app = ''; // with refresh app null for next check if authentication
fb.auth().onAuthStateChanged(function(user) { // Adds an observer for changes to the user's sign-in state

  if(!app){
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");

  }


});

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount("#app");
