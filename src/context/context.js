import { useState } from "react";
import { createContext, useContext } from "react";

const appContext = createContext();

function Context({ children }) {
  const [carList, setCarlist] = useState([]);

  const value = {
    carList,
    setCarlist,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export const useAppContext = () => useContext(appContext);
export default Context;
