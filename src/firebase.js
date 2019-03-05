
  import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBGZuXf8tmpDqdKwGCdpYPu1npM3a4bhhc",
    authDomain: "vue-shop-c073a.firebaseapp.com",
    databaseURL: "https://vue-shop-c073a.firebaseio.com",
    projectId: "vue-shop-c073a",
    storageBucket: "vue-shop-c073a.appspot.com",
    messagingSenderId: "280128546162"
  };

  export const fb = firebase.initializeApp(config);