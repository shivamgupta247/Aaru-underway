import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8ly5HnsXlfjKzdIVeuqAggxAHn6jR13w",
  authDomain: "aaru-underway.firebaseapp.com",
  projectId: "aaru-underway",
  storageBucket: "aaru-underway.firebasestorage.app",
  messagingSenderId: "1013522940068",
  appId: "1:1013522940068:web:f0b9f4c5f6b3060ef6a631",
  measurementId: "G-TV097CKZGR"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication
export const auth = getAuth(app)

// Initialize Firestore
export const db = getFirestore(app)

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider()

export default app
