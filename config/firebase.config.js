// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "rentify-f27d1.firebaseapp.com",
  projectId: "rentify-f27d1",
  storageBucket: "rentify-f27d1.firebasestorage.app",
  messagingSenderId: "922837391195",
  appId: "1:922837391195:web:d8bbb57e86991c593d2c7e"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig): getApp();
const db = getFirestore(app);
const storage = getStorage(app);

  export{db,storage}