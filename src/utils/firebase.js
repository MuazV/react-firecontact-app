import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBspeURJDpC7RHGKBXIj5ocouZwt263L8s",
  authDomain: "fire-last.firebaseapp.com",
  projectId: "fire-last",
  storageBucket: "fire-last.appspot.com",
  messagingSenderId: "998042878461",
  appId: "1:998042878461:web:1db7033ba8edc9ac5ed994"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)