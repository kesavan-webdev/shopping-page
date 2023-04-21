// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBS5lfycrSAywkcuKdq9pmlW2BbzEeMAPU",
  authDomain: "e-commerce-759ae.firebaseapp.com",
  projectId: "e-commerce-759ae",
  storageBucket: "e-commerce-759ae.appspot.com",
  messagingSenderId: "536853410237",
  appId: "1:536853410237:web:073f1721f044c3279722d4",
  measurementId: "G-NSSLJ91WHK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();
