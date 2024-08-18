// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjSHftHAt0s4HDjjrDb9rLOtEpI1GdOBA",
  authDomain: "inventory-management-3b765.firebaseapp.com",
  projectId: "inventory-management-3b765",
  storageBucket: "inventory-management-3b765.appspot.com",
  messagingSenderId: "760239840995",
  appId: "1:760239840995:web:3c7063496055853ce86fd6",
  measurementId: "G-2GD6P2TJ6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}