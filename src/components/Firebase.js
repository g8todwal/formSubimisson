import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpGWrIV9QzClFCstKBea3emtLjoKWrKT4",
  authDomain: "project-form-133.firebaseapp.com",
  databaseURL: "https://project-form-133.firebaseio.com",
  projectId: "project-form-133",
  storageBucket: "project-form-133.appspot.com",
  messagingSenderId: "193902207144",
  appId: "1:193902207144:web:eeb6e2c657a2b82050a29d",
  measurementId: "G-TTZ45HGH67",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
