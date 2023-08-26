// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBS8Pp_7I86AQSwsmvrFbdPThwmm6s6iDY",
    authDomain: "radiology-assistant.firebaseapp.com",
    projectId: "radiology-assistant",
    storageBucket: "radiology-assistant.appspot.com",
    messagingSenderId: "663638786318",
    appId: "1:663638786318:web:06e0196de3866bd95e575f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();