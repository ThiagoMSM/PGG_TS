// Firebase/Firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyB9XXpI3RY21CJ0cjW8b0Yx6uNHo3j1_ps",
  authDomain: "zetta4-3b4d5.firebaseapp.com",
  projectId: "zetta4-3b4d5",
  storageBucket: "zetta4-3b4d5.appspot.com",
  messagingSenderId: "544845649921",
  appId: "1:544845649921:web:cbd9e34c44ddcbe2dac800"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


module.exports = { app };