import firebase from "firebase";
import 'firebase/app';
// import * as firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDPTma4tP5ITlmIyVXW2Jazh3YyDkpxtsI",
    authDomain: "whatapp-clone-r1.firebaseapp.com",
    databaseURL: "https://whatapp-clone-r1-default-rtdb.firebaseio.com",
    projectId: "whatapp-clone-r1",
    storageBucket: "whatapp-clone-r1.appspot.com",
    messagingSenderId: "427305687817",
    appId: "1:427305687817:web:926f0d2e4244053128d1d8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore(firebaseApp)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();
  const firestore = firebase.firestore()

  export {auth,provider,firestore} ;
  export default db;