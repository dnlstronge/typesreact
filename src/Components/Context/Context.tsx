import React, { createContext, useState, useContext } from "react";

const myData = { };

/* default values */
export const GlobalContext = createContext({
    homeActive: false, updateActive: () => {},
    programsActive: false, updatePrograms: () => {},
    playgroundActive: false, updatePlayground: () => {},
    aboutActive: false, updatePlayGround: () => {}
});

interface Props {
  children: React.ReactNode;
}

export const GlobalContextProvider: React.FC<Props> = ({ children }) => {

    const [homeActive, setHomeActive] = useState(true)
    const [programsActive, setProgramsActive] = useState(false)
    const [playgroundActive, setPlaygroundActive] = useState(false)
    const [aboutActive, setAboutActive] = useState(false)




    /*Helpers to update global state */
    const updateHome = () => {
        setHomeActive(true)
    }
    const updatePrograms = () => {
        
    }
  return (
    <GlobalContext.Provider value={{ homeActive, updateHome }}>
      {children}
    </GlobalContext.Provider>
  );
};
