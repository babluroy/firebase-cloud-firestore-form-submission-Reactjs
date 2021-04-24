import firebase from 'firebase'

var firebaseConfig = {
    //paste your config here
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  export {db};
  