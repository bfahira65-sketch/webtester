
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYbrhY9ks-q35I9jMEGS1QSrRBQ8e7nu4",
  authDomain: "gamezone-f678f.firebaseapp.com",
  projectId: "gamezone-f678f",
  storageBucket: "gamezone-f678f.firebasestorage.app",
  messagingSenderId: "446833152986",
  appId: "1:446833152986:web:fd49fcdb8f215ef020e6e3",
  measurementId: "G-BYB61LRQB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
