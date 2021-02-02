import firebase from 'firebase/app'
  
require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')
require('firebase/functions')

  var firebaseConfig = {
    apiKey: "AIzaSyAYezENZ9D5upeDeLrNJbL2hmkEUNpJNZQ",
    authDomain: "vueecom-fb6d3.firebaseapp.com",
    projectId: "vueecom-fb6d3",
    storageBucket: "vueecom-fb6d3.appspot.com",
    messagingSenderId: "91002594411",
    appId: "1:91002594411:web:4ea5154f78c9e4ee62bd2e",
    measurementId: "G-0Z9P3JM5DN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.analytics();
  
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();

export {
    firebase,auth,db,storage,functions
}