// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore , doc , setDoc}   from "firebase/firestore"
   
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjyLK1sTO7TqMptiaf31aX_gDZr6PTo7s",
  authDomain: "financely-5d3fc.firebaseapp.com",
  projectId: "financely-5d3fc",
  storageBucket: "financely-5d3fc.appspot.com",
  messagingSenderId: "764373354058",
  appId: "1:764373354058:web:e8a1061126396fa20b88b3",
  measurementId: "G-PJM9TCVEDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export{db, auth , provider , doc, setDoc}