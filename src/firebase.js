// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_sNZtiJ78eSCiO6en7iCRvaHJ-zyqYCM",
  authDomain: "my--clone-6a057.firebaseapp.com",
  projectId: "my--clone-6a057",
  storageBucket: "my--clone-6a057.appspot.com",
  messagingSenderId: "254331671172",
  appId: "1:254331671172:web:6111c9dba540781b5328d1",
  measurementId: "G-ZE7DBRXTT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getDatabase(app);
export {auth,db};
