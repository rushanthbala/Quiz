import firebase from "firebase";
import "firebase/app";
// import * as firebase from 'firebase';
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBzqwSlKKnqFV7M-fUHQZr8SeKkdnZ6ps8",
  authDomain: "scholarship-quiz-57e1c.firebaseapp.com",
  projectId: "scholarship-quiz-57e1c",
  storageBucket: "scholarship-quiz-57e1c.appspot.com",
  messagingSenderId: "483450914825",
  appId: "1:483450914825:web:00277bb194f53b80f490d8",
  measurementId: "G-EQFG218THX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const firestore = firebase.firestore();

export { auth, provider, firestore };
export default db;
