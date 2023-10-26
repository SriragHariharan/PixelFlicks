import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-2ZW1Ahj-pN8yGSZ1fmS9HMvSaHhtjU0",
  authDomain: "pixelflicks-srirag.firebaseapp.com",
  projectId: "pixelflicks-srirag",
  storageBucket: "pixelflicks-srirag.appspot.com",
  messagingSenderId: "675796356539",
  appId: "1:675796356539:web:bd6626e54f1cd8ab8bc89e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();