// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3sClCe-Koh7_VNYirSCT4bSiBf8PTs2c",
  authDomain: "learning-react-45750.firebaseapp.com",
  projectId: "learning-react-45750",
  storageBucket: "learning-react-45750.appspot.com",
  messagingSenderId: "295992575523",
  appId: "1:295992575523:web:c60c98b54028710fd79396"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );