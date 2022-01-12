import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBrpSq5OMZP5lFIDhT8z5mIiGOO2TbDPMU",
    authDomain: "slack-app-e7152.firebaseapp.com",
    projectId: "slack-app-e7152",
    storageBucket: "slack-app-e7152.appspot.com",
    messagingSenderId: "1074643296172",
    appId: "1:1074643296172:web:06c88cb29a56e4071fa409"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export default db;
  export {auth, provider}