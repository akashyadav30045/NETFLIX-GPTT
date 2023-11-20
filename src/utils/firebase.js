// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7y9orG1Yt6Ctoo_sf7TYhrESd7VFs8no",
  authDomain: "netflixgpt-17067.firebaseapp.com",
  projectId: "netflixgpt-17067",
  storageBucket: "netflixgpt-17067.appspot.com",
  messagingSenderId: "76232243051",
  appId: "1:76232243051:web:eda9b4de3afce6b4ba7e2e",
  measurementId: "G-F1CJW33QT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();