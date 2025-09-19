// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCPiDId24qdPSQrA_LI3LxoEN38n2dZoU",
  authDomain: "tannuuv-1e135.firebaseapp.com",
  projectId: "tannuuv-1e135",
  storageBucket: "tannuuv-1e135.firebasestorage.app",
  messagingSenderId: "266441337798",
  appId: "1:266441337798:web:d20b88cd9200038c2a20c7",
  measurementId: "G-91XHD4LP4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);