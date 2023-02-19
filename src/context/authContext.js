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
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentUser) => {
      setIsPending(true);
      if (currentUser) {
        const docRef = doc(db, collection_customers, currentUser.uid);
        const docSnap = await getDoc(docRef);

        setSignedUser(docSnap.data());
      } else {
        setSignedUser(null);
      }
      setIsPending(false);
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
    isPending,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export const useAuthContext = () => useContext(appContext);
export default AuthContext;
