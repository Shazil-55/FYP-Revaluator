// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAO3gM5vx6EEtdHhpCPM_BUKQxQfbEQ0c",
  authDomain: "finalyearproject-c0d09.firebaseapp.com",
  projectId: "finalyearproject-c0d09",
  storageBucket: "finalyearproject-c0d09.appspot.com",
  messagingSenderId: "37792250906",
  appId: "1:37792250906:web:1c3b9aced0d62094f7e5a3",
  measurementId: "G-TXF179G3X4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;