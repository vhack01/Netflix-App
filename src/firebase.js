import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxWmsD8EHULoCz1JZ7Tdk-g4fxZMe7yfA",
  authDomain: "netflix-app-f273b.firebaseapp.com",
  databaseURL: "https://netflix-app-f273b-default-rtdb.firebaseio.com",
  projectId: "netflix-app-f273b",
  storageBucket: "netflix-app-f273b.appspot.com",
  messagingSenderId: "643169250172",
  appId: "1:643169250172:web:b60585b473588acdef12f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const register_db = getDatabase();

export default app;
