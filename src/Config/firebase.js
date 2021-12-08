// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4OxU68SesQtMGGNdvysyTRdFVPM4nS1s",
  authDomain: "mepopycakes.firebaseapp.com",
  projectId: "mepopycakes",
  storageBucket: "mepopycakes.appspot.com",
  messagingSenderId: "937524735719",
  appId: "1:937524735719:web:cc42f5a6d2aaec8b20fc42",
  measurementId: "G-1MVBHW7CBT"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.st = firebase.storage();

export default firebase