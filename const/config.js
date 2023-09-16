
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBAFxDra21XMVpyf-67COz-LdKHb3cyUFI",
  authDomain: "authproject-b46f0.firebaseapp.com",
  projectId: "authproject-b46f0",
  storageBucket: "authproject-b46f0.appspot.com",
  messagingSenderId: "876552083765",
  appId: "1:876552083765:web:1de4b8d0c11e3a2eeb547c",
  measurementId: "G-C8QZHSKLNH"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider}
