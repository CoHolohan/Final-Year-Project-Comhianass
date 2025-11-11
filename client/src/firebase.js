import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDswhoXzlSeORdSrEnI_V5XbvYYlQNPing",
  authDomain: "fyp-comhianass.firebaseapp.com",
  projectId: "fyp-comhianass",
  storageBucket: "fyp-comhianass.firebasestorage.app",
  messagingSenderId: "1005548161839",
  appId: "1:1005548161839:web:a7720f917a06c8f5c7efda",
  measurementId: "G-B1S04BFG77"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);