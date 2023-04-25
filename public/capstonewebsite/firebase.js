// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/np/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0IS8Bksrw2qQ36Ugt6bWMakfUiFH55hg",
  authDomain: "infonauts-website.firebaseapp.com",
  projectId: "infonauts-website",
  storageBucket: "infonauts-website.appspot.com",
  messagingSenderId: "250082477857",
  appId: "1:250082477857:web:3153c1cf0a8e9a4f7be060",
  measurementId: "G-SSGLQTXZGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);