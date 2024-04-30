// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC42PeO6TZToxgsLVjUbJk0BQaVfL8UT88",
  authDomain: "webapp-fc4ac.firebaseapp.com",
  projectId: "webapp-fc4ac",
  storageBucket: "webapp-fc4ac.appspot.com",
  messagingSenderId: "225644404634",
  appId: "1:225644404634:web:cbd849c91f31a68d9ee423",
  measurementId: "G-DYKYLNLG6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

const storage = getStorage(app);


export { app, analytics, storage };
