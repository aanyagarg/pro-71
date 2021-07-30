import * as firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBiW0uIg6xhKOt7PklcM9mkD18-tr6doFo",
    authDomain: "pro-storyhub.firebaseapp.com",
    projectId: "pro-storyhub",
    storageBucket: "pro-storyhub.appspot.com",
    messagingSenderId: "723975861019",
    appId: "1:723975861019:web:187c1f21ff4e9c76ad99be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();