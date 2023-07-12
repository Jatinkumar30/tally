import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxfg7v5-EPxQz1qrJO5q7rYTTIrd8znPU",
  authDomain: "tallycounter-aa32f.firebaseapp.com",
  projectId: "tallycounter-aa32f",
  storageBucket: "tallycounter-aa32f.appspot.com",
  messagingSenderId: "944329931105",
  appId: "1:944329931105:web:3006294b9306b5f314ad20",
  measurementId: "G-WDK5MBESMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export {app, auth}