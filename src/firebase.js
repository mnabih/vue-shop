
  import firebase from 'firebase';
  require("firebase/firestore");

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDtAhlCsYL_PZX6eZup9c38ZqKJMKpEoQQ",
    authDomain: "vue-shop-learn.firebaseapp.com",
    databaseURL: "https://vue-shop-learn.firebaseio.com",
    projectId: "vue-shop-learn",
    storageBucket: "vue-shop-learn.appspot.com",
    messagingSenderId: "553393956786"

  };

  export const fb = firebase.initializeApp(config);
  export const db = firebase.firestore();