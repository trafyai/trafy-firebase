// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCalQassYq74aZtQqi7siYAHZUumBYz_iA",
  authDomain: "nextjs-auth-bb839.firebaseapp.com",
  projectId: "nextjs-auth-bb839",
  storageBucket: "nextjs-auth-bb839.appspot.com",
  messagingSenderId: "660578374362",
  appId: "1:660578374362:web:01100d9ddc229daa578be3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);