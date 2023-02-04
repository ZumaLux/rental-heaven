// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// import { getFirestore } from "@firebase/firestore";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
});

// const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
const db = firebaseConfig.firestore();
export default db;

// export const db = getFirestore(app);
// export default firebase;
