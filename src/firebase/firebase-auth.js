import { auth, db } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

//REGISTER USER
export async function registerUser(userIsLoggedIn, registerEmail, registerPassword) {
  try {
    if (userIsLoggedIn) throw new Error("You are already logged in!");
    const response = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
    console.log("Registration successfull");
    return response.user;
  } catch (err) {
    console.log(err.message);
  }
  return null;
}

//LOGIN USER
export async function loginUser(userIsLoggedIn, loginEmail, loginPassword) {
  try {
    if (userIsLoggedIn) throw new Error("You are already logged in!");
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log("Login successfull");
    return true;
  } catch (err) {
    console.log(err);
  }
  return false;
}

//SIGN OUT USER
export async function signOutUser() {
  await signOut(auth);
  console.log("Signed Out!");
}

//ADDITIONAL USER DATA
export async function createUserDetails(path, item, docId) {
  try {
    await setDoc(doc(db, path, docId), { ...item });
    console.log("Item Added Successfully!");
  } catch (err) {
    console.log(err.message);
  }
}

