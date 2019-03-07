import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import {fb}   from './firebase'


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
