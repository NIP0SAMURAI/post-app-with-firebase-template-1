// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOAqOvrFLSbJBCC8UEFSB8mprn6I1GWKs",
  authDomain: "mushroom-webapp.firebaseapp.com",
  databaseURL: "https://mushroom-webapp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mushroom-webapp",
  storageBucket: "mushroom-webapp.appspot.com",
  messagingSenderId: "154633620125",
  appId: "1:154633620125:web:13d71c0ffda07c4f8c2274",
  measurementId: "G-EWHDHN3JZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)