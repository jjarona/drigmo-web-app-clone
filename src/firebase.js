import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database
import "firebase/auth";  // If using Firebase authentication

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAilf1XaFNXUMPgDRS9dzZRElebpUHQoHU",
    authDomain: "drigmo2.firebaseapp.com",
    projectId: "drigmo2",
    storageBucket: "drigmo2.appspot.com",
    messagingSenderId: "481420763623",
    appId: "1:481420763623:web:daf1427c7137f0f82fdd42",
    measurementId: "G-GGPZ0E1XVM"
  };

firebase.initializeApp(firebaseConfig);

export default firebaseApp;
