// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3slZCQ5dx3aoHyTe0m_1PH0SB2g_eVLg",
  authDomain: "todo-app-82963.firebaseapp.com",
  projectId: "todo-app-82963",
  storageBucket: "todo-app-82963.appspot.com",
  messagingSenderId: "519827140993",
  appId: "1:519827140993:web:2e82f8f17267af37d13880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

