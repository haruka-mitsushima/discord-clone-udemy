import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { GoogleAuthProvider, getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBI0PnQF4nyq7jbs5bU9N_PPMdHVp80kto",
  authDomain: "discord-clone-udemy-d8dbc.firebaseapp.com",
  projectId: "discord-clone-udemy-d8dbc",
  storageBucket: "discord-clone-udemy-d8dbc.appspot.com",
  messagingSenderId: "554238323835",
  appId: "1:554238323835:web:3145b3cf588c06072cc6de"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
