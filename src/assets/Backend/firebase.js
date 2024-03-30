const { initializeApp } = require("firebase/app");
const {
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
} = require("@firebase/firestore");

// const firebaseConfig = {
//   apiKey: "AIzaSyCNxVYH6UMenNWcZ-JPtQlInwlu7l8xhng",
//   authDomain: "eggpot-6453e.firebaseapp.com",
//   projectId: "eggpot-6453e",
//   storageBucket: "eggpot-6453e.appspot.com",
//   messagingSenderId: "306405542848",
//   appId: "1:306405542848:web:79341cd046a924d8075625",
//   measurementId: "G-GY62W78C9S",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBjYK6bP52-5FgkW3_X-cl2LBpoXXaUj_c",
  authDomain: "testt-e052b.firebaseapp.com",
  projectId: "testt-e052b",
  storageBucket: "testt-e052b.appspot.com",
  messagingSenderId: "563525861738",
  appId: "1:563525861738:web:afebb940383bd0f3646513",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = {
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
};
