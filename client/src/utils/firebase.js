
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotesai-59ae0.firebaseapp.com",
  projectId: "authexamnotesai-59ae0",
  storageBucket: "authexamnotesai-59ae0.firebasestorage.app",
  messagingSenderId: "1095868020031",
  appId: "1:1095868020031:web:45453480392f9f41034f8a"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}