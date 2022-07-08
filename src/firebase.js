// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE_oWK-vvwkHT7xdkkwM4j6LCT9LWURco",
  authDomain: "tinder-clone-d3190.firebaseapp.com",
  projectId: "tinder-clone-d3190",
  storageBucket: "tinder-clone-d3190.appspot.com",
  messagingSenderId: "563097032170",
  appId: "1:563097032170:web:9d063464ff78fdcba38e93"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export {auth}