import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTxRBqAURgKOWdBEPkDGQ-a7C0nK63TZQ",
    authDomain: "sachin-arora.firebaseapp.com",
    databaseURL: "https://sachin-arora.firebaseio.com",
    projectId: "sachin-arora",
    storageBucket: "sachin-arora.appspot.com",
    messagingSenderId: "179508760020",
    appId: "1:179508760020:web:01e517911b514ff01ada41",
    measurementId: "G-BT2047K72Z",
};

export const db = firebase.initializeApp(firebaseConfig).firestore();
