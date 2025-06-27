// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgwZvijygF0NJrTzaghtFaONJosVk1Bdc",
  authDomain: "verification-2f10b.firebaseapp.com",
  projectId: "verification-2f10b",
  storageBucket: "verification-2f10b.firebasestorage.app",
  messagingSenderId: "958425447516",
  appId: "1:958425447516:web:85bd1152f3530fd0803a99",
  measurementId: "G-TPQJ1KRCC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db = getFirestore(app)

export const googleauthprovider=new GoogleAuthProvider();




