import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDJReJX68iXsm3ezBleCphQssMX_JHeiA0",
    authDomain: "beta-testing-e20d1.firebaseapp.com",
    databaseURL: "https://beta-testing-e20d1.firebaseio.com",
    projectId: "beta-testing-e20d1",
    storageBucket: "beta-testing-e20d1.appspot.com",
    messagingSenderId: "241161178252",
    appId: "1:241161178252:web:b0b7ed565576ccd6727fa9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  export {db};
  