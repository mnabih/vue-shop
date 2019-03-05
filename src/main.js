import Vue from "vue";
import App from "./App.vue";
import router from "./router";


import jQuery from "jquery";
window.$ = window.jQuery = jQuery; // make it global and define $ 

import "popper.js";
import "bootstrap";  // for bootstrab js files
import "./assets/app.scss"; // for bootstrab css files

Vue.component('navbar', require('./components/navbar.vue').default);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
