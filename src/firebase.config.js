// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASyHN6ZbPQphcssj0vhtWxjW58qSzghCw",
  authDomain: "house-marketplace-app-5f5dd.firebaseapp.com",
  projectId: "house-marketplace-app-5f5dd",
  storageBucket: "house-marketplace-app-5f5dd.appspot.com",
  messagingSenderId: "994881860288",
  appId: "1:994881860288:web:3e5bf757fd643850a6b325"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()