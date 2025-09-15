// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // if using Firestore
import { getAuth } from "firebase/auth"; // if using Auth

const firebaseConfig = {
    apiKey: "AIzaSyBxER-XXSBsoPuZRbBoWFZYwgOAKKQ7lXo",
    authDomain: "portfolio-8a226.firebaseapp.com",
    projectId: "portfolio-8a226",
    storageBucket: "portfolio-8a226.firebasestorage.app",
    messagingSenderId: "776912933419",
    appId: "1:776912933419:web:85ff6e25ada6b3d2aad06e",
    measurementId: "G-WMCZ782L1N"
  };
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
