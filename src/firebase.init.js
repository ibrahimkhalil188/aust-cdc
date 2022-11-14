// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxwjh7eo96_7JrL0_A7A140QZnWslpmbg",
    authDomain: "austcdc-3ca81.firebaseapp.com",
    projectId: "austcdc-3ca81",
    storageBucket: "austcdc-3ca81.appspot.com",
    messagingSenderId: "672427083770",
    appId: "1:672427083770:web:8ce8cf6839a71c3f2d4643"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;