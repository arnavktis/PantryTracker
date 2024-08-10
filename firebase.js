// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEY_XbDUjIqlndS4KejWhD3hUBqaH_i6I",
  authDomain: "inventory-management-67ffd.firebaseapp.com",
  projectId: "inventory-management-67ffd",
  storageBucket: "inventory-management-67ffd.appspot.com",
  messagingSenderId: "346193490027",
  appId: "1:346193490027:web:d6da35f484e137dde8012e",
  measurementId: "G-8QTVT0CV5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
export { firestore };