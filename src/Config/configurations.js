import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXWF_0iA7DmPv06wYjH1Gx7-W0iDJxPGk",
  authDomain: "auth-firebase-65ab2.firebaseapp.com",
  projectId: "auth-firebase-65ab2",
  storageBucket: "auth-firebase-65ab2.appspot.com",
  messagingSenderId: "296668885098",
  appId: "1:296668885098:web:8bd8ddcfe9aa8404d6da13",
  measurementId: "G-JS8L43B2BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;