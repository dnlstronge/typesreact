import React, { createContext, useContext } from "react";

const myData = { username: "Israel" };
export const GlobalContext = createContext(myData);

interface Props {
  children: React.ReactNode;
}

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ username: "Chibuzor" }}>
      {children}
    </GlobalContext.Provider>
  );
};
