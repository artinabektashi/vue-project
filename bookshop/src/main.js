import Vue from "vue";
import App from "./App.vue";
import jQuery from "jquery";
import router from "./router";
window.$ = window.jQuery = jQuery;
import firebase from "firebase/compat/app";
require("firebase/compat/firestore");
import VueFirestore from "vue-firestore";
import Swal from "sweetalert2";
import "popper.js";
import "bootstrap";
import "./assets/app.scss";
import "firebase/compat/storage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import storeUser from "./storeUser/index.js";


import store from "./store.js";

Vue.use(VueFirestore, {
  key: "id",
  enumerable: true,
});

window.Swal = Swal;

Vue.use(VueFirestore);

Vue.component("mini-cart", require("./components/MiniCart.vue").default);
Vue.component("add-to-cart", require("./components/AddToCart.vue").default);
Vue.component("Navbar", require("./components/Navbar.vue").default);
Vue.component("products-list", require("./sections/ProductsList.vue").default);

import Vue2Filters from "vue2-filters";
Vue.use(Vue2Filters);

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);


const firebaseConfig = {
  apiKey: "AIzaSyB8oqmOvXXbxFogDCYGwSnt9VgrpkJS2Wg",
  authDomain: "library-1ef59.firebaseapp.com",
  projectId: "library-1ef59",
  storageBucket: "library-1ef59.appspot.com",
  messagingSenderId: "83149644970",
  appId: "1:83149644970:web:4c4d96de8d650e7abc5cd3",
  measurementId: "G-BCVDZ9CDCJ"
};
firebase.initializeApp(firebaseConfig);

onAuthStateChanged(getAuth(), (user) => {
  storeUser.dispatch("fetchUser", user);
});


const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

window.Toast = Toast;

Vue.config.productionTip = false;

let app = "";

firebase.auth().onAuthStateChanged(function () {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});

const db = firebase.firestore();
export { db };
