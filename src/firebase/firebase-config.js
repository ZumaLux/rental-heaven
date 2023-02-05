import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import { getAuth } from "firebase/auth";

// const db = firebaseConfig.firestore();
// const db = getFirestore();

// export const auth = getAuth(db);
// export default db;

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "@firebase/firestore";

// const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

// export const db = getFirestore(app);
// export default firebase;
