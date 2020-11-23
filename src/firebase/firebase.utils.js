import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDgt5W82hNA7Cxt06QrqU1S4orYOEg10iU",
    authDomain: "bestbuy-db.firebaseapp.com",
    databaseURL: "https://bestbuy-db.firebaseio.com",
    projectId: "bestbuy-db",
    storageBucket: "bestbuy-db.appspot.com",
    messagingSenderId: "937955869412",
    appId: "1:937955869412:web:149a7f543f9a2a236ca2f1",
    measurementId: "G-G6RRZWXPHW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

  export default firebase;