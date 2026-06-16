import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBSkQCJdMWheYfq0a3NOuoAubJVU3Y5RGE",
  authDomain: "naemt-eksamens-forbedring-sp.firebaseapp.com",
  projectId: "naemt-eksamens-forbedring-sp",
  storageBucket: "naemt-eksamens-forbedring-sp.firebasestorage.app",
  messagingSenderId: "176267290520",
  appId: "1:176267290520:web:88eebdad65a48722456ded",
  measurementId: "G-BMY9SWVK2V"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)