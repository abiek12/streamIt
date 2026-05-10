// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOQh7L7kuycZbI3OAYQkqrm9egJYYw9uQ",
  authDomain: "streamit-c9bf4.firebaseapp.com",
  projectId: "streamit-c9bf4",
  storageBucket: "streamit-c9bf4.firebasestorage.app",
  messagingSenderId: "207637195923",
  appId: "1:207637195923:web:782ed319954aaee55bf166",
  measurementId: "G-0FY8R0WB84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
