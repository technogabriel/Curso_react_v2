import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBpBDxJyStOp63MckVPPOmv8ibsXXCBFGY",
  authDomain: "react-firebase-998fc.firebaseapp.com",
  projectId: "react-firebase-998fc",
  storageBucket: "react-firebase-998fc.appspot.com",
  messagingSenderId: "540231720522",
  appId: "1:540231720522:web:da24e12590916e3ce010b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authenticate = getAuth(app)