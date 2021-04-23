import firebase from 'firebase'

var firebaseConfig = {
   //paste your firebase config here
  };
 
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  export {db};
  