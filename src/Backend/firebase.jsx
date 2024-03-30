// import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  doc,
  deleteDoc,
  updateDoc,
  where,
  query,
  limit,
} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU0rkuQUPAKIpHOv47K3qLI8Q40aT6leU",
  authDomain: "suist-5e5af.firebaseapp.com",
  projectId: "suist-5e5af",
  storageBucket: "suist-5e5af.appspot.com",
  messagingSenderId: "368591861540",
  appId: "1:368591861540:web:9b2f93a6671d03770b65b1",
  measurementId: "G-DS5BKMHMM1",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  getDoc,
  setDoc,
  deleteDoc,
  where,
  query,
  limit,
};
