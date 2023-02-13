import { auth, db } from "./firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

//REGISTER USER
export async function registerUser(userIsLoggedIn, registerEmail, registerPassword) {
  try {
    if (userIsLoggedIn) throw new Error("You are already logged in!");
    await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
  } catch (err) {
    console.log(err.message);
  }
}

//LOGIN USER
export async function loginUser(userIsLoggedIn, loginEmail, loginPassword) {
  try {
    if (userIsLoggedIn) throw new Error("You are already logged in!");
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
  } catch (err) {
    console.log(err);
  }
}

//SIGN OUT USER
export async function signOutUser(userIsLoggedIn) {
  if (!userIsLoggedIn) return;
  else {
    await signOut(auth);
    console.log("Signed Out!");
  }
}

//ADDITIONAL USER DATA
export async function createUserDetails(path, item) {
  try {
    const dataCollectionRef = collection(db, path);
    await addDoc(dataCollectionRef, item).then(console.log("Item Added Successfully!"));
  } catch (err) {
    console.log(err.message);
  }
}
