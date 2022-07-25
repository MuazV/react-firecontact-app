
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCO92_Gv26ys2gdNiTPOqT9srXGAM-vW7Q",
  authDomain: "firecontact-c1ea9.firebaseapp.com",
  projectId: "firecontact-c1ea9",
  storageBucket: "firecontact-c1ea9.appspot.com",
  messagingSenderId: "394404250243",
  appId: "1:394404250243:web:217001392e8a4f66e2d1b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)