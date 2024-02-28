// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: process.env.REACT_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyA5E2DDoyp6JeB9oJRkK7BxC8_J8rtg_Bw",
  authDomain: "authentication-try-a32a7.firebaseapp.com",
  projectId: "authentication-try-a32a7",
  storageBucket: "authentication-try-a32a7.appspot.com",
  messagingSenderId: "331161297714",
  appId: "1:331161297714:web:8207fe1fccd1952f1b6d2b",
  measurementId: "G-RSB5QQ973W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// export default app;