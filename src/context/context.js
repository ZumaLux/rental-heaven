import { createContext, useContext } from "react";

export const initialState = {
    
};

const appContext = createContext(initialState);

function Context({ children }) {
  const value = {
    ...state,
  };

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export const useAppContext = () => useContext(appContext);
export default Context;
