import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { createContext, useContext } from "react";
import { auth } from "../firebase/firebase-config";

const appContext = createContext();

function Context({ children }) {
  const [carList, setCarlist] = useState([]);
  const [signedUser, setSignedUser] = useState(null);

  // useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setSignedUser(currentUser);
      else {
        setSignedUser(null);
      }
    });
  // }, []);

  const value = {
    signedUser,
    setSignedUser,
    carList,
    setCarlist,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export const useAppContext = () => useContext(appContext);
export default Context;
