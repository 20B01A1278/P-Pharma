import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";
import {
    getAuth,
    signOut,
  } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA2L62CWlvEcNzfv-GDHoUZM8nz2R1_VVc",
authDomain: "pharmacy-website-c0e77.firebaseapp.com",
databaseURL: "https://pharmacy-website-c0e77-default-rtdb.firebaseio.com",
projectId: "pharmacy-website-c0e77",
storageBucket: "pharmacy-website-c0e77.appspot.com",
 messagingSenderId: "286244576940",
appId: "1:286244576940:web:12eaf163d981245e214909"
};
const logout = () => {
    signOut(auth);
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth();
export const storage = getStorage(app)
export { db, auth, logout }    
export default db;
