import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1xf3TijkoSYqynLwiUbI64eitOdfs93A",
  authDomain: "chat-app-1d453.firebaseapp.com",
  projectId: "chat-app-1d453",
  storageBucket: "chat-app-1d453.appspot.com",
  messagingSenderId: "641078902052",
  appId: "1:641078902052:web:301c931c0bcc953486c7b1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
