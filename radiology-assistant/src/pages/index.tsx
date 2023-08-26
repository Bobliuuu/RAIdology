import { Base } from '../templates/Base';

// FIREBASE CONNECTION
import { initializeApp } from "firebase/app";
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

const Index = () => <Base />;

export default Index;
