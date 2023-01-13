// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCUFxiFPOhxWsuIC8VMphm9GeVFR79_Zv0",
    authDomain: "learnreact-13c1a.firebaseapp.com",
    projectId: "learnreact-13c1a",
    storageBucket: "learnreact-13c1a.appspot.com",
    messagingSenderId: "217950249276",
    appId: "1:217950249276:web:55eeefe37d621074813e39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = app.auth()