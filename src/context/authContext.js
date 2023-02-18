import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import { auth } from "../firebase/firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { collection_customers } from "../utils/constants";
import { isMainAdmin, isAdmin, isUser } from "../firebase/firebase-access-level";

const appContext = createContext();

function AuthContext({ children }) {
  const [signedUser, setSignedUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        console.log("current user => ", currentUser.uid);
        const docRef = doc(db, collection_customers, currentUser.uid);
        const docSnap = await getDoc(docRef);
        console.log("user =>", docSnap.data());

        setSignedUser(docSnap.data());
      } else {
        setSignedUser(null);
        console.log("set null");
      }
    });
  }, []);

  const isMainAdminAuth = () => {
    return isMainAdmin(signedUser);
  };
  const isAdminAuth = () => {
    return isAdmin(signedUser);
  };
  const isUserAuth = () => {
    return isUser(signedUser);
  };

  const value = {
    signedUser,
    setSignedUser,
    isMainAdminAuth,
    isAdminAuth,
    isUserAuth,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export const useAuthContext = () => useContext(appContext);
export default AuthContext;
